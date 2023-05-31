const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  userID: { type: String, required: true },
  project_theme: { type: String, required: true },
  reason: { type: String, required: true },
  type: { type: String, required: true },
  division: { type: String, required: true },
  category: { type: String, required: true },
  priority: { type: String, required: true },
  department: { type: String, required: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, default: 'Registered' },
});

// Add text indexes to the fields for text search
projectSchema.index({
  userID: 'text',
  project_theme: 'text',
  reason: 'text',
  type: 'text',
  division: 'text',
  category: 'text',
  priority: 'text',
  department: 'text',
  start_date: 'text',
  end_date: 'text',
  location: 'text',
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = {
  ProjectModel
};
