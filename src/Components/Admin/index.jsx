import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Popup } from "@/common/Popup";
import { DeleteItem } from "@/common/Popup/DeleteItem";
import ProfileCard from "@/common/ProfileCard";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { AdminTableHeadings } from "@/constant/tableHeading";
import { AdminAPI } from "@/service/admin/AdminAPI";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";


export const Admin = () => {

  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [currentAdminId, setCurrentAdminId] = useState(null);

  const {adminList,DeleteAdminList} = new AdminAPI()
  const {data , loading , refetch}= useQuery(["adminList"], adminList)
  console.log(data , "Admin Data")

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

    const handleDeleteAdmin = (id) => {
      setCurrentAdminId(id);
      setOpenDeletePopup(!openDeletePopup);
    };
  
    const handleOnDeleteAdmin = () => {
      DeleteAdminMutate({ id: currentAdminId });
    };

  return (
    <>
      <Breadcrumb currentPage={"Admin"} serachEnable />
      <ProfileCard Name="Admin" Title="">
       <BaseTable tableHeadings={AdminTableHeadings} onAdminData= {data} onDelete={handleDeleteAdmin} />
      </ProfileCard>
      {openDeletePopup && <Popup open={openDeletePopup} onClose={handleDeleteAdmin}>
        <DeleteItem onClose={handleDeleteAdmin}  onClick={handleOnDeleteAdmin}
            loading={deleteAdminLoading} />
        </Popup>}
    </>
  );
};
