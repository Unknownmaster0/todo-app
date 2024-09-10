const zod = require("zod");

const todoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});


module.exports = {
    todoSchema
}
