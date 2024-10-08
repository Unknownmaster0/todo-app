import { useState } from "react";

export function CreateTodo(props) {
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
