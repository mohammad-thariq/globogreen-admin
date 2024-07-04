import { Button } from "@/common/Button";
import { Formik } from "formik";
import { emailConfigurationEncryptoionOption } from "@/constant/statusConst";
import { InputSelect } from "@/common/Form/common/inputSelect";

export const CustomPaginationForm = ({ onData, onUpdate, loading }) => {
  return (
    <div>
      <Formik
        initialValues={{
          blog_page: onData[0]?.qty || "",
          Product_page: onData[1]?.qty || "",
          Brand_page: onData[2]?.qty || "",
          Blog_comment: onData[3]?.qty || "",
          Product_review : onData[4]?.qty || "",
          Seller_page: onData[5]?.qty || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            blog_page: values[0]?.qty || "",
            Product_page: values[1]?.qty || "",
            Brand_page: values[2]?.qty || "",
            Blog_comment: values[3]?.qty || "",
            Product_review : values[4]?.qty || "",
            Seller_page: values[5]?.qty || "",
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Session Title</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Blog Page</th>
                  <th>
                    <div className="mb-3">
                      <input
                        type="text"
                        name="app_id"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.blog_page}
                      />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>Product Page</th>
                  <th>
                  <div className="mb-3">
                      <input
                        type="text"
                        name="Product_page"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Product_page}
                      />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>Brand Page</th>
                  <th>
                  <div className="mb-3">
                      <input
                        type="text"
                        name="Brand_page"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Brand_page}
                      />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>Blog Comment</th>
                  <th>
                  <div className="mb-3">
                      <input
                        type="text"
                        name="Blog_comment"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Blog_comment}
                      />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>Product Review</th>
                  <th>
                  <div className="mb-3">
                      <input
                        type="text"
                        name="Product_review"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Product_review}
                      />
                    </div>
                  </th>
                </tr>
                <tr>
                  <th>Seller page</th>
                  <th>
                  <div className="mb-3">
                      <input
                        type="text"
                        name="Seller_page"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.Seller_page}
                      />
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>

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
