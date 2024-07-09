import { Button } from "@/common/Button";
import { Formik } from "formik";
import { useState } from "react";

export const TwilioConfigForm = ({ data, onUpdate, loading }) => {
  const [registerOtp, setRegisterOtp] = useState(data?.enable_register_sms === 1 ? true : false);
  const [resetPassOtp, setResetPassOtp] = useState(data?.enable_reset_pass_sms === 1 ? true : false);
  const [orderConfirmation, setOrderConfirmation] = useState(data?.enable_order_confirmation_sms === 1 ? true : false);
  return (
    <div className="mt-4">
      <Formik
        initialValues={{
          account_sid: data.account_sid || "",
          auth_token: data.auth_token || "",
          twilio_phone_number: data.twilio_phone_number || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            account_sid: values?.account_sid,
            auth_token: values?.auth_token,
            twilio_phone_number: values?.twilio_phone_number,
            register_otp: registerOtp ? 1 : 0,
            reset_pass_otp: resetPassOtp ? 1 : 0,
            order_confirmation: resetPassOtp ? 1 : 0,
          });
          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <h4>Twilio Configuration</h4>
            <div className="mb-3">
              <label>Account SID</label>
              <input
                type="text"
                name="account_sid"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.account_sid}
              />
            </div>

            <div className="mb-3">
              <label>Auth Token</label>
              <input
                type="text"
                name="auth_token"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.auth_token}
              />
            </div>

            <div className="mb-3">
              <label>Twilio Phone Number</label>
              <input
                type="text"
                name="twilio_phone_number"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twilio_phone_number}
              />
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={registerOtp}
                onChange={() => setRegisterOtp(!registerOtp)}
              />
              <label className="form-check-label">Send Registration OTP</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={resetPassOtp}
                onChange={() => setResetPassOtp(!resetPassOtp)}
              />
              <label className="form-check-label">Password Reset OTP</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={orderConfirmation}
                onChange={() => setOrderConfirmation(!orderConfirmation)}
              />
              <label className="form-check-label">Order Confirmation</label>
            </div>
            <div className="flex justify-content-fs mb-5">
              <Button
                name="Update"
                bg="#23d24f"
                type="submit"
                color="#fff"
                w="100"
                isSubmitting={loading}
                onClick={handleSubmit}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
