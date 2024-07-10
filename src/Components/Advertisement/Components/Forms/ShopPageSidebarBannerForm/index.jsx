import { Button } from "@/common/Button";
import { InputSelect } from "@/common/Form/common/inputSelect";
import { statusConstantOption } from "@/constant/statusConst";
import { Formik } from "formik";
import Image from "next/image";
import { BaseUrls } from "../../../../../../env";

export const ShopPageSidebarBannerForm = ({ onData, loading, onUpdate, categoryLink }) => {
  return (
    <div>
      <Formik
        initialValues={{
          id: onData?.id || "",
          image: null,
          link: onData?.link || "",
          product_slug: onData?.product_slug || "",
          status: onData?.status + 1 || "",
          title_one: onData?.title_one || "",
          title_two: onData?.title_two || "",
          badge: onData?.badge || "",
        }}
        onSubmit={(values, actions) => {
          onUpdate({
            id: values?.id,
            banner_image: values?.image,
            link: values?.link,
            product_slug: values?.product_slug,
            status: values?.status - 1,
            title_one: values?.title_one,
            title_two: values?.title_two,
            badge: values?.badge,
          });

          actions.setSubmitting(true);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <div className="mb-3">
              <label>Current Banner Image</label>
              <div>
                <Image
                  width={70}
                  height={70}
                  alt=""
                  src={
                    `${BaseUrls?.IMAGE_URL}/${onData?.image}` ||
                    "/assets/img/placeholder.jpg"
                  }
                  className="text-secondary text-sm font-weight-bold product-image"
                />
              </div>
            </div>

            <div className="mb-3">
              <label>New Banner</label>
              <input
                type="file"
                name="image"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.image}
              />
            </div>

            <div className="mb-3">
              <label>Title One</label>
              <input
                type="text"
                name="title_one"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title_one}
              />
            </div>
           
            <div className="mb-3">
              <label>Title Two</label>
              <input
                type="text"
                name="title_two"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.title_two}
              />
            </div>
            <InputSelect
              label="Categories Link"
              name="link"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.link}
              onData={categoryLink}
            />
            
              <InputSelect
                onData={statusConstantOption}
                label="status"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values?.status}
                isValue
              />

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
