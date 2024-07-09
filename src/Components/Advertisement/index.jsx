import { Breadcrumb } from "@/common/Breadcrumb";
import { PageHeader } from "@/common/PageHeader";
import { SidebarSetup } from "./Components/SidebarSetup";
import { AdvertisementAPI } from "@/service/advertisement/AdvertisementAPI";
import { useQuery } from "react-query";

export const Advertisement = () => {
    const {getAdd} = new AdvertisementAPI()
    const {data , loading , refetch} = useQuery(["getAdd"], getAdd)
    console.log(data , "Add data")
  return (
    <>
      <PageHeader title="Advertisement" />
      <Breadcrumb currentPage={"Advertisement"} serachEnable />
      <SidebarSetup onData={data}/>
    </>
  );
};
