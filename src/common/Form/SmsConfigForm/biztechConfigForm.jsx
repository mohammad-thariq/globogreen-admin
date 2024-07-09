import { Button } from "@/common/Button";
import { Formik } from "formik";
import { useState } from "react";

export const BizTechConfigForm = ({ data, loading, onUpdate }) => {
  const [registerOtp, setRegisterOtp] = useState(data?.enable_register_sms === 1 ? true : false);
  const [resetPassOtp, setResetPassOtp] = useState(data?.enable_reset_pass_sms === 1 ? true : false);
  const [orderConfirmation, setOrderConfirmation] = useState(data?.enable_order_confirmation_sms === 1 ? true : false);
  return (
    <div>
      <Formik
        initialValues={{
          api_key: data?.api_key || "",
          client_id: data?.client_id || "",
          sender_id: data?.sender_id || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            api_key: values?.api_key,
            client_id: values?.client_id,
            sender_id: values?.sender_id,
            register_otp: registerOtp ? 1 : 0,
            reset_pass_otp: resetPassOtp ? 1 : 0,
            order_confirmation: resetPassOtp ? 1 : 0,
          });
          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form role="form" className="">
            <h4 className="mb-3">Biztech Configuration</h4>

            <div className="mb-3">
              <label>API Key</label>
              <input
                type="text"
                name="api_key"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.api_key}
              />
            </div>
            <div className="mb-3">
              <label>Client Id</label>
              <input
                type="text"
                name="client_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.client_id}
              />
            </div>
            <div className="mb-3">
              <label>Sender Id</label>
              <input
                type="text"
                name="sender_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sender_id}
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
            <div className="flex justify-content-fs">
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
