import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Loader } from "@/common/Loader";
import { PageHeader } from "@/common/PageHeader";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { productReviewTablHeading } from "@/constant/tableHeading";
import { productCateoriesAPI } from "@/service/productCategories/productCategoriesAPI";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export const ProductReviews = () => {
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentProductReviewId, setCurrentProductReviewId] = useState();

  const { productReview, updateproductReview, deleteproductReview } = new productCateoriesAPI();
  const { data, isLoading, refetch } = useQuery(["productReview"], productReview);

  const {
    mutate: updateproductReviewMutate,
    isLoading: updateproductReviewLoading,
  } = useMutation(updateproductReview, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
      refetch();
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  const {
    mutate: deleteproductReviewMutate,
    isLoading: deleteproductReviewLoading,
  } = useMutation(deleteproductReview, {
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

  const handleUpdateProductReview = (id) => {
    updateproductReviewMutate({id: id});
  };

  const handleDeleteProductReview = (id) => {
    setCurrentProductReviewId(id);
    setOpenDeletePopup(!openDeletePopup);
  };

  const handleDeleteProductReviewMutate = () => {
    deleteproductReviewMutate({ id: currentProductReviewId });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <PageHeader title="Product Review" />
      <Breadcrumb currentPage={"Products Reviews"} serachEnable />
      <BaseTable
        tableHeadings={productReviewTablHeading}
        onProductReviewData={data}
        length={data?.reviews?.length === 0}
        onDelete={handleDeleteProductReview}
        onUpdate={handleUpdateProductReview}
      />
      {openDeletePopup && (
        <Popup onClose={handleDeleteProductReview} open={openDeletePopup}>
          <DeleteItem
            onClose={handleDeleteProductReview}
            onClick={handleDeleteProductReviewMutate}
            loading={deleteproductReviewLoading}
          />
        </Popup>
      )}
    </>
  );
};
