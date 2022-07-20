import { useFormik } from "formik";
import { todoContext } from "../../contexts/TodoContext";

export default function TodoForm(props) {
    console.log(props);
  const formik = useFormik({
    // must initialise values here in the form
    initialValues: {
      todo: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values.todo);
    //   setTodo(["fctttctct"]);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      style={{ maxWidth: "30%" }}
      className="m-3"
      onSubmit={formik.handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="todo">Todo</label>
        <input
          type="text"
          name="todo"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.todo}
        />
        <input
          type="text"
          name="description"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <button className="btn btn-primary mt-4" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
