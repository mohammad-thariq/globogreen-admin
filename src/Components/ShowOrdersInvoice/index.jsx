import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import Image from "next/image";
import { OrderTotal } from "./OrderTotal";
import { BillingAddress } from "./BillingAddress";
import { ShippingAddress } from "./ShippingAddress";
import { showOrderTableHeadings } from "@/constant/tableHeading";
import { Actions } from "./Actions";
import { useRef, useState } from "react";
import { Popup } from "@/common/Popup";
import { DeliveryStatusForm } from "@/common/Form/DeliveryStatusForm";
import { Informations } from "./Informations";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import { OrdersApi } from "@/service/orders/ordersAPI";
import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/router";
import { PageHeader } from "@/common/PageHeader";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { Loader } from "@/common/Loader";
import { DeliveryManAPI } from "@/service/deliveryMan/DeliveryManAPI";

export const ShowOrdersInvoice = () => {
  const pdfRef = useRef();
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [openOrderStatus, setOpenOrderStatus] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const [hideForPDF, setHideForPDF] = useState(false);
  const router = useRouter();
  const id = router?.query?.id;
  const { getOrderShowById, deleteOrderById, updateOrderById } =
    new OrdersApi();
  const { deliveryMan } = new DeliveryManAPI();
  const { data, isLoading, refetch} = useQuery(["show-order", id], getOrderShowById);
  const { data: deliveryManData } = useQuery(["delivery-man"], deliveryMan);

  const { mutate, isLoading: deleteOrderStatusLoading } = useMutation(
    deleteOrderById,
    {
      onSuccess: (data, variables, context) => {
        setOpenDeletePopup(false);
        ToastifySuccess(data?.notification);
        router.back();

      },
      onError: (data, variables, context) => {
        setOpenDeletePopup(true);
        ToastifyFailed(data?.notification);
      },
    }
  );

  const { mutate: updateOrderStatus, isLoading: updateOrderStatusLoading } =
    useMutation(updateOrderById, {
      onSuccess: (data, variables, context) => {
        setOpenOrderStatus(false);
        ToastifySuccess(data?.notification);
        refetch();
      },
      onError: (data, variables, context) => {
        setOpenOrderStatus(true);
        ToastifyFailed(data?.notification);
      },
    });

    
    const handleDeleteOrder = () => {
      setCurrentOrderId(id);
      setOpenDeletePopup(!openDeletePopup);
    };

    const deleteOrderStatus = () => {
      mutate({ id: currentOrderId });
    };

  const handleOpenOrderStatus = () => {
    setOpenOrderStatus(!openOrderStatus);
  };

  const exportPDF = () => {
    setHideForPDF(true);
    setTimeout(() => {
      window.print();
      setHideForPDF(false);
    }, 1000);
  };

  const transformedDeliveryManData = deliveryManData?.deliveryMans.map(
    (item) => ({
      id: item.id,
      name: `${item.fname} ${item.lname}`,
    })
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <PageHeader
        title={
          hideForPDF
            ? `Order Invoice ${
                data?.order?.order_address?.billing_name ||
                data?.order?.order_id
              }`
            : "Order Invoice"
        }
      />
      {!hideForPDF && <Breadcrumb currentPage="Invoice" />}
      <div className="container-fluid py-4">
        <div className="card">
          <div className="card-body p-3">
            <div className="flex align-item-center justify-content-sb flex-wrap mx-4">
              <Image
                className="InvoiceWrapperImage mb-3"
                src="/assets/img/logos/globogreenlogo.png"
                width={180}
                height={80}
                objectFit="contain"
                alt="globogreenlogo"
              />
              <p className="text-lg fw-bolder color-6c757d mb-1">
                Order #{data?.order?.order_id}
              </p>
            </div>
            <BillingAddress orderDetails={data?.order} name="Billing Address" />
            <ShippingAddress
              orderDetails={data?.order}
              name="Shipping Address"
            />

            <Informations orderDetails={data?.order} />
          </div>
          <BaseTable
            ref={pdfRef}
            tableHeadings={showOrderTableHeadings}
            onShowOrder={data?.order}
          />
          <OrderTotal orderDetails={data?.order} />
        </div>

        {!hideForPDF && (
          <Actions
            handleOpenOrderStatus={handleOpenOrderStatus}
            handleDeleteOrder={handleDeleteOrder}
            exportPDF={exportPDF}
          />
        )}
      </div>

      {openOrderStatus && (
        <Popup open={openOrderStatus} onClose={handleOpenOrderStatus}>
          <DeliveryStatusForm
            onClose={handleOpenOrderStatus}
            data={data?.order}
            currentOrderId={data?.order.id}
            updateOrderStatus={updateOrderStatus}
            updateOrderStatusLoading={updateOrderStatusLoading}
            deliveryMan={transformedDeliveryManData}
          />
        </Popup>
      )}

      {openDeletePopup && (
        <Popup open={openDeletePopup} onClose={handleDeleteOrder}>
          <DeleteItem
            onClose={handleDeleteOrder}
            onClick={deleteOrderStatus}
            loading={deleteOrderStatusLoading}
          />
        </Popup>
      )}
    </>
  );
};
