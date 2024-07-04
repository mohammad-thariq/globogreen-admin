import { Button } from "@/common/Button";
import { Formik } from "formik";
import { emailConfigurationEncryptoionOption } from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const SocialLinksForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          is_facebbok: onData?.is_facebbok || "",
          facebook_client_id: onData?.facebook_client_id || "",
          facebook_secret_id: onData?.facebook_secret_id || "",
          facebook_redirect_url: onData?.facebook_redirect_url || "",
          is_gmail: onData?.is_gmail || "",
          gmail_client_id: onData?.gmail_client_id || "",
          gmail_secret_id: onData?.gmail_secret_id || "",
          gmail_redirect_url: onData?.gmail_redirect_url || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            is_facebbok: values?.is_facebbok || "",
            facebook_client_id: values?.facebook_client_id || "",
            facebook_secret_id: values?.facebook_secret_id || "",
            facebook_redirect_url: values?.facebook_redirect_url || "",
            is_gmail: values?.is_gmail || "",
            gmail_client_id: values?.gmail_client_id || "",
            gmail_secret_id: values?.gmail_secret_id || "",
            gmail_redirect_url: values?.gmail_redirect_url || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <label>Allow Login with Facebook</label>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value={values?.is_facebbok}
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
                name="facebook_client_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.facebook_client_id}
              />
            </div>

            <div className="mb-3">
              <label>Facebook App Secret</label>
              <input
                type="text"
                name="facebook_secret_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.facebook_secret_id}
              />
            </div>

            <div className="mb-3">
              <label>Facebook Redirect Url</label>
              <input
                type="text"
                name="facebook_redirect_url"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.facebook_redirect_url}
              />
            </div>
            <label>Allow Login with Facebook</label>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value={values?.gmail}
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Enable / Disable
              </label>
            </div>

            <div className="mb-3">
              <label>Gmail Client Id</label>
              <input
                type="text"
                name="gmail_client_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gmail_client_id}
              />
            </div>
            <div className="mb-3">
              <label>Gmail Secret Id</label>
              <input
                type="text"
                name="gmail_secret_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gmail_secret_id}
              />
            </div>
            <div className="mb-3">
              <label>Gmail Redirect Url</label>
              <input
                type="text"
                name="gmail_redirect_url"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gmail_redirect_url}
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
