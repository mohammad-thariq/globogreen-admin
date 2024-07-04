import { Button } from "@/common/Button";
import { Formik } from "formik";
import { emailConfigurationEncryptoionOption } from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const ThemeColorForm = ({ onData, onUpdate, loading }) => {
  
console.log(onData?.setting?.theme_one)
  return (
    <div>
      <Formik
        initialValues={{
          theme_one: onData?.setting?.theme_one || "",
          theme_two:  onData?.setting?.theme_two || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            theme_one:  values?.setting?.theme_one,
            theme_two:  values?.setting?.theme_two
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="mb-3">
              <label>Primary color</label>
              <input
                type="color"
                name="theme_one"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.theme_one}
              />
            </div>

            <div className="mb-3">
              <label>Secondary color</label>
              <input
                type="color"
                name="theme_two"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.theme_two}
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
