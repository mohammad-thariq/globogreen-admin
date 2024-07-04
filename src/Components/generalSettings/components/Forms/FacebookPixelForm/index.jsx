import { Button } from "@/common/Button";
import { Formik } from "formik";
import { emailConfigurationEncryptoionOption } from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const FacebookPixelForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          app_id: onData?.app_id || "",
          status: onData?.status || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            app_id: values?.app_id || "",
            status: values?.status || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <label>Allow Facebook Pixel</label>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value={values?.status}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Enable / Disable
              </label>
            </div>

            <div className="mb-3">
              <label>Facebook App Id</label>
              <input
                type="text"
                name="app_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.app_id}
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
