import { Button } from "@/common/Button";
import { Formik } from "formik";
import {
  SettingActiveStatus,
  emailConfigurationEncryptoionOption,
} from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const GoogleRecaptchaForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          status: onData?.status || "",
          secret_key: onData?.secret_key || "",
          site_key: onData?.site_key || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            status: values?.mail_host || "",
            secret_key: values?.secret_key || "",
            site_key: values?.site_key || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="mb-3">
              <label>Allow Recaptcha</label>
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
              <label>Captcha Site Key</label>
              <input
                type="text"
                name="site_key"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.site_key}
              />
            </div>

            <div className="mb-3">
              <label>Captcha Secret Key</label>
              <input
                type="text"
                name="secret_key"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.secret_key}
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
