import { useEffect, useState } from "react";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo";
import { RenderTodo } from "./Components/RenderTodo";

function App() {
  const [Obj, setState] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8000/viewTodo");
        const data = await res.json();
        setState(data.todos);
      } catch (err) {
        console.log(`error while fetching data`);
        console.error(err);
      }
    })();
  }, [Obj, setState]);

  return (
    <>
      <CreateTodo Obj={Obj} setState={setState}></CreateTodo>
      <RenderTodo todos={Obj}></RenderTodo>
    </>
  );
}

export default App;
