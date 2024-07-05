import { Button } from "@/common/Button";
import style from "./index.module.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { orderStatusOptions } from "@/constant/statusConst";
import { InputSelect } from "../common/inputSelect";
export const DeliveryStatusForm = ({
  onClose,
  data,
  deliveryMan,
  currentOrderId,
  updateOrderStatus,
  updateOrderStatusLoading,
}) => {
  const schema = Yup.object({
    order_status: Yup.string().required("Order status is Required"),
    payment_status: Yup.string().required("Payment status is Required"),
  });

  return (
    <div className={style.wrapper}>
      <Formik
        initialValues={{
          payment_status: data?.payment_status +1 || "",
          order_status: data?.order_status +1 || "",
          delivery_man_id: data?.delivery_man_id
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          updateOrderStatus({
            id: currentOrderId,
            order_status: values.order_status -1,
            payment_status: values.payment_status -1,
            delivery_man_id: Number(values.delivery_man_id)
          });
          actions.setSubmitting(true);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <form>
              <InputSelect
                label="Payment"
                name="payment_status"
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.payment_status}
                placeholder="Payment Status"
                onData={orderStatusOptions?.paymentStatus}
                isValue
              />
              <p style={{ marginTop: "5px", color: "red" }}>
                {errors.payment_status &&
                  touched.payment_status &&
                  errors.payment_status}
              </p>
              <InputSelect
                label="Order"
                name="order_status"
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.order_status}
                placeholder="Order Status"
                onData={orderStatusOptions?.orderStatus}
                isValue
              />
              <p style={{ marginTop: "5px", color: "red" }}>
                {errors.order_status &&
                  touched.order_status &&
                  errors.order_status}
              </p>
              {deliveryMan && (
                 <InputSelect
                 label="Assign Delivery Man"
                 name="delivery_man_id"
                 onBlur={handleBlur}
                 onChange={handleChange}
                 values={values.delivery_man_id}
                 placeholder="Assign Delivery Man"
                 onData={deliveryMan}
               />
              )}
            </form>
            <div className={style.btnWrapper}>
              <Button
                name="Close"
                border="1px solid #23D24F"
                color="#000"
                onClick={onClose}
              />
              <Button
                isSubmitting={updateOrderStatusLoading}
                name="Update"
                bg="#23d24f"
                type="submit"
                color="#fff"
                onClick={handleSubmit}
              />
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};
