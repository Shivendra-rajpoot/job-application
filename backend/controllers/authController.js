
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const Applicant = require('../models/applicant');
const transporter = require('../config/email');
const jwt = require("jsonwebtoken");
const sendEmail = require("../helpers/sendEmail");

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

    //GENERATE JWT TOKEN
    const token = jwt.sign(
      { id: applicant.id, email: applicant.email_id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
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



// controller
exports.register = async (req, res) => {
  try {
    const { full_name, email_id, password } = req.body;

  
    const applicant = await Applicant.create({
      full_name,
      email_id,
      password,
      visible_password: password
    });

   
    const emailBody = `
      <h2>Welcome to RCB Online Job Portal</h2>
      <p>Dear <strong>${full_name}</strong>,</p>

      <p>Your account has been created successfully.</p>

      <h3>Your Login Details:</h3>

      <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 400px;">
        <tr style="background-color: #f2f2f2;">
          <th style="text-align: left; padding: 8px;">Field</th>
          <th style="text-align: left; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="padding: 8px;">Full Name</td>
          <td style="padding: 8px;">${full_name}</td>
        </tr>
        <tr>
          <td style="padding: 8px;">Email</td>
          <td style="padding: 8px;">${email_id}</td>
        </tr>
        <tr>
          <td style="padding: 8px;">Password</td>
          <td style="padding: 8px;">${password}</td>
        </tr>
      </table>

      <br>
      <p>You can now log in using the above credentials.</p>

      <p>Thank you,<br>RCB Online Job Portal Team</p>
    `;

    
    try {
      await sendEmail(email_id, "Your RCB Job Portal Account Details", emailBody);
    } catch (mailError) {
      console.error("📧 Email sending failed:", mailError.message);

      return res.status(500).json({
        success: false,
        message: "Account created but failed to send email",
        email_error: mailError.message
      });
    }

   
    res.status(201).json({
      success: true,
      message: "Registered successfully and email sent",
      data: {
        id: applicant.id,
        full_name: applicant.full_name,
        email_id: applicant.email_id,
      },
    });

  } catch (error) {
    console.error("Error creating applicant:", error);

    res.status(500).json({
      success: false,
      message: "Failed to register applicant",
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