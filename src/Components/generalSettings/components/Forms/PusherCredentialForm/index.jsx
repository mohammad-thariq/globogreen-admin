import { Button } from "@/common/Button";
import { Formik } from "formik";
import { emailConfigurationEncryptoionOption } from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const PushCredentialForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          app_id: onData?.app_id || "",
          app_key: onData?.app_key || "",
          app_secret: onData?.app_secret || "",
          app_cluster: onData?.app_cluster || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            app_id: values?.app_id || "",
            app_key: values?.app_key || "",
            app_secret: values?.app_secret || "",
            app_cluster: values?.app_cluster || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="mb-3">
              <label>App Id</label>
              <input
                type="text"
                name="app_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.app_id}
              />
            </div>

            <div className="mb-3">
              <label>App Key</label>
              <input
                type="text"
                name="app_key"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.app_key}
              />
            </div>

            <div className="mb-3">
              <label>App Secret</label>
              <input
                type="text"
                name="app_secret"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.app_secret}
              />
            </div>

            <div className="mb-3">
              <label>App Cluster</label>
              <input
                type="text"
                name="app_cluster"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.app_cluster}
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
