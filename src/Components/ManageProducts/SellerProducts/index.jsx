import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Button } from "@/common/Button";
import { ProductForm } from "@/common/Form/ProductCategoriesForm/ProductForm";
import { Loader } from "@/common/Loader";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { SellerProductTableHeading } from "@/constant/tableHeading";
import { ManageCategoriesApi } from "@/service/manageCategories/manageCategoriesAPI";
import { productCateoriesAPI } from "@/service/productCategories/productCategoriesAPI";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export const SellerProducts = () => {
  const router = useRouter()
  const [createSellerProduct, setCreateSellerProduct] = useState(false);
  const [updateSellerProduct, setUpdateSellerProduct] = useState(false);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentSellerProductId, setCurrentSellerProductId] = useState(null);
  const [currentSellerProductDataId, setCurrentSellerProductDataId] =
    useState(null);

  const {
    sellerProducts,
    createProducts,
    updateProducts,
    deleteProductById,
    specificationKey,
    brands,
  } = new productCateoriesAPI();
  const { productCategory, productChildCategory, productSubCategory } =
    new ManageCategoriesApi();

  const { data, isLoading, refetch } = useQuery(
    ["sellerProducts"],
    sellerProducts
  );
  const { data: category } = useQuery(["product-category"], productCategory);
  const { data: childCategory } = useQuery(
    ["product-Childcategory"],
    productChildCategory
  );
  const { data: subCategory } = useQuery(
    ["product-Subcategory"],
    productSubCategory
  );
  const { data: brand } = useQuery(["brands"], brands);
  const { data: specificationKeys } = useQuery(
    ["specificationKeys"],
    specificationKey
  );

  const { mutate: createProductMutate, isLoading: createProductLoading } =
    useMutation(createProducts, {
      onSuccess: (data, variables, context) => {
        setCreateSellerProduct(false);
        ToastifySuccess(data?.message);
        refetch();
      },
      onError: (data, variables, context) => {
        setCreateSellerProduct(true);
        refetch();
        ToastifyFailed(data?.message);
      },
    });

  const { mutate: updateProductMutate, isLoading: updateProductLoading } =
    useMutation(updateProducts, {
      onSuccess: (data, variables, context) => {
        setUpdateSellerProduct(false);
        ToastifySuccess(data?.message);
        refetch();
      },
      onError: (data, variables, context) => {
        setUpdateSellerProduct(true);
        ToastifyFailed(data?.message);
        refetch();
      },
    });

  const { mutate: deleteProductMutate, isLoading: deleteProductLoading } =
    useMutation(deleteProductById, {
      onSuccess: (data, variables, context) => {
        setOpenDeletePopup(false);
        ToastifySuccess(data?.message);
        refetch();
      },
      onError: (data, variables, context) => {
        setOpenDeletePopup(true);
        ToastifyFailed(data?.message);
      },
    });

  const handleDeleteSellerProd = (id) => {
    setCurrentSellerProductId(id);
    setOpenDeletePopup(!openDeletePopup);
  };

  const handleCreateSellerProduct = () => {
    setCreateSellerProduct(!createSellerProduct);
  };

  const handleUpdateSellerProduct = (id) => {
    setUpdateSellerProduct(!updateSellerProduct);
    setCurrentSellerProductId(id);
    const getSellerProductById = data?.products?.find((i) => i?.id === id);
    setCurrentSellerProductDataId(getSellerProductById);
  };

  const handleNavigateProductDetail = (id, icon) => {
    if (icon === "product-variant") {
      router.push(`/admin/products/product-variant/${id}`);
    } else {
      router.push(`/admin/products/${id}`);
    }
  };

  const deleteProduct = () => {
    deleteProductMutate({ id: currentSellerProductId });
  };

  const getCategoryToSelect = category?.categories?.map((i) => ({
    value: i?.id,
    name: i?.name,
  }));
  const getSubCategoryToSelect = subCategory?.subCategories?.map((i) => ({
    value: i?.id,
    name: i?.name,
  }));
  const getChildCategoryToSelect = childCategory?.childCategories?.map((i) => ({
    value: i?.id,
    name: i?.name,
  }));
  const getBrandsToSelect = brand?.brands?.map((i) => ({
    value: i?.id,
    name: i?.name,
  }));
  const getSpecificationKeysToSelect =
    specificationKeys?.SpecificationKeys?.map((i) => ({
      value: i?.id,
      name: i?.key,
    }));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb currentPage={"Seller Products"} serachEnable />
      <div className="flex ms-4">
        <Button
          name="Add New"
          color="#fff"
          bg="#23d24f"
          type="button"
          w="200px"
          icon="fa fa-plus"
          onClick={handleCreateSellerProduct}
        />
      </div>
      <BaseTable
        tableHeadings={SellerProductTableHeading}
        onSellerProductData={data}
        onDelete={handleDeleteSellerProd}
        onUpdate={handleUpdateSellerProduct}
        onNavigate={handleNavigateProductDetail}
        length={data?.products?.length === 0}
      />
      {openDeletePopup && (
        <Popup open={openDeletePopup} onClose={handleDeleteSellerProd}>
          <DeleteItem
            onClose={handleDeleteSellerProd}
            onClick={deleteProduct}
            loading={deleteProductLoading}
          />
        </Popup>
      )}
      {createSellerProduct && (
        <Popup open={createSellerProduct} onClose={handleCreateSellerProduct}>
          <ProductForm
            category={getCategoryToSelect}
            subCategory={getSubCategoryToSelect}
            childCategory={getChildCategoryToSelect}
            brand={getBrandsToSelect}
            keys={getSpecificationKeysToSelect}
            onClose={handleCreateSellerProduct}
            onSave={createProductMutate}
            button="Add New"
            loading={createProductLoading}
          />
        </Popup>
      )}

      {updateSellerProduct && (
        <Popup open={updateSellerProduct} onClose={handleUpdateSellerProduct}>
          <ProductForm
            category={getCategoryToSelect}
            subCategory={getSubCategoryToSelect}
            childCategory={getChildCategoryToSelect}
            brand={getBrandsToSelect}
            keys={getSpecificationKeysToSelect}
            onClose={handleUpdateSellerProduct}
            data={currentSellerProductDataId}
            button="update"
            onUpdate={updateProductMutate}
            currentProductId={currentSellerProductId}
            loading={updateProductLoading}
          />
        </Popup>
      )}
    </>
  );
};
