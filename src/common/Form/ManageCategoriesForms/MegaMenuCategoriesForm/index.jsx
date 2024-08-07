import { Button } from "@/common/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import style from "../index.module.css";
import { InputSelect } from "../../common/inputSelect";
import { statusConstantOption } from "@/constant/statusConst";

export const MegaMenuSubCategoriesForm = ({
  onClose,
  button,
  data,
  onSave,
  onUpdate,
  getCategory,
  currentMegaMenuCategoryId,
  loading,
}) => {
  const schema = Yup.object({
    sub_category: Yup.string().required("Category is Required"),
    serial: Yup.string().required("Serial is Required"),
    status: Yup.string().required("Status is Required"),
  });
  console.log(data, 'data');
  return (
    <div className={style.wrapper}>
      <Formik
        initialValues={{
          sub_category: data?.id || "",
          serial: data?.id || "",
          status: data?.status + 1 || "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onUpdate
            ? onUpdate({
                id: currentMegaMenuCategoryId,
                sub_category: values?.sub_category,
                serial: values?.serial,
                status: values?.status - 1,
              })
            : onSave({
                sub_category: values?.sub_category,
                serial: values?.serial,
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
          <form>
            <InputSelect
              label="Sub Category"
              values={values?.sub_category}
              name="sub_category"
              onBlur={handleBlur}
              onChange={handleChange}
              onData={getCategory}
            />
            <p style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}>
              {errors.sub_category && touched.sub_category && errors.sub_category}
            </p>

            <label>Serial</label>
            <div className="mb-2">
              <input
                type="text"
                name="serial"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.serial}
              />
              <p
                style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}
              >
                {errors.serial && touched.serial && errors.serial}
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
                onClick={onClose}
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
