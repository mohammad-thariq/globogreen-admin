import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import { useEffect, useState } from "react";
import { ExisitngBanner } from "../ExistingBanner";
import { Button } from "@/common/Button";
import { ManageCategoriesApi } from "@/service/manageCategories/manageCategoriesAPI";
import { useMutation, useQuery } from "react-query";
import { CategoryAddForm } from "@/common/Form/ManageCategoriesForms/CategoriesAddForm";
import { BaseUrls } from "../../../../env";
import { featuredCategoryTableHeading } from "@/constant/tableHeading";
import { Loader } from "@/common/Loader";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";

export const FeaturedCategories = () => {
  const [featuredCategoryOpen, setFeaturedCategoryOpen] = useState(false);
  const [deleteFeaturedCategories, setFeaturedCategories] = useState(false);
  const [currentFeaturedCategoryBanner, setCurrentFeaturedCategoryBanner] =
    useState(null);
  const [currentFeaturedCategoryId, setCurrentFeaturedCategoryId] =
    useState(null);
  const [activeFeautedCategory, setActiveFeautedCategory] = useState(null);

  const {
    featuredCategory,
    productCategory,
    deleteFeaturedCategory,
    createFeaturedCategoryBanner,
    createFeaturedCategory,
  } = new ManageCategoriesApi();
  const { data, isLoading, refetch } = useQuery(
    ["popular-categories"],
    featuredCategory
  );
  const { data: categories, isLoading: loadingProductCategory } = useQuery(
    ["product-category"],
    productCategory
  );

  const {
    mutate: createFeaturedCategoryMutate,
    isLoading: createFeaturedCategoryLoading,
  } = useMutation(createFeaturedCategory, {
    onSuccess: (data, variables, context) => {
      setFeaturedCategoryOpen(false);
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      setFeaturedCategoryOpen(true);
      ToastifyFailed(data?.notification);
      refetch();
    },
  });

  const {
    mutate: createFeaturedCategoryBannerMutate,
    isLoading: createFeaturedCategoryBannerLoading,
  } = useMutation(createFeaturedCategoryBanner, {
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
    mutate: deleteFeaturedCategoryMutate,
    isLoading: deleteFeaturedCategoryLoading,
  } = useMutation(deleteFeaturedCategory, {
    onSuccess: (data, variables, context) => {
      setFeaturedCategories(false);
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      setFeaturedCategories(true);
      ToastifyFailed(data?.notification);
      refetch();
    },
  });

  useEffect(() => {
    const getCurrentCategory = data?.popularCategories?.find(
      (i) => i?.id === categories?.pupoularCategory?.id
    );
    setCurrentFeaturedCategoryBanner(getCurrentCategory);
    const getActiveCategory = categories?.categories?.filter(
      (i) => i?.status === 1
    );
    setActiveFeautedCategory(getActiveCategory);
  }, [
    categories?.categories,
    categories?.pupoularCategory?.id,
    data?.popularCategories,
  ]);

  const handleDeleteFeaturedCategories = (id) => {
    setCurrentFeaturedCategoryId(id);
    setFeaturedCategories(!deleteFeaturedCategories);
  };
  const handleCreateFeaturedCategory = () => {
    setFeaturedCategoryOpen(!featuredCategoryOpen);
  };

  const handleOnDeleteFeaturedCategoryMutate = () => {
    deleteFeaturedCategoryMutate({ id: currentFeaturedCategoryId });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb currentPage={"Featured Categories"} serachEnable />
      <ExisitngBanner
        loading={loadingProductCategory}
        sidebarBanner="Featured Category Sidebar Banner"
        img={`${BaseUrls?.IMAGE_URL}/${data?.banner?.featured_category_banner}`}
        alt={"Featured side bar"}
        onSave={createFeaturedCategoryBannerMutate}
        onLoading={createFeaturedCategoryBannerLoading}
      />
      <div className="flex ms-4">
        <Button
          name="Add New"
          color="#fff"
          bg="#23d24f"
          type="button"
          w="200px"
          icon="fa fa-plus"
          onClick={handleCreateFeaturedCategory}
        />
      </div>
      <BaseTable
        tableHeadings={featuredCategoryTableHeading}
        onfeaturedCategoryData={data?.featuredCategories}
        onDelete={handleDeleteFeaturedCategories}
        length={data?.featuredCategories?.length === 0}
      />
      {deleteFeaturedCategories && (
        <Popup
          open={deleteFeaturedCategories}
          onClose={handleDeleteFeaturedCategories}
        >
          <DeleteItem
            onClose={handleDeleteFeaturedCategories}
            onClick={handleOnDeleteFeaturedCategoryMutate}
            loading={deleteFeaturedCategoryLoading}
          />
        </Popup>
      )}
      {featuredCategoryOpen && (
        <Popup
          open={featuredCategoryOpen}
          onClose={handleCreateFeaturedCategory}
        >
          <CategoryAddForm
            title="Add featured category"
            categories={activeFeautedCategory}
            onClose={handleCreateFeaturedCategory}
            onSave={createFeaturedCategoryMutate}
            loading={createFeaturedCategoryLoading}
          />
        </Popup>
      )}
    </>
  );
};
