import { Button } from "@/common/Button";
import style from "../index.module.css";
import * as Yup from "yup";
import { Formik } from "formik";
import { statusConstantOption} from "@/constant/statusConst";
import { useState } from "react";
import { InputSelect } from "../../common/inputSelect";

export const RecevieAmountForm = ({
  onSave,
  onClose,
  currentCountryId,
  data,
  onUpdate,
  loading,
  button,
}) => {
  const schema = Yup.object({
    total_amount: Yup.string().required("Total Amount is Required"),
    status: Yup.string().required("Status is Required"),
  });
  console.log(data, "data this");

  return (
    <div className={style.wrapper}>
      <Formik
        initialValues={{
          total_amount: data?.total_amount || "",
          status: data?.status + 1 || "", 
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onUpdate
            ? onUpdate({
                id: currentCountryId,
                delivery_man_id: 1,
                total_amount: values?.total_amount,
                status: values?.status - 1,
              })
            : onSave({
              delivery_man_id: 1,
              total_amount: values?.total_amount,
              status: values?.status - 1,
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
            {/* <label>Delivery man</label>
            <div className="mb-3">
              <input
                type="name"
                name="fname"
                className="form-control"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fname}
              />
              <p
                style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}
              >
                {errors.fname && touched.fname && errors.fname}
              </p>
            </div> */}
            <label>Total Amount</label>
            <div className="mb-3">
              <input
                type="number"
                name="total_amount"
                className="form-control"
                placeholder="Total Amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.total_amount}
              />
              <p
                style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}
              >
                {errors.total_amount && touched.total_amount && errors.total_amount}
              </p>
            </div>
            {/* <label>Date</label>
            <div className="mb-3">
              <input
                type="name"
                name="name"
                className="form-control"
                placeholder="Date"
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
            <label>Action</label>
            <div className="mb-3">
              <input
                type="name"
                name="name"
                className="form-control"
                placeholder="Action"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <p
                style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}
              >
                {errors.name && touched.name && errors.name}
              </p>
            </div> */}
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
