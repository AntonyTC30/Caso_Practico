// ProductForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ProductForm.css';

const today = new Date().toISOString().split('T')[0];

const validationSchema = Yup.object().shape({
    id: Yup.string()
        .required('Requerido')
        .min(3, 'Mínimo 3 caracteres')
        .max(10, 'Máximo 10 caracteres'),
    nombre: Yup.string()
        .required('Requerido')
        .min(5, 'Mínimo 5 caracteres')
        .max(100, 'Máximo 100 caracteres'),
    descripcion: Yup.string()
        .required('Requerido')
        .min(10, 'Mínimo 10 caracteres')
        .max(200, 'Máximo 200 caracteres'),
    logo: Yup.string().required('Requerido'),
    fechaLiberacion: Yup.date()
        .required('Requerido')
        .min(today, 'La Fecha debe ser igual o mayor a la fecha actual'),
});

const ProductForm = ({ isEditing = false, initialValues = {} }) => {
    const initialFormValues = {
        id: '',
        nombre: '',
        descripcion: '',
        logo: '',
        fechaLiberacion: '',
        fechaRevision: '',
        ...initialValues,
    };

    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
            validate={(values) => {
                const errors = {};
                if (new Date(values.fechaLiberacion) >= new Date(today)) {
                    const fechaRevision = new Date(values.fechaLiberacion);
                    fechaRevision.setFullYear(fechaRevision.getFullYear() + 1);
                    values.fechaRevision = fechaRevision.toISOString().split('T')[0];
                }
                return errors;
            }}
        >
            {({ isSubmitting, errors, touched, setFieldValue }) => (
                <Form className="form">
                    <h1>Formulario de Registro</h1>
                    <div className="form-group">
                        <label htmlFor="id">ID</label>
                        <Field
                            name="id"
                            type="text"
                            disabled={isEditing}
                            className={errors.id && touched.id ? 'error' : ''}
                        />
                        <ErrorMessage name="id" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <Field
                            name="nombre"
                            type="text"
                            className={errors.nombre && touched.nombre ? 'error' : ''}
                        />
                        <ErrorMessage name="nombre" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descripcion">Descripción</label>
                        <Field
                            name="descripcion"
                            type="text"
                            className={errors.descripcion && touched.descripcion ? 'error' : ''}
                        />
                        <ErrorMessage name="descripcion" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="logo">Logo</label>
                        <Field
                            name="logo"
                            type="text"
                            className={errors.logo && touched.logo ? 'error' : ''}
                        />
                        <ErrorMessage name="logo" component="div" className="error-message" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaLiberacion">Fecha Liberación</label>
                        <Field
                            name="fechaLiberacion"
                            type="date"
                            className={errors.fechaLiberacion && touched.fechaLiberacion ? 'error' : ''}
                            onChange={(e) => {
                                setFieldValue('fechaLiberacion', e.target.value);
                                if (e.target.value) {
                                    const fechaRevision = new Date(e.target.value);
                                    fechaRevision.setFullYear(fechaRevision.getFullYear() + 1);
                                    setFieldValue('fechaRevision', fechaRevision.toISOString().split('T')[0]);
                                }
                            }}
                        />
                        <ErrorMessage
                            name="fechaLiberacion"
                            component="div"
                            className="error-message"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="fechaRevision">Fecha Revisión</label>
                        <Field
                            name="fechaRevision"
                            type="date"
                            disabled
                            className={errors.fechaRevision && touched.fechaRevision ? 'error' : ''}
                        />
                        <ErrorMessage name="fechaRevision" component="div" className="error-message" />
                    </div>

                    <div className="form-buttons">
                        <button type="reset" disabled={isSubmitting}>
                            Reiniciar
                        </button>
                        <button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0}>
                            Enviar
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProductForm;
