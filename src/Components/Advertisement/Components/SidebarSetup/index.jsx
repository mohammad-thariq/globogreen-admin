import React, { useState } from "react";
import {
  AdvertisementSideOptions,
  AdvertisementSideOptionsEnum,
} from "@/constant/statusConst";
import { useMutation } from "react-query";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { SliderSidebarBannerOneForm } from "../Forms/SliderSidebarBannerOneForm";
import { SidebarOptions } from "../SidebarOptions";
import { SliderSidebarBannerTwoForm } from "../Forms/SliderSidebarBannerTwoForm";
import { HomepageTwoColumnbannerOne } from "../Forms/HomePageTwoColumnbannerOneForm";
import { PopularCategoriesSidebarBannerForm } from "../Forms/PopularCategoriesSidebarBannerForm";
import { HomepageTwoColumnBannerTwoForm } from "../Forms/HomepageTwoColumnBannerTwoForm";
import { HomepageSingleBannerOneForm } from "../Forms/HomepageSingleBannerOneForm";
import { HomepageSingleBannerTwoForm } from "../Forms/HomepageSingleBannerTwoForm";
import { MegaMenuBannerForm } from "../Forms/MegaMenuBannerForm";
import { HomepageFlashSaleSidebarBannerForm } from "../Forms/HomepageFlashSaleSidebarBannerForm";
import { ShopPageCenterBannerForm } from "../Forms/ShopPageCenterBannerForm";
import { ShopPageSidebarBannerForm } from "../Forms/ShopPageSidebarBannerForm";
import { AdvertisementAPI } from "@/service/advertisement/AdvertisementAPI";

