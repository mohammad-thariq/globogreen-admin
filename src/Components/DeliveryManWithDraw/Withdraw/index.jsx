import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Loader } from "@/common/Loader";
import { NoDataFound } from "@/common/NoDataFound";
import { PageHeader } from "@/common/PageHeader";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { WithdrawTableHeading } from "@/constant/tableHeading";
import { DeliveryWithdrawAPI } from "@/service/deliveryWithdraw/DeliveryWithdrawAPI";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export const Withdraw = () => {
  const {withdraw, withdrawDelete} = new DeliveryWithdrawAPI();
  const { data, isLoading, refetch } = useQuery(["withdraw"], withdraw);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentWithDrawId, setCurrentWithDrawId] = useState(null);
  console.log(data , "withdraw")

  const {
    mutate: DeleteWithDrawMutate,
    isLoading: deleteWithDrawLoading,
  } = useMutation(withdrawDelete, {
    onSuccess: (data, variables, context) => {
      setOpenDeletePopup(false);
      ToastifySuccess(data?.messege);
      refetch();
    },
    onError: (data, variables, context) => {
      setOpenDeletePopup(true);
      ToastifyFailed(data?.messege);
      // refetch();
    },
  });

  const handleDeleteWithdraw = (id) => {
    setCurrentWithDrawId(id);
    setOpenDeletePopup(!openDeletePopup);
  };

  const handleOnDeleteWithDraw = () => {
    DeleteWithDrawMutate({ id: currentWithDrawId });
  };

  if (data && !data) {
    return <NoDataFound />
  }

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
    <PageHeader title="Withdraw" />
      <Breadcrumb currentPage={"Withdraw"} serachEnable />
      <BaseTable tableHeadings={WithdrawTableHeading} onWithDrawData={data} onDelete={handleDeleteWithdraw}/>
      {openDeletePopup && 
      <Popup open={openDeletePopup} onClose={handleDeleteWithdraw}>
        <DeleteItem 
         onClose={handleDeleteWithdraw}
         onClick={handleOnDeleteWithDraw}
         loading={deleteWithDrawLoading}
        />
        </Popup>}
        
    </>
  );
};
