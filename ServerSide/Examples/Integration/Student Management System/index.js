const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { mongoose } = require("./mongoDb");

const studentSchema = new mongoose.Schema({
  name: String,
  roll_no: Number,
});

const Student = mongoose.model("student", studentSchema);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/students", async (req, res) => {
  await Student.find()
    .then((students) => {
      res.send({
        message: "Success! All students found",
        data: students,
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
        data: [],
      });
    });
});

app.get("/student/:roll_no", async (req, res) => {
  await Student.find({ roll_no: req.params.roll_no })
    .then((students) => {
      res.send({
        message: "Successfully found the student",
        data: students,
      });
    })
    .catch((err) => {
      res.send({
        message: err.message,
        data: [],
      });
    });
});

app.post("/add", async (req, res) => {
  let name = req.body.stud_name;
  let rollNo = req.body.roll_no;
  if (name && rollNo) {
    const newStudent = new Student({
      name: name,
      roll_no: rollNo,
    });
    await newStudent.save();
    return res.send(newStudent);
  }
  return res.send("Error While adding, Please check the inputs");
});

module.exports = { app, Student };
