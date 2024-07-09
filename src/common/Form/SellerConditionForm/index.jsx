/* eslint-disable @next/next/no-img-element */
import { Formik } from "formik";
import style from "./index.module.css";
import { Button } from "@/common/Button";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import * as Yup from "yup";
import {
  tinyMceContentStyle,
  tinyMcePlugin,
  tinyMceToolbar,
} from "@/constant/tableHeading";
import { BaseUrls } from "../../../../env";

const schema = Yup.object({
    terms_and_condition: Yup.string().required("Short Name is Required"),
});

export const SellerConditionForm = ({
  button,
  data,
  onUpdate,
  loading
}) => {
  const editorRef = useRef("");

  const getLongDescription =
    editorRef.current && editorRef.current.getContent();

  return (
    <div className={style.wrapper}>
      <Formik
        initialValues={{
          terms_and_condition: data?.seller_condition || getLongDescription,
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onUpdate({
            terms_and_condition: getLongDescription,
          });
          actions.setSubmitting(true);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
          <form className="formInner overflow-column mb-4">
            <label>Terms and Condition</label>
            <div className="mb-2">
              <Editor
                apiKey={BaseUrls.TINYMCE_API_KEY}
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue={values?.terms_and_condition}
                // tagName="long_description"
                init={{
                  width: "100%",
                  height: 500,
                  menubar: false,
                  plugins: tinyMcePlugin,
                  toolbar: tinyMceToolbar,
                  content_style: tinyMceContentStyle,
                }}
              />
            </div>
            <p style={{ marginTop: "5px", marginBottom: "5px", color: "red" }}>
              {errors.terms_and_condition &&
                touched.terms_and_condition &&
                errors.terms_and_condition}
            </p>
            <div className={style.btnWrapper}>
              <Button
                name={button}
                bg="#23d24f"
                type="submit"
                color="#fff"
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
