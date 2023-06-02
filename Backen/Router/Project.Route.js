const express = require("express");
const projectRoute = express.Router();
const { ProjectModel } = require("../Model/ProjectModel");

projectRoute.get("/", async (req, res) => {
  const { search } = req.query;

  try {
    const query = {
      $or: [
        { project_theme: { $regex: search, $options: "i" } },
        { reason: { $regex: search, $options: "i" } },
        { type: { $regex: search, $options: "i" } },
        { division: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { priority: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } },
        { start_date: { $regex: search, $options: "i" } },
        { end_date: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { status: { $regex: search, $options: "i" } },
      ],
    };

    const data = await ProjectModel.find(query);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});
projectRoute.get("/sort/high", async (req, res) => {
  try {
    const data = await ProjectModel.aggregate([
      {
        $addFields: {
          priorityOrder: {
            $switch: {
              branches: [
                { case: { $eq: ['$priority', 'high'] }, then: 0 },
                { case: { $eq: ['$priority', 'medium'] }, then: 1 },
                { case: { $eq: ['$priority', 'low'] }, then: 2 }
              ],
              default: 3
            }
          }
        }
      },
      { $sort: { priorityOrder: 1 } }
    ]);

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});
projectRoute.get("/sort/low", async (req, res) => {
  try {
    const data = await ProjectModel.aggregate([
      {
        $addFields: {
          priorityOrder: {
            $switch: {
              branches: [
                { case: { $eq: ['$priority', 'low'] }, then: 0 },
                { case: { $eq: ['$priority', 'medium'] }, then: 1 },
                { case: { $eq: ['$priority', 'high'] }, then: 2 }
              ],
              default: 3
            }
          }
        }
      },
      { $sort: { priorityOrder: 1 } }
    ]);

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

projectRoute.get("/dashboard", async (req, res) => {
  try {
    const Total = await ProjectModel.find();
    const Total_STR = await ProjectModel.find({ department: "STR" });
    const Total_STR_Closed = await ProjectModel.find({
      department: "STR",
      status: "Closed",
    });
    const Total_FIN = await ProjectModel.find({ department: "FIN" });
    const Total_FIN_Closed = await ProjectModel.find({
      department: "FIN",
      status: "Closed",
    });
    const Total_QLT = await ProjectModel.find({ department: "QLT" });
    const Total_QLT_Closed = await ProjectModel.find({
      department: "QLT",
      status: "Closed",
    });
    const Total_MAN = await ProjectModel.find({ department: "MAN" });
    const Total_MAN_Closed = await ProjectModel.find({
      department: "MAN",
      status: "Closed",
    });
    const Total_STO = await ProjectModel.find({ department: "STO" });
    const Total_STO_Closed = await ProjectModel.find({
      department: "STO",
      status: "Closed",
    });
    const Total_HR = await ProjectModel.find({ department: "HR" });
    const Total_HR_Closed = await ProjectModel.find({
      department: "HR",
      status: "Closed",
    });

    const Running = await ProjectModel.find({ status: "Running" });
    const Registered = await ProjectModel.find({ status: "Registered" });
    const Canceled = await ProjectModel.find({ status: "Canceled" });
    const Closed = await ProjectModel.find({ status: "Closed" });
    res.send({
      Running: Running.length,
      Registered: Registered.length,
      Canceled: Canceled.length,
      Closed: Closed.length,
      Total: Total.length,
      Total_FIN:Total_FIN.length,
      Total_FIN_Closed:Total_FIN_Closed.length,
      Total_STR:Total_STR.length,
      Total_STR_Closed:Total_STR_Closed.length,
      Total_QLT:Total_QLT.length,
      Total_QLT_Closed:Total_QLT_Closed.length,
      Total_MAN:Total_MAN.length,
      Total_MAN_Closed:Total_MAN_Closed.length,
      Total_STO:Total_STO.length,
      Total_STO_Closed:Total_STO_Closed.length,
      Total_HR:Total_HR.length,
      Total_HR_Closed:Total_HR_Closed.length
    });
  } catch (err) {
    res.send(err);
  }
});

projectRoute.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const data = new ProjectModel(payload);
    await data.save();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});
projectRoute.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    const data = await ProjectModel.findByIdAndUpdate({ _id: id }, payload);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = {
  projectRoute
};
