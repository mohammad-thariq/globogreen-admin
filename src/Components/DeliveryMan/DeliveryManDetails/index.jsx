import { TrackingCard } from "@/Components/DashboardPanel/TrackingCard";
import { Breadcrumb } from "@/common/Breadcrumb";
import ProfileCard from "@/common/ProfileCard";
import {
  deliveryManDetails,
  deliveryManDetailsTracker,
} from "@/constant/statusConst";
import { DeliveryManAPI } from "@/service/deliveryMan/DeliveryManAPI";
import { useQuery } from "react-query";
import { BaseUrls } from "../../../../env";
import { BaseTable } from "@/common/BaseTable";
import { PageHeader } from "@/common/PageHeader";
import { deliverymanDetailsTableHeading } from "@/constant/tableHeading";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/common/Button";

export const DeliveryManDetails = () => {
  const router = useRouter();
  const id = router?.query?.id;
  const [trackingCardData, setTrackingCardData] = useState();
  const [currentDeliveryManData, setCurrentDeliveryManData] = useState();
  const { deliveryManById } = new DeliveryManAPI();
  const { data } = useQuery(["deliveryManById", id], deliveryManById, {
    enabled: !!id,
  });

  const handleNavigateGoBack = () => {
    router.back();
  };

  const updateTrackingCardData = useCallback(() => {
    if (data) {
      const updatedTrackingCardData = deliveryManDetailsTracker.map((item) => {
        const value = data[item.countKey];
        const count = Array.isArray(value) ? value.length : `Rs ${value}` ?? 0;
        return {
          ...item,
          count,
        };
      });
      setTrackingCardData(updatedTrackingCardData);
    }
  }, [data]);

  const CurrentDeliveryManData = useCallback(() => {
    if (data) {
      const currentDeliveryManData = deliveryManDetails.map((item) => ({
        ...item,
        value: data?.deliveryman[item.countKey] ?? 0,
      }));
      setCurrentDeliveryManData(currentDeliveryManData);
    }
  }, [data]);

  useEffect(() => {
    CurrentDeliveryManData();
    updateTrackingCardData();
  }, [CurrentDeliveryManData, updateTrackingCardData]);

  return (
    <>
      <PageHeader
        title={`Delivery Partner ${data?.deliveryman?.fname} ${data?.deliveryman?.lname}`}
      />
      <Breadcrumb currentPage={"Delivery Man"} serachEnable />
      <div className="flex ms-4">
        <Button
          name="Go Back"
          color="#fff"
          bg="#23d24f"
          type="button"
          w="200px"
          icon="fa fa-plus"
          onClick={handleNavigateGoBack}
        />
      </div>

      <div className="container-fluid py-4">
        <div className="row">
          {trackingCardData?.map((i) => (
            <TrackingCard key={i?.id} {...i} />
          ))}
          <ProfileCard
            image={`${BaseUrls?.IMAGE_URL}/${data?.deliveryman?.man_image}`}
            Name={`${data?.deliveryman?.fname} ${data?.deliveryman?.lname}`}
            Title={`${data?.deliveryman?.email}`}
          >
            <BaseTable
              tableHeadings={deliverymanDetailsTableHeading}
              onDeliveryDetailManData={currentDeliveryManData}
            />
          </ProfileCard>
        </div>
      </div>
    </>
  );
};
