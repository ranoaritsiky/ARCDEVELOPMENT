import { connect } from "react-redux";
import { add_user } from "../../store/actions";
import { useFormik } from "formik";

function UserForm(props) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values.firstName && values.lastName) {
        props.add_user({
          firstName: values.firstName,
          lastName: values.lastName,
        });
      } else if (values.firstName || values.lastName) {
        alert("must fill all ");
      } else {
        resetForm({ values: "" });
      }
    },
  });
  return (
    <>
      <form
        style={{ maxWidth: "30%" }}
        className="m-3"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="user">User form</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          style={{ marginBottom: "5px" }}
        />
        <textarea
          name="lastName"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <button className="btn btn-primary mt-4" type="submit">
          Ajout
        </button>
      </form>
    </>
  );
}

export default connect(null, { add_user })(UserForm);
