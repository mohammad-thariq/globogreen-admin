import { Button } from "@/common/Button";
import { Formik } from "formik";
import { emailConfigurationEncryptoionOption } from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";
import { dbConst } from "@/constant/DBConst";

export const DatabaseGenerateForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          onUpdate({});

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="bg-warning p-3 rounded text-light">
              <p>{dbConst}</p>
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
