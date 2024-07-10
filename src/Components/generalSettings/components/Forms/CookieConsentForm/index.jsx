import { Button } from "@/common/Button";
import { Formik } from "formik";
import {
  statusConstantOption,
  emailConfigurationEncryptoionOption,
} from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const CookieConsentForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          status: onData?.status + 1 || "",
          message: onData?.message || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            status: values?.status - 1 || "",
            message: values?.message || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="mb-3">
              <label>Allow Cookie Consent</label>
              <InputSelect
                onData={statusConstantOption}
                label="status"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.status}
                isValue
              />
            </div>

            <div className="mb-3">
              <label>Message</label>
              <textarea
                type="text"
                name="message"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
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
