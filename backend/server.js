const express = require("express");
const { connectionDB } = require("./db");
const { todoSchema } = require("./validataion/zod.validate");
const { Todo } = require("./models/todo.models");
const port = process.env.PORT || 8000;
const cors = require("cors");

connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  })
  .catch((err) =>
    console.error(`error while connection with database in server.js`)
  );

const app = express();

// including body-parser
app.use(express.json());
app.use(cors()); /// cors policy.

app.post("/addTodo", async (req, res) => {
  const response = todoSchema.safeParse(req.body);
  //   console.log(response); // it contains the two things the success and data.

  if (!response.success) {
    return res.status(400).json({
      msg: "Not correct input format, title->string, description->string, is expected here.",
    });
  }

  // here come when the input validation is true, then save the data in database.
  const todo = await Todo.create(req.body); // this will create the title and description and store in db.

  res.status(200).json({
    msg: "got your input successfully.",
    todo,
  });
});

app.put("/updateTodo/:id", async (req, res) => {
  const id = req.params.id;

  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(400).json({
      msg: "Not correct id of todo",
    });
  }

  // then todo will have todo data.
  if (todo.isCompleted) {
    return res.status(400).json({
      msg: "Already completed",
    });
  }

  todo.isCompleted = true;
  todo.save(); // this is make the changes.

  return res.status(200).json({
    msg: "todo marked completed",
    todo,
  });
});

app.get("/viewTodo", async (req, res) => {
  // get all todo from db, and return that to user.
  try {
    const todos = await Todo.find();
    res.status(200).json({
      msg: "your todos are here",
      todos,
    });
  } catch (err) {
    console.error(`error while contacting to db in viewTodo route, ${err}`);
    res.status(500).json({
      msg: "internal server issue",
    });
  }
});
