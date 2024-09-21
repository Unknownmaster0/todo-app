import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo";
import { RenderTodo } from "./Components/RenderTodo";

function App() {
  const [Obj, setState] = useState([
    // { title: "gym", description: "go to gym at 7-9 AM sharp" },
    // { title: "study", description: "who study beside me" },
    // { title: "cycling", description: "kitna gym krega bhai" },
  ]);
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

  // function OnClickHandler() {
  //   const input1 = document.getElementById("ip1");
  //   const input2 = document.getElementById("ip2");
  //   const title = input1.value;
  //   const description = input2.value;
  //   setState([...Obj, { title, description, completed: "false" }]);
  //   input1.value = "";
  //   input2.value = "";
  // }

  return (
    <>
      {/* <div>
        <input type="text" placeholder="title" id="ip1" />
      </div>
      <div>
        <input type="text" placeholder="description" id="ip2" />
      </div>
      <button onClick={OnClickHandler}>Click me to add Todo</button> */}
      <CreateTodo Obj={Obj} setState={setState}></CreateTodo>
      <RenderTodo todos={Obj}></RenderTodo>
    </>
  );
}

export default App;
