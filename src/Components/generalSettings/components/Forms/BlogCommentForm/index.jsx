import { Button } from "@/common/Button";
import { Formik } from "formik";
import {
  
  commentActive,
  
} from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const BlogCommentForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          app_id: onData?.app_id || "",
          comment_type: onData?.comment_type || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            app_id: values?.app_id || "",
            comment_type: values?.comment_type || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="mb-3">
              <label>Blog Comment Type</label>
              <InputSelect
                onData={commentActive}
                label="comment_type"
                name="comment_type"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.comment_type
                }
                isValue
              />
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
