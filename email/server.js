const express = require("express");
const dotenv = require("dotenv");
const { notifyTutorAllocated } = require("./notificationService");

dotenv.config();

const app = express();
app.use(express.json());

// Example endpoint: allocate tutor to student
app.post("/allocate-tutor", async (req, res) => {
  const { studentEmail, tutorEmail, tutorName } = req.body;

  if (!studentEmail || !tutorEmail || !tutorName) {
    return res.status(400).json({
      success: false,
      message: "Missing fields: studentEmail, tutorEmail, tutorName",
    });
  }

  await notifyTutorAllocated(studentEmail, tutorEmail, tutorName);

  res.json({
    success: true,
    message: "Tutor allocation done + emails sent",
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));