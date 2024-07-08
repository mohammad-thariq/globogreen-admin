import { TrackingCard } from "@/Components/DashboardPanel/TrackingCard";
import { Breadcrumb } from "@/common/Breadcrumb";
import ProfileCard from "@/common/ProfileCard";
import { deliveryManDetailsTracker } from "@/constant/statusConst";
import { DeliveryManAPI } from "@/service/deliveryMan/DeliveryManAPI";
import { useQuery } from "react-query";
import { BaseUrls } from "../../../../env";
import { BaseTable } from "@/common/BaseTable";
import { PageHeader } from "@/common/PageHeader";
import { deliverymanDetailsTableHeading } from "@/constant/tableHeading";
import { useRouter } from "next/router";

export const DeliveryManDetails = () => {
  const router = useRouter()
  const id = router?.query?.id  

  const { deliveryMan, deliveryManById } = new DeliveryManAPI();
  const { data } = useQuery(["deliveryMan"], deliveryMan);
  const { data: deliveryManDetails } = useQuery(["deliveryManById", id], deliveryManById);
  console.log(deliveryManDetails, 'deliveryManDetails');
  return (
    <>
    <PageHeader title={`Delivery Partner ${data?.deliveryMans[0]?.fname} ${data?.deliveryMans[0]?.lname}`}/>
      <Breadcrumb currentPage={"Delivery Man"} serachEnable />
      <div className="container-fluid py-4">
        <div className="row">
          {deliveryManDetailsTracker?.map((i) => (
            <TrackingCard key={i?.id} {...i} />
          ))}
          <ProfileCard image={`${BaseUrls?.IMAGE_URL}/${data?.deliveryMans[0]?.man_image}`}>
          <BaseTable tableHeadings={deliverymanDetailsTableHeading}/>
          </ProfileCard>
        </div>
      </div>
    </>
  );
};
