
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const Applicant = require('../models/applicant');
const transporter = require('../config/email');

exports.login = async (req, res) => {
  try {
    const { email_id, password } = req.body;

   
    if (!email_id || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
      });
    }

   
    const applicant = await Applicant.findOne({ where: { email_id } });
    if (!applicant) {
      return res.status(404).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    
    const isMatch = await bcrypt.compare(password, applicant.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        id: applicant.id,
        full_name: applicant.full_name,
        email_id: applicant.email_id,
      },
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong during login',
      error: error.message,
    });
  }
};



exports.register = async (req, res) => {
  try {
    const { full_name, email_id, password, confirm_password } = req.body;

 
    if (!full_name || !email_id || !password || !confirm_password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

  
    if (password !== confirm_password) {
      return res.status(400).json({
        success: false,
        message: 'Password and Confirm Password do not match',
      });
    }

   
    const existingApplicant = await Applicant.findOne({ where: { email_id } });
    if (existingApplicant) {
      return res.status(400).json({
        success: false,
        message: 'Email is already registered',
      });
    }

   
    const applicant = await Applicant.create({
      full_name,
      email_id,
      password, 
        visible_password: password
    });

    res.status(201).json({
      success: true,
      message: 'Applicant registered successfully',
      data: {
        id: applicant.id,
        full_name: applicant.full_name,
        email_id: applicant.email_id,
      },
    });

  } catch (error) {
    console.error('Error creating applicant:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to register applicant',
      error: error.message,
    });
  }
};
exports.forgotPassword = async (req, res) => {
  try {
    const { email_id } = req.body;

    if (!email_id) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const applicant = await Applicant.findOne({ where: { email_id } });
    if (!applicant) {
      return res.status(404).json({ success: false, message: 'No account found with that email' });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    const expires = Date.now() + 3600000; // 1 hour

    applicant.reset_token = resetToken;
    applicant.reset_token_expires = new Date(expires);
    await applicant.save();

    const resetLink = `${process.env.APP_URL}/api/reset-password/${resetToken}`;

    // Send Email
    const mailOptions = {
      from: `"RCB Job Portal" <${process.env.SMTP_USER}>`,
      to: email_id,
      subject: 'Password Reset Request',
      html: `
        <h3>Hello ${applicant.full_name},</h3>
        <p>You requested a password reset for your account.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}" target="_blank">${resetLink}</a>
        <p><b>Note:</b> This link is valid for 1 hour.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Password reset email sent successfully',
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ success: false, message: 'Failed to send reset email', error: error.message });
  }
};

// 🔒 Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { new_password, confirm_password } = req.body;

    if (!new_password || !confirm_password) {
      return res.status(400).json({ success: false, message: 'Both password fields are required' });
    }

    if (new_password !== confirm_password) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    const applicant = await Applicant.findOne({
      where: {
        reset_token: token,
        reset_token_expires: { [Op.gt]: new Date() },
      },
    });

    if (!applicant) {
      return res.status(400).json({ success: false, message: 'Invalid or expired token' });
    }

    applicant.password = new_password;
    applicant.visible_password = new_password;
    applicant.reset_token = null;
    applicant.reset_token_expires = null;
    await applicant.save();

    res.status(200).json({ success: true, message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to reset password', error: error.message });
  }
};