import { Breadcrumb } from "@/common/Breadcrumb";
import { SellerConditionForm } from "@/common/Form/SellerConditionForm";
import { Loader } from "@/common/Loader";
import { PageHeader } from "@/common/PageHeader";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { ManageWebsitesAPI } from "@/service/manageWebsites/ManageWebsitesAPI";
import { useMutation, useQuery } from "react-query";

export const SellerCondition = () => {
  const { sellerCondition, updateSellerCondition } = new ManageWebsitesAPI();
  const { data, isLoading, refetch } = useQuery(["seller-condition"], sellerCondition);
  const {
    mutate: updateSellerConditionMutate,
    isLoading: updateSellerConditionLoading,
  } = useMutation(updateSellerCondition, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });
  if (isLoading) return <Loader />;
  return (
    <>
      <PageHeader title="Seller Condition" />
      <Breadcrumb currentPage={"Seller Condition"} serachEnable />
      <SellerConditionForm
        button="Update"
        data={data?.seller_condition}
        onUpdate={updateSellerConditionMutate}
        loading={updateSellerConditionLoading}
      />
    </>
  );
};
