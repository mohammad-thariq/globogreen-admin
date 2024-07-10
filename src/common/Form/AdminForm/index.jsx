import { Button } from "@/common/Button";
import style from "./index.module.css";
import * as Yup from "yup";
import { Formik } from "formik";
import { statusConstantOption } from "@/constant/statusConst";
import { useState } from "react";
import { InputSelect } from "../common/inputSelect";


export const AdminForm = ({
  onSave,
  onClose,
  currentAdminId,
  data,
  onUpdate,
  loading,
  button,
}) => {
  const schema = Yup.object({
    name: Yup.string().required("Man Image is Required"),
    email: Yup.string().required("Email is Required"),
    password: Yup.string().required("password Name is Required"),
    status: Yup.string().required("Status is Required"),
  });
  console.log(data, "data this");
  const [imageFile, setImageFile] = useState(null);
  return (
    <div className={style.wrapper}>
      <Formik
        initialValues={{
            name: data?.name || "",
            email: data?.email || "",
            password: data?.password || "",
            status: data?.status || "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onUpdate
            ? onUpdate({
                id: currentDeliveryManId,
                name: data?.name || "",
                email: data?.email || "",
                password: data?.password || "",
                status: data?.status || "",
              }) 
            : onSave({
                name: data?.name || "",
                email: data?.email || "",
                password: data?.password || "",
                status: data?.status || "",
              });
          actions.setSubmitting(true);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form role="form" className="w-350">
            <label>Name</label>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <p
                style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}
              >
                {errors.name && touched.name && errors.name}
              </p>
            </div>
            <label>Email</label>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p
                style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}
              >
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <label>Password</label>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <p
                style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}
              >
                {errors.password &&
                  touched.password &&
                  errors.password}
              </p>
            </div>

            <InputSelect
              label={"Status"}
              onBlur={handleBlur}
              onChange={handleChange}
              name={"status"}
              values={values?.status}
              isValue
              onData={statusConstantOption}
            />
            <p style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}>
              {errors.status && touched.status && errors.status}
            </p>
            <div className={style.btnWrapper}>
              <Button
                name="Close"
                border="1px solid #23D24F"
                color="#000"
                onClick={() => onClose()}
              />
              <Button
                name={button}
                bg="#23d24f"
                type="submit"
                color="#fff"
                onClick={handleSubmit}
                isSubmitting={loading}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
