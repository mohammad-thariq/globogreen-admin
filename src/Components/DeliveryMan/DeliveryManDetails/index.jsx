import { DeliveryManDetailsTable } from "@/common/BaseTable/TableBody/DeliveryMan/DeliveryManDetails";
import { Breadcrumb } from "@/common/Breadcrumb";
import { DeliveryManAPI } from "@/service/deliveryMan/DeliveryManAPI";

export const DeliveryManDetails =()=>{
    const {
        deliveryMan,
      } = new DeliveryManAPI();

      const { data } = useQuery(["deliveryMan"], deliveryMan);
      console.log(data, "Details Data")
    return(
        <>
         <Breadcrumb currentPage={"Delivery Man"} serachEnable />
         <DeliveryManDetailsTable data={data}/>
        </>
        
    )
}