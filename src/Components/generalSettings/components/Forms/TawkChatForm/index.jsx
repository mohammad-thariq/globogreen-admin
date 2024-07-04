import { Button } from "@/common/Button";
import { Formik } from "formik";
import { SettingActiveStatus } from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const TawkChatForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          status: onData?.status || "",
          widget_id: onData?.widget_id || "",
          property_id: onData?.property_id || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            status: values?.status || "",
            widget_id: values?.widget_id || "",
            property_id: values?.property_id || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="mb-3">
              <label>Allow Live Chat</label>
              <InputSelect
                onData={SettingActiveStatus}
                label="status"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.status}
                isValue
              />
            </div>

            <div className="mb-3">
              <label>Widget Id</label>
              <input
                type="text"
                name="widget_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.widget_id}
              />
            </div>

            <div className="mb-3">
              <label>Property Id</label>
              <input
                type="text"
                name="property_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.property_id}
              />
            </div>

            <div className="flex justify-content-fs">
              <Button
                name="Update"
                bg="#23d24f"
                type="submit"
                color="#fff"
                w="100"
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
