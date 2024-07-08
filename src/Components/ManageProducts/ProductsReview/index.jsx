import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Loader } from "@/common/Loader";
import { productCateoriesAPI } from "@/service/productCategories/productCategoriesAPI";
import { useQuery } from "react-query";

export const ProductReviews = () => {
  const { productReview } = new productCateoriesAPI();
  const { data, isLoading, refetch } = useQuery(
    ["productReview"],
    productReview
  );

  if (isLoading) {
    return <Loader />;
  }
  console.log(data, "data");
  return (
    <>
      <Breadcrumb currentPage={"Products Reviews"} serachEnable />
      <BaseTable />
    </>
  );
};
