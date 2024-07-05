import React, { useCallback, useState } from "react";
import { Breadcrumb } from "../../../common/Breadcrumb";
import { BaseTable } from "@/common/BaseTable";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import { DeliveryStatusForm } from "@/common/Form/DeliveryStatusForm";
import { router } from "next/router";
import { AllOrderTableHeadings } from "@/constant/tableHeading";
import { OrdersApi } from "@/service/orders/ordersAPI";
import { useMutation, useQuery } from "react-query";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { Loader } from "@/common/Loader";

export const CashOnDeliveryPanel = () => {
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [openDeliveryStatusForm, setOpenDeliveryStatusForm] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const [currentOrderData, setCurrentOrderData] = useState(null);
  const { completedOrders, deleteOrderById, updateOrderById } = new OrdersApi();
  const { data, isLoading, refetch } = useQuery(["getCodOrders"], completedOrders);

  const { mutate, isLoading: deleteOrderStatusLoading } = useMutation(deleteOrderById, {
    onSuccess: (data, variables, context) => {
      setOpenDeletePopup(false);
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      setOpenDeletePopup(true);
      ToastifyFailed(data?.notification);
    },
  });

  const { mutate: updateOrderStatus, isLoading: updateOrderStatusLoading } =
    useMutation(updateOrderById, {
      onSuccess: (data, variables, context) => {
        setOpenDeliveryStatusForm(false);
        ToastifySuccess(data?.notification);
        refetch();
      },
      onError: (data, variables, context) => {
        setOpenDeliveryStatusForm(true);
        ToastifyFailed(data?.notification);
      },
    });

  const handleNavigateOrder = (id) => {
    router?.push(`/admin/show-order/${id}`);
  };

  const handleDeleteOrder = (id) => {
    setCurrentOrderId(id);
    setOpenDeletePopup(!openDeletePopup);
  };
  const deleteOrderStatus = () => {
    mutate({ id: currentOrderId });
  };

  const handleDeliveryForm = (id) => {
    setCurrentOrderId(id);
    const orderData = data?.orders?.data?.find((i) => i?.id === id);
    setCurrentOrderData(orderData);
    setOpenDeliveryStatusForm(!openDeliveryStatusForm);
  }

  if(isLoading){
    return <Loader />
  }

  return (
    <>
      <Breadcrumb currentPage={"Cash On Delivery"} serachEnable />
      <BaseTable
        onTableData={data?.orders?.data}
        onDelete={handleDeleteOrder}
        onNavigate={handleNavigateOrder}
        onUpdate={handleDeliveryForm}
        tableHeadings={AllOrderTableHeadings}
        length={data?.orders?.data?.length === 0}
        isShown
      />
      {openDeletePopup && (
        <Popup open={openDeletePopup} onClose={handleDeleteOrder}>
          <DeleteItem
            onClose={handleDeleteOrder}
            onClick={deleteOrderStatus}
            loading={deleteOrderStatusLoading}
          />
        </Popup>
      )}
      {openDeliveryStatusForm && (
        <Popup open={openDeliveryStatusForm} onClose={handleDeliveryForm}>
          <DeliveryStatusForm
            updateOrderStatusLoading={updateOrderStatusLoading}
            onClose={handleDeliveryForm}
            data={currentOrderData}
            currentOrderId={currentOrderId}
            updateOrderStatus={updateOrderStatus}
          />
        </Popup>
      )}
    </>
  );
};
