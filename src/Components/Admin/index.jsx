import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Button } from "@/common/Button";
import { AdminForm } from "@/common/Form/AdminForm";
import { Loader } from "@/common/Loader";
import { PageHeader } from "@/common/PageHeader";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import ProfileCard from "@/common/ProfileCard";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { AdminTableHeadings } from "@/constant/tableHeading";
import { AdminAPI } from "@/service/admin/AdminAPI";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

export const Admin = () => {
  const [openCreatePopup, setOpenCreatePopup] = useState(false);
  const [openUpdatePopup, setOpenUpdatePopup] = useState(false);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentAdminId, setCurrentAdminId] = useState(null);
  const [currentAdminData, setCurrentAdminData] = useState();

  const { adminList, createAdmin, updateAdmin, DeleteAdminList } =
    new AdminAPI();
  const { data, isLoading, refetch } = useQuery(["adminList"], adminList);
  console.log(data, "Admin Data");

  const { mutate: createAdminMutate, isLoading: createAdminLoading } =
    useMutation(createAdmin, {
      onSuccess: (data, variables, context) => {
        setOpenCreatePopup(false);
        ToastifySuccess(data?.notification);
        refetch();
      },
      onError: (data, variables, context) => {
        setOpenCreatePopup(true);
        refetch();
        ToastifyFailed(data?.message);
      },
    });

  const { mutate: updateAdminMutate, isLoading: updateAdminLoading } =
    useMutation(updateAdmin, {
      onSuccess: (data, variables, context) => {
        setOpenUpdatePopup(false);
        ToastifySuccess(data?.notification);
        refetch();
      },
      onError: (data, variables, context) => {
        setOpenUpdatePopup(true);
        ToastifyFailed(data?.message);
        refetch();
      },
    });

  const { mutate: DeleteAdminMutate, isLoading: deleteAdminLoading } =
    useMutation(DeleteAdminList, {
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

  const handleCreateAdmin = () => {
    setOpenCreatePopup(!openCreatePopup);
  };
  const handleDeleteAdmin = (id) => {
    setCurrentAdminId(id);
    setOpenDeletePopup(!openDeletePopup);
  };

  const handleUpdateAdmin = (id) => {
    setCurrentAdminId(id);
    const getCurrentAdminData = data?.admins?.find((i) => i?.id === id);
    setCurrentAdminData(getCurrentAdminData);
    setOpenUpdatePopup(!openUpdatePopup);
  };

  const handleOnDeleteAdmin = () => {
    DeleteAdminMutate({ id: currentAdminId });
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <PageHeader title="Admin List" />
      <Breadcrumb currentPage={"Admin List"} serachEnable />
      <div className="flex ms-4">
        <Button
          name="Add New"
          color="#fff"
          bg="#23d24f"
          type="button"
          w="200px"
          icon="fa fa-plus"
          onClick={handleCreateAdmin}
        />
      </div>
      <ProfileCard Name="Admin List" Title="">
        <BaseTable
          tableHeadings={AdminTableHeadings}
          onAdminData={data}
          onDelete={handleDeleteAdmin}
          onUpdate={handleUpdateAdmin}
          length={data?.admins?.length === 0}
        />
      </ProfileCard>
      {openCreatePopup && (
        <Popup open={openCreatePopup} onClose={handleCreateAdmin}>
          <AdminForm
            button="Add"
            onClose={handleCreateAdmin}
            onSave={createAdminMutate}
            loading={createAdminLoading}
          />
        </Popup>
      )}
      {openUpdatePopup && (
        <Popup open={openUpdatePopup} onClose={handleUpdateAdmin}>
          <AdminForm
            currentAdminId={currentAdminId}
            button="Update"
            data={currentAdminData}
            onClose={handleUpdateAdmin}
            onUpdate={updateAdminMutate}
            loading={updateAdminLoading}
          />
        </Popup>
      )}
      {openDeletePopup && (
        <Popup open={openDeletePopup} onClose={handleDeleteAdmin}>
          <DeleteItem
            onClose={handleDeleteAdmin}
            onClick={handleOnDeleteAdmin}
            loading={deleteAdminLoading}
          />
        </Popup>
      )}
    </>
  );
};
