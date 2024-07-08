import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Button } from "@/common/Button";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import { useEffect, useState } from "react";
import { ExisitngBanner } from "../ExistingBanner";
import { ManageCategoriesApi } from "@/service/manageCategories/manageCategoriesAPI";
import { useMutation, useQuery } from "react-query";
import { BaseUrls } from "../../../../env";
import { CategoryAddForm } from "@/common/Form/ManageCategoriesForms/CategoriesAddForm";
import { popularCateoryTableHeading } from "@/constant/tableHeading";
import { Loader } from "@/common/Loader";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";

export const PopularCategories = () => {
  const [createPopularCategories, setCreatePopularCategories] = useState(false);
  const [deletePopularCategories, setDeletePopularCategories] = useState(false);
  const [currentPopularCategoryBanner, setCurrentPopularCategoryBanner] =
    useState(null);
  const [currentPopularCategoryId, setCurrentPopularCategoryId] =
    useState(null);
  const [activePopularCategory, setActivePopularCategory] = useState(null);

  const { popularCategory, productCategory, deletePopularCategory, createPopularCategoryBanner, createPopularCategory } =
    new ManageCategoriesApi();

  const { data, isLoading, refetch } = useQuery(
    ["popular-categories"],
    popularCategory
  );
  const { data: categories, isLoading: loadingProductCategory } = useQuery(
    ["product-category"],
    productCategory
  );

  const {
    mutate: createPopularCategoryMutate,
    isLoading: createPopularCategoryLoading,
  } = useMutation(createPopularCategory, {
    onSuccess: (data, variables, context) => {
      setCreatePopularCategories(false);
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      setCreatePopularCategories(true);
      ToastifyFailed(data?.notification);
      refetch();
    },
  });

  const {
    mutate: createPopularCategoryBannerMutate,
    isLoading: createPopularCategoryBannerLoading,
  } = useMutation(createPopularCategoryBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
      refetch();
    },
  });

  const {
    mutate: deletePopularCategoryMutate,
    isLoading: deletePopularCategoryLoading,
  } = useMutation(deletePopularCategory, {
    onSuccess: (data, variables, context) => {
      setDeletePopularCategories(false);
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      setDeletePopularCategories(true);
      ToastifyFailed(data?.notification);
      refetch();
    },
  });

  const handleDeletePopularCategories = (id) => {
    setCurrentPopularCategoryId(id);
    setDeletePopularCategories(!deletePopularCategories);
  };

  const handlePopularCategories = () => {
    setCreatePopularCategories(!createPopularCategories);
  };

  const handleOnDeletePopularCategoryMutate = () => {
    deletePopularCategoryMutate({ id: currentPopularCategoryId });
  };

  useEffect(() => {
    const getCurrentCategory = data?.popularCategories?.find(
      (i) => i?.id === categories?.pupoularCategory?.id
    );
    setCurrentPopularCategoryBanner(getCurrentCategory);
    const getActiveCategory = categories?.categories?.filter(
      (i) => i?.status === 1
    );
    setActivePopularCategory(getActiveCategory);
  }, [
    categories?.categories,
    categories?.pupoularCategory?.id,
    data?.popularCategories,
  ]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb currentPage={"Popular Category"} serachEnable />
      <ExisitngBanner
        loading={loadingProductCategory}
        sidebarBanner="Popular Category Sidebar Banner"
        img={`${BaseUrls?.IMAGE_URL}/${data?.banner?.popular_category_banner}`}
        alt={"Popular side bar"}
        onSave={createPopularCategoryBannerMutate}
        onLoading={createPopularCategoryBannerLoading}
      />

      <div className="flex ms-4">
        <Button
          name="Add New"
          color="#fff"
          bg="#23d24f"
          type="button"
          w="200px"
          icon="fa fa-plus"
          onClick={handlePopularCategories}
        />
      </div>

      <BaseTable
        tableHeadings={popularCateoryTableHeading}
        onPopularCategoriesData={data?.popularCategories}
        onDelete={handleDeletePopularCategories}
        length={data?.popularCategories?.length === 0}
      />

      {deletePopularCategories && (
        <Popup
          open={deletePopularCategories}
          onClose={handleDeletePopularCategories}
        >
          <DeleteItem
            onClose={handleDeletePopularCategories}
            onClick={handleOnDeletePopularCategoryMutate}
            loading={deletePopularCategoryLoading}
          />
        </Popup>
      )}
      {createPopularCategories && (
        <Popup open={createPopularCategories} onClose={handlePopularCategories}>
          <CategoryAddForm
            title="Add Popular category"
            categories={activePopularCategory}
            loading={createPopularCategoryLoading}
            onClose={handlePopularCategories}
            onSave={createPopularCategoryMutate}
            
          />
        </Popup>
      )}
    </>
  );
};
