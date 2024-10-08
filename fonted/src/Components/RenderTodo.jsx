export function RenderTodo({ todos }) {
  return (
    <div>
      {todos?.map((el, idx) => {
        return (
          <div key={idx}>
            {" "}
            <div>title: {el.title}</div>
            <div>description: {el.description}</div>
            <div>
              completed: {el.isCompleted == true ? "completed" : "mark as done"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
