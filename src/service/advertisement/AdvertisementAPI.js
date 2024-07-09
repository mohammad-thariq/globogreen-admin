import { localStorageConst } from "@/constant/localStorage";
import { _axios } from "@/helper/axios";
import { LocalStorageHelper } from "@/utils/localStorage";

const getToken = () => {
  let token = LocalStorageHelper.getItem(localStorageConst.JWTADMIN)
  return token
}

export class AdvertisementAPI {
    getAdd = async () => {
        const res = await _axios("get", `/advertisement?token=${getToken()}`);
        return res;
      };
      updateSliderBannerOne = async (data) => {
        const res = await _axios("post", `/slider-banner-one?token=${getToken()}`,data);
        return res;
      };
      updateSliderBannerTwo = async (data) => {
        const res = await _axios("post", `/slider-banner-two?token=${getToken()}`,data);
        return res;
      };
      updatePopularCategorySidebar = async (data) => {
        const res = await _axios("post", `/popular-category-sidebar?token=${getToken()}`,data);
        return res;
      };
      updateHomepagecolFirstBanner = async (data) => {
        const res = await _axios("post", `/homepage-two-col-first-banner?token=${getToken()}`,data);
        return res;
      };
      updateHomepagecolSecondBanner = async (data) => {
        const res = await _axios("post", `/homepage-two-col-second-banner?token=${getToken()}`,data);
        return res;
      };
      updateHomepagesingleFirstBanner = async (data) => {
        const res = await _axios("post", `/homepage-single-first-banner?token=${getToken()}`,data);
        return res;
      };
      updateHomepagesingleSecondBanner = async (data) => {
        const res = await _axios("post", `/homepage-single-second-banner?token=${getToken()}`,data);
        return res;
      };
      updateShoppageCenterbanner = async (data) => {
        const res = await _axios("post", `/shop-page-center-banner?token=${getToken()}`,data);
        return res;
      };
      updateShoppagesidebarBanner = async (data) => {
        const res = await _axios("post", `/shop-page-sidebar-banner?token=${getToken()}`,data);
        return res;
      };
      updateMegaMenuBanner = async (data) => {
        const res = await _axios("post", `/mega-menu-banner-update?token=${getToken()}`,data);
        return res;
      };
      
      
      
}