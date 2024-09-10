import { useState } from "react";

export function CreateTodo(props) {
  // function OnClickHandler() {
  //   const input1 = document.getElementById("ip1");
  //   const input2 = document.getElementById("ip2");
  //   const title = input1.value;
  //   const description = input2.value;
  //   props.setState([...props.Obj, { title, description, completed: "false" }]);
  //   input1.value = "";
  //   input2.value = "";
  // }

  // console.log(props); Obj: [{}], and setState:func

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="title"
          id="ip1"
          onChange={function (e) {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="description"
          id="ip2"
          onChange={function (e) {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div>
        {/* <button onClick={OnClickHandler}>Click to add todo</button> */}
        <button
          onClick={function () {
            fetch("http://localhost:8000/addTodo", {
              method: "POST",

              // always send the body to backend using fetch -> just by JSON.stringify({data});
              body: JSON.stringify({
                title,
                description,
              }),

              headers: {
                "Content-Type": "application/json",
              },
            });
          }}
        >
          Click to add todo
        </button>
      </div>
    </div>
  );
}