export const SidebarSetup = ({ onData }) => {
  const {
    updateSliderBannerOne,
    updateSliderBannerTwo,
    updatePopularCategorySidebar,
    updateHomepagecolFirstBanner,
    updateHomepagecolSecondBanner,
    updateHomepagesingleFirstBanner,
    updateHomepagesingleSecondBanner,
    updateShoppageCenterbanner,
    updateShoppagesidebarBanner,
    updateMegaMenuBanner,
  } = new AdvertisementAPI();
  const [toggleSettings, setToggleSettings] = useState(
    "sliderSidebarBannerOne"
  );

  const handleToggleOptions = (form) => {
    setToggleSettings(form);
  };

  const getCurrentActive = (toggleSettings) => {
    if (onData?.hasOwnProperty(toggleSettings)) {
      if (
        toggleSettings == AdvertisementSideOptionsEnum.sliderSidebarBannerTwo
      ) {
        console.log("triggered");
        // console.log(onData[GeneralSettingSideOptionsEnum.setting], "setting")
        return onData[AdvertisementSideOptionsEnum.sliderSidebarBannerOne];
      } else {
        console.log("triggered-inner");
        return onData[toggleSettings];
      }
    }
  };
  // update updateSliderBannerOneMutate
  const {
    mutate: updateSliderBannerOneMutate,
    isLoading: updateSliderBannerOneLoading,
  } = useMutation(updateSliderBannerOne, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updateSliderBannerTwo

  const {
    mutate: updateSliderBannerTwoMutate,
    isLoading: updateSliderBannerTwoLoading,
  } = useMutation(updateSliderBannerTwo, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updatePopularCategorySidebar

  const {
    mutate: updatePopularCategorySidebarMutate,
    isLoading: updatePopularCategorySidebarLoading,
  } = useMutation(updatePopularCategorySidebar, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updateHomepagecolFirstBanner

  const {
    mutate: updateHomepagecolFirstBannerMutate,
    isLoading: updateHomepagecolFirstBannerLoading,
  } = useMutation(updateHomepagecolFirstBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updateHomepagecolSecondBanner

  const {
    mutate: updateHomepagecolSecondBannerMutate,
    isLoading: updateHomepagecolSecondBannerLoading,
  } = useMutation(updateHomepagecolSecondBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updateHomepagesingleFirstBanner

  const {
    mutate: updateHomepagesingleFirstBannerMutate,
    isLoading: updateHomepagesingleFirstBannerLoading,
  } = useMutation(updateHomepagesingleFirstBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updateHomepagesingleSecondBanner

  const {
    mutate: updateHomepagesingleSecondBannerMutate,
    isLoading: updateHomepagesingleSecondBannerLoading,
  } = useMutation(updateHomepagesingleSecondBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updateMegaMenuBanner

  const {
    mutate: updateMegaMenuBannerMutate,
    isLoading: updateMegaMenuBannerLoading,
  } = useMutation(updateMegaMenuBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updateShoppageCenterbanner

  const {
    mutate: updateShoppageCenterbannerMutate,
    isLoading: updateShoppageCenterbannerLoading,
  } = useMutation(updateShoppageCenterbanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  // update updateShoppagesidebarBanner

  const {
    mutate: updateShoppagesidebarBannerMutate,
    isLoading: updateShoppagesidebarBannerLoading,
  } = useMutation(updateShoppagesidebarBanner, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.message);
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.message);
    },
  });

  const currentActive = getCurrentActive(toggleSettings);

  console.log(currentActive, "onData");
  return (
    <div className="container-fluid py-4">
      <div className="card">
        <div className="card-body p-3">
          <div className="flex align-item-start mx-4 w-100 gap-4">
            <div className="p-3">
              {AdvertisementSideOptions.map((i, index) => (
                <SidebarOptions
                  key={index}
                  data={i}
                  onClick={handleToggleOptions}
                  active={i?.value === toggleSettings}
                />
              ))}
            </div>
            <div className="p-3 w-70">
              {currentActive &&
                toggleSettings ===
                  AdvertisementSideOptionsEnum.sliderSidebarBannerOne && (
                  <SliderSidebarBannerOneForm
                    onData={currentActive}
                    categoryLink={onData?.product}
                    onUpdate={updateSliderBannerOneMutate}
                    loading={updateSliderBannerOneLoading}
                  />
                )}

              {toggleSettings ===
                AdvertisementSideOptionsEnum.sliderSidebarBannerTwo && (
                <SliderSidebarBannerTwoForm
                  onData={onData && onData?.sliderSidebarBannerTwo}
                  onUpdate={updateSliderBannerTwoMutate}
                  categoryLink={onData?.product}
                  loading={updateSliderBannerTwoLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.popularCategorySidebarBanner && (
                <PopularCategoriesSidebarBannerForm
                  onData={onData && onData?.popularCategorySidebarBanner}
                  onUpdate={updatePopularCategorySidebarMutate}
                  categoryLink={onData?.product}
                  loading={updatePopularCategorySidebarLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageTwoColumnBannerOne && (
                <HomepageTwoColumnbannerOne
                  onData={onData && onData?.homepageTwoColumnBannerOne}
                  onUpdate={updateHomepagecolFirstBannerMutate}
                  categoryLink={onData?.product}
                  loading={updateHomepagecolFirstBannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageTwoColumnBannerTwo && (
                <HomepageTwoColumnBannerTwoForm
                  onData={onData && onData?.homepageTwoColumnBannerTwo}
                  categoryLink={onData?.product}
                  onUpdate={updateHomepagecolSecondBannerMutate}
                  loading={updateHomepagecolSecondBannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageSingleBannerOne && (
                <HomepageSingleBannerOneForm
                  onData={onData && onData?.homepageSingleBannerOne}
                  categoryLink={onData?.product}
                  onUpdate={updateHomepagesingleFirstBannerMutate}
                  loading={updateHomepagesingleFirstBannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageSingleBannerTwo && (
                <HomepageSingleBannerTwoForm
                  onData={onData && onData?.homepageSingleBannerTwo}
                  categoryLink={onData?.product}
                  onUpdate={updateHomepagesingleSecondBannerMutate}
                  loading={updateHomepagesingleSecondBannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.megaMenuBanner && (
                <MegaMenuBannerForm
                  onData={onData && onData?.megaMenuBanner}
                  onUpdate={updateMegaMenuBannerMutate}
                  categoryLink={onData?.product}
                  loading={updateMegaMenuBannerLoading}
                />
              )}
              {/* {toggleSettings ===
                AdvertisementSideOptionsEnum.homepageFlashSaleSidebarBanner && (
                <HomepageFlashSaleSidebarBannerForm
                  onData={onData && onData?.homepageFlashSaleSidebarBanner}
                  onUpdate={updateMegaMenuBannerMutate}
                loading={updateMegaMenuBannerLoading}
                />
              )} */}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.shopPageCenterBanner && (
                <ShopPageCenterBannerForm
                  onData={onData && onData?.shopPageCenterBanner}
                  categoryLink={onData?.product}
                  onUpdate={updateShoppageCenterbannerMutate}
                  loading={updateShoppageCenterbannerLoading}
                />
              )}
              {toggleSettings ===
                AdvertisementSideOptionsEnum.shopPageSidebarBanner && (
                <ShopPageSidebarBannerForm
                  onData={onData && onData?.shopPageSidebarBanner}
                  onUpdate={updateShoppagesidebarBannerMutate}
                  loading={updateShoppagesidebarBannerLoading}
                  categoryLink={onData?.product}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
