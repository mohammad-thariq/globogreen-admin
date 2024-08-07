import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Button } from "@/common/Button";
import { CategoriesForm } from "@/common/Form/ManageCategoriesForms/CategoriesForm";
import { Loader } from "@/common/Loader";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { ManageTableHeadings } from "@/constant/tableHeading";
import { ManageCategoriesApi } from "@/service/manageCategories/manageCategoriesAPI";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export const Categories = () => {
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [createCategories, setCreateCategories] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);
  const [currentCategoryDataId, setCurrentCategoryDataId] = useState(null);
  const [updateCategories, setupdateCategories] = useState(false);

  const { productCategory, createProductCategory, updateProductCategory, deleteProductCategory } =
    new ManageCategoriesApi();
  const { data, isLoading, refetch } = useQuery(["product-category"], productCategory);

  const { mutate: createCategory, isLoading: createCategoryLoading } =
    useMutation(createProductCategory, {
      onSuccess: (data, variables, context) => {
        setCreateCategories(false);
        ToastifySuccess(data?.message);
        refetch();
      },
      onError: (data, variables, context) => {
        setCreateCategories(true);
        refetch();
        ToastifyFailed(data?.message);
      },
    });

  const { mutate: updateCategory, isLoading: updateCategoryLoading } =
    useMutation(updateProductCategory, {
      onSuccess: (data, variables, context) => {
        setupdateCategories(false);
        ToastifySuccess(data?.message);
        refetch();
      },
      onError: (data, variables, context) => {
        setupdateCategories(true);
        ToastifyFailed(data?.message);
        refetch();
      },
    });

    const { mutate: deleteCategoryMutate, isLoading: deleteCategoryLoading } =
    useMutation(deleteProductCategory, {
      onSuccess: (data, variables, context) => {
        setOpenDeletePopup(false);
        ToastifySuccess(data?.notification);
        refetch();
        
      },
      onError: (data, variables, context) => {
        setOpenDeletePopup(true);
        ToastifyFailed(data?.notification);
        refetch();
       
      },
    });

  const handleCreateCategories = () => {
    setCreateCategories(!createCategories);
  };

  const handleUpdateCategoties = (id) => {
    setCurrentCategoryId(id);
    const getCategoryById = data?.categories?.find((i) => i?.id === id);
    setCurrentCategoryDataId(getCategoryById);
    setupdateCategories(!updateCategories);
  };

  const handleDeleteCategory = (id) => {
    setCurrentCategoryId(id)
    setOpenDeletePopup(!openDeletePopup);
  };

  const handleOnDeleteCategory = () => {
    deleteCategoryMutate({id: currentCategoryId})
  }

  if (isLoading) {
    return <Loader />
  }

  console.log(data, 'data');

  return (
    <>
      <Breadcrumb currentPage={"Categories"} serachEnable />
      <div className="flex ms-4">
        <Button
          name="Add New"
          color="#fff"
          bg="#23d24f"
          type="button"
          w="200px"
          icon="fa fa-plus"
          onClick={handleCreateCategories}
        />
      </div>
      <BaseTable
        tableHeadings={ManageTableHeadings}
        onCategoriesData={data?.categories}
        onDelete={handleDeleteCategory}
        onUpdate={handleUpdateCategoties}
        length={data?.categories?.length === 0}
      />

      {createCategories && (
        <Popup open={createCategories} onClose={handleCreateCategories}>
          <CategoriesForm
            onClose={handleCreateCategories}
            onSave={createCategory}
            loading={createCategoryLoading}
            button="Add New"
          />
        </Popup>
      )}

      {updateCategories && (
        <Popup open={updateCategories} onClose={handleUpdateCategoties}>
          <CategoriesForm
            onClose={handleUpdateCategoties}
            onUpdate={updateCategory}
            button="Update"
            loading={updateCategoryLoading}
            currentCategoryId={currentCategoryId}
            data={currentCategoryDataId}
          />
        </Popup>
      )}

      {openDeletePopup && (
        <Popup open={openDeletePopup} onClose={handleDeleteCategory}>
          <DeleteItem onClose={handleDeleteCategory} onClick={handleOnDeleteCategory} loading={deleteCategoryLoading}/>
        </Popup>
      )}
    </>
  );
};
