import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo";
import { RenderTodo } from "./Components/RenderTodo";

function App() {
  const [Obj, setState] = useState([]);
  // console.log(Obj);
  // console.table(Obj);

  fetch("http://localhost:8000/viewTodo")
    .then(async (res) => {
      const json = await res.json();
      setState(json.todos);
    })
    .catch((err) => {
      console.log(`error while fetching data`);
      console.error(err);
    });

  return (
    <>
      <CreateTodo Obj={Obj} setState={setState}></CreateTodo>
      <RenderTodo todos={Obj}></RenderTodo>
    </>
  );
}

export default App;
