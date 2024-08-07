import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./productFrom.css";
import apiClient from "../../API";

const today = new Date().toISOString().split("T")[0];

const ProductForm = () => {
  const validationSchema = Yup.object().shape({
    id: Yup.string()
      .required("ID no válido")
      .min(3, "Mínimo 3 caracteres")
      .max(10, "Máximo 10 caracteres"),
    nombre: Yup.string()
      .required("Requerido")
      .min(5, "Mínimo 5 caracteres")
      .max(100, "Máximo 100 caracteres"),
    descripcion: Yup.string()
      .required("Este campo es requerido")
      .min(10, "Mínimo 10 caracteres")
      .max(200, "Máximo 200 caracteres"),
    logo: Yup.string().required("ste campo es requerido"),
    fechaLiberacion: Yup.date()
      .required("Requerido")
      .min(today, "La Fecha debe ser igual o mayor a la fecha actual"),
  });

  const initialFormValues = {
    id: "",
    nombre: "",
    descripcion: "",
    logo: "",
    fechaLiberacion: "",
    fechaRevision: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await apiClient.post("/bp/products", values);
      alert("Producto creado exitosamente");
    } catch (error) {
      console.error("Error creando producto", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validate={(values) => {
          const errors = {};
          if (new Date(values.fechaLiberacion) >= new Date(today)) {
            const fechaRevision = new Date(values.fechaLiberacion);
            fechaRevision.setFullYear(fechaRevision.getFullYear() + 1);
            values.fechaRevision = fechaRevision.toISOString().split("T")[0];
          }
          return errors;
        }}
      >
        {({ isSubmitting, errors, touched, setFieldValue }) => (
          <Form className="form">
            <h2>{"Formulario de registro"}</h2>
            <div className="form-columns">
              <div className="column">
                <div className="form-group">
                  <label htmlFor="id">ID</label>
                  <Field
                    name="id"
                    type="text"
                    className={errors.id && touched.id ? "error" : ""}
                  />
                  <ErrorMessage
                    name="id"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="descripcion">Descripción</label>
                  <Field
                    name="descripcion"
                    type="text"
                    className={
                      errors.descripcion && touched.descripcion ? "error" : ""
                    }
                  />
                  <ErrorMessage
                    name="descripcion"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fechaLiberacion">Fecha Liberación</label>
                  <Field
                    name="fechaLiberacion"
                    type="date"
                    className={
                      errors.fechaLiberacion && touched.fechaLiberacion
                        ? "error"
                        : ""
                    }
                    onChange={(e) => {
                      setFieldValue("fechaLiberacion", e.target.value);
                      if (e.target.value) {
                        const fechaRevision = new Date(e.target.value);
                        fechaRevision.setFullYear(
                          fechaRevision.getFullYear() + 1
                        );
                        setFieldValue(
                          "fechaRevision",
                          fechaRevision.toISOString().split("T")[0]
                        );
                      } else {
                        setFieldValue("fechaRevision", "");
                      }
                    }}
                  />
                  <ErrorMessage
                    name="fechaLiberacion"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>

              <div className="column">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <Field
                    name="nombre"
                    type="text"
                    className={errors.nombre && touched.nombre ? "error" : ""}
                  />
                  <ErrorMessage
                    name="nombre"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="logo">Logo</label>
                  <Field
                    name="logo"
                    type="text"
                    className={errors.logo && touched.logo ? "error" : ""}
                  />
                  <ErrorMessage
                    name="logo"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fechaRevision">Fecha Revisión</label>
                  <Field name="fechaRevision" type="date" disabled />
                  <ErrorMessage
                    name="fechaRevision"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
            </div>
            <div className="form-buttons">
              <button type="reset" className="resetbutton">
                Reiniciar
              </button>
              <button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
