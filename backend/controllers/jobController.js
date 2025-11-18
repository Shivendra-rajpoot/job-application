const Job = require('../models/job');
const { Op } = require('sequelize');


// 🟢 Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch jobs',
      error: error.message,
    });
  }
};



exports.createJob = async (req, res) => {
  try {
    let {
      advt_no,
      title,
      code,
      category,
      mode_of_application,
      from_date,
      to_date,
      fee_apply,
      fee,
      advt_file,
    } = req.body;

    // Convert JSON strings to array (when using FormData)
    if (typeof category === "string") {
      category = JSON.parse(category);
    }
    if (typeof mode_of_application === "string") {
      mode_of_application = JSON.parse(mode_of_application);
    }

    // Validate fields
    if (
      !title || !code || !category || !mode_of_application ||
      !from_date || !to_date || !fee_apply || !fee || !advt_file || !advt_no
    ) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    if (!['yes', 'no'].includes(fee_apply.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: 'fee_apply must be either "yes" or "no"',
      });
    }

    // Create job
    const job = await Job.create({
      advt_no,
      title,
      code,
      category,
      mode_of_application,
      from_date,
      to_date,
      fee_apply,
      fee,
      advt_file,
    });

    res.status(201).json({
      success: true,
      message: 'Job created successfully',
      data: job,
    });

  } catch (error) {
    console.error('Error creating job:', error);
    res.status(400).json({
      success: false,
      message: 'Failed to create job',
      error: error.message,
    });
  }
};



// 🟡 Update a job by ID
exports.updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Job.update(req.body, { where: { id } });

    if (updated) {
      const updatedJob = await Job.findByPk(id);
      return res.status(200).json({
        success: true,
        message: 'Job updated successfully',
        data: updatedJob,
      });
    }

    res.status(404).json({
      success: false,
      message: 'Job not found',
    });
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update job',
      error: error.message,
    });
  }
};


exports.deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Job.destroy({ where: { id } });

    if (deleted) {
      return res.status(200).json({
        success: true,
        message: 'Job deleted successfully',
      });
    }

    res.status(404).json({
      success: false,
      message: 'Job not found',
    });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete job',
      error: error.message,
    });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findOne({ where: { id } });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
      error: error.message,
    });
  }
};


exports.getActiveJobs = async (req, res) => {
  try {
    const today = new Date();

    const activeJobs = await Job.findAll({
      where: {
        to_date: {
          [Op.gte]: today, // compare with current date
        },
      },
      order: [['to_date', 'ASC']], // optional: sort by closing soonest
    });

    res.status(200).json({
      success: true,
      message: 'Active jobs fetched successfully',
      count: activeJobs.length,
      data: activeJobs,
    });
  } catch (error) {
    console.error('Error fetching active jobs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch active jobs',
      error: error.message,
    });
  }
};
