import { Button } from "@/common/Button";
import { Formik } from "formik";
import {
  statusConstantOption,
  emailConfigurationEncryptoionOption,
} from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const GoogleAnalyticForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          analytic_id: onData?.analytic_id || "",
          status: onData?.status + 1 || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            analytic_id: values?.analytic_id || "",
          status: values?.status - 1 || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="mb-3">
              <label>Allow Google Analytic</label>
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
              <label>Analytic Tracking Id</label>
              <input
                type="text"
                name="analytic_id"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.analytic_id}
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
