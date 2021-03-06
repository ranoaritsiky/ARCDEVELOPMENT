import { useFormik } from "formik";

export default function TodoForm(props) {
  const formik = useFormik({
    // must initialise values here in the form
    initialValues: {
      todo: "",
      description: "",
    },
    onSubmit: (values,{resetForm}) => {
      
      if (values.todo && values.description) {
          props.addTodo(
            {
            todo:values.todo,
            description:values.description,
            id:Math.random(),
            status:"In progress"
          }
          )
        // alert(JSON.stringify(values, null, 2));
        
      }
      else {
        alert("Must fill all form");
      }
      resetForm({values:''})
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
          style={{marginBottom:"5px"}}
        />
        <textarea
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
