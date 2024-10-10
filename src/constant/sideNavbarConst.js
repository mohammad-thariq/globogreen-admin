import DashboardIcon from "@mui/icons-material/Dashboard";
import GradingIcon from "@mui/icons-material/Grading";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GroupIcon from "@mui/icons-material/Group";
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
// import Inventory2Icon from "@mui/icons-material/Inventory2";
// import HourglassTopIcon from "@mui/icons-material/HourglassTop";
// import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";

export const SideNavConst = {
  routes: [
    {
      heading: "Dashboard",
      url: "/",
      icon: <DashboardIcon sx={{ fontSize: 18 }} />,
    },
    {
      heading: "Order",
      icon: <GradingIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "All Orders",
          url: "/admin/all-orders",
        },
        {
          name: "Pending Orders",
          url: "/admin/pending-orders",
        },
        {
          name: "Progress Orders",
          url: "/admin/progress-orders",
        },
        {
          name: "Delivered Orders",
          url: "/admin/delivered-orders",
        },
        {
          name: "Completed Orders",
          url: "/admin/completed-orders",
        },
        {
          name: "Declined Orders",
          url: "/admin/declined-orders",
        },
        {
          name: "Cash On Delivery",
          url: "/admin/cash-on-delivery",
        },
      ],
    },
    {
      heading: "Manage categories",
      icon: <CategoryIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Categories",
          url: "/admin/categories",
        },
        {
          name: "Sub Categories",
          url: "/admin/sub-categories",
        },
        {
          name: "Child Categories",
          url: "/admin/child-categories",
        },
        // {
        //   name: "Mega Menu Categories",
        //   url: "/admin/mega-menu-categories",
        // },
        // {
        //   name: "Popular Categories",
        //   url: "/admin/popular-categories",
        // },
        // {
        //   name: "Featured Categories",
        //   url: "/admin/featured-categories",
        // },
      ],
    },
    {
      heading: "Manage Product",
      icon: <ProductionQuantityLimitsIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Brands",
          url: "/admin/brands",
        },
        // {
        //   name: "Product Bulk Import",
        //   url: "/admin/product-bulk",
        // },
        {
          name: "Products",
          url: "/admin/products",
        },
        {
          name: "Stock Out",
          url: "/admin/stock-out",
        },
        {
          name: "Seller Products",
          url: "/admin/seller-products",
        },
        // {
        //   name: "Awaiting For Approval",
        //   url: "/admin/awaiting-approval",
        // },
        {
          name: "Specification Key",
          url: "/admin/specification",
        },
        {
          name: "Products Review",
          url: "/admin/products-review",
        },
        // {
        //   name: "Products Report",
        //   url: "/admin/products-report",
        // },
      ],
    },
    {
      heading: "Location",
      icon: <LocationOnIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Country / Region",
          url: "/admin/country",
        },
        {
          name: "State / Province",
          url: "/admin/state",
        },
        {
          name: "City / Delivery Area",
          url: "/admin/city",
        },
      ],
    },
    {
      heading: "Delivery Man",
      icon: <DirectionsBikeIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        // {
        //   name: "Create Delivery Man",
        //   url: "/admin/create-delivery-man",
        // },
        {
          name: "Delivery Man",
          url: "/admin/delivery-man",
        },
        {
          name: "Receive Amount",
          url: "/admin/delivery-man-receive-amount",
        },
        {
          name: "Review",
          url: "/admin/delivery-man-review",
        },
      ],
    },
    {
      heading: "Delivery Withdraw",
      icon: <DirectionsBikeIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: " Delivery Man Withdraw Method",
          url: "/admin/delivery-withdraw-method",
        },
        {
          name: "Delivery Man Withdraw",
          url: "/admin/withdraw",
        },
        {
          name: "Delivery Man pending Withdraw",
          url: "/admin/pending-withdraw",
        },
      ],
    },
    {
      heading: "Ecommerce",
      icon: <ShoppingCartIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Flash Sale",
          url: "/admin/flash-sale",
        },
        // {
        //   name: "Flash Sale Product",
        //   url: "/admin/flash-sale-product",
        // },
        {
          name: "Coupon",
          url: "/admin/coupon",
        },
        {
          name: "Shipping Rule",
          url: "/admin/shipping-rule",
        },
        {
          name: "Payment Method",
          url: "/admin/payment-method",
        },
      ],
    },
    {
      heading: "Withdraw Payment",
      icon: <ShoppingCartIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Withdraw Method",
          url: "/admin/withdraw-method",
        },
        {
          name: "Seller Withdraw Method",
          url: "/admin/seller-withdraw-method",
        },
        {
          name: "Pending Seller Withdraw",
          url: "/admin/pending-seller-withdraw",
        },
      ],
    },
    {
      heading: "Advertisement",
      icon: <EmailIcon sx={{ fontSize: 18 }} />,
      subRoutes:[
        {
          name: "Advertisement",
          url: "/admin/advertisement",
        },
       ]
    },
    {
      heading: "Users",
      icon: <GroupIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Customer List",
          url: "/admin/customer-list",
        },
        {
          name: "Pending Customer",
          url: "/admin/pending-customer",
        },
        {
          name: "Seller List",
          url: "/admin/seller-list",
        },
        {
          name: "Pending Seller",
          url: "/admin/pending-seller",
        },
      ],
    },
    {
      heading: "Manage Websites",
      icon: <LanguageIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Slider",
          url: "/admin/slider",
        },
        {
          name: "Service",
          url: "/admin/service",
        },
        {
          name: "Homepage Section Title",
          url: "/admin/homepage-section-title",
        },
        {
          name: "Seller Conditions",
          url: "/admin/seller-condition",
        },
        {
          name: "Maintainance Mode",
          url: "/admin/maintainance-mode",
        },
        {
          name: "Announcement",
          url: "/admin/announcement",
        },
        {
          name: "Subscription Banner",
          url: "/admin/subscription-banner",
        },
        {
          name: "Image Content",
          url: "/admin/image-content",
        },
        {
          name: "Default Avatar",
          url: "/admin/default-avatar",
        },
      ],
    },
    {
      heading: "Email Configuration",
      icon: <EmailIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Setting",
          url: "/admin/email-configuration",
        },
        {
          name: "Email template",
          url: "/admin/email-template",
        },
      ],
    },
    { 
      heading: "Sms Configuration",
      icon: <EmailIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Setting",
          url: "/admin/sms-configuration",
        },
        {
          name: "Sms template",
          url: "/admin/sms-template",
        },
      ],
    },
    { 
      heading: "Contact",
      icon: <EmailIcon sx={{ fontSize: 18 }} />,
      subRoutes: [
        {
          name: "Contact Message",
          url: "/admin/contact-message",
        },
      ],
    },
  
     
        
      
    
  ],
};
















// 
// Sms Configuration

// Setting
// Clear Database

// Contact Message
// Admin list
// Contact Message


