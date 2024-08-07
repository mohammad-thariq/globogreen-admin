export const statusConstantOption = [
  {
    name: "Active",
    value: 2,
  },
  {
    name: "Inactive",
    value: 1,
  },
];

export const orderStatusOptions = {
  paymentStatus: [
    {
      name: "Pending",
      value: 1,
    },
    {
      name: "Success",
      value: 2,
    },
  ],
  orderStatus: [
    {
      name: "Pending",
      value: 1,
    },
    {
      name: "In Progress",
      value: 2,
    },
    {
      name: "Delivered",
      value: 3,
    },
    {
      name: "Completed",
      value: 4,
    },
    {
      name: "Declined",
      value: 5,
    },
  ],
  deliveryMan: [
    {
      name: "Sarah Jahan",
      id: 1,
    },
  ],
};

export const OfferTypeOptions = [
  {
    name: "Percentage(%)",
    value: 1,
  },
  {
    name: "Amount(Rs)",
    value: 2,
  },
];

export const ShippingRuleType = [
  {
    name: "Base on product price(Rs)",
    value: "base_on_price",
    displayValue: "Rs",
  },
  {
    name: "Base on product weight(g)",
    value: "base_on_weight",
    displayValue: "g",
  },
  {
    name: "Base on product quantity(qty)",
    value: "base_on_quantity",
    displayValue: "qty",
  },
];

export const paymentMethods = [
  {
    id: 1,
    name: "Strip Payment",
    description:
      "Discover Merchant Service Solutions to Accept Payments Online or Virtually Anywhere.",
    action: "Edit",
    bgImage:
      "https://kinsta.com/wp-content/uploads/2017/01/stripe-for-wordpress.png",
  },
  {
    id: 2,
    name: "RazorPay Payment",
    description:
      "Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite",
    action: "Edit",
    bgImage: "https://razorpay.com/assets/payments-app/OG.jpg",
  },
  {
    id: 3,
    name: "Bank Account",
    description:
      "A bank account is a financial arrangement between an individual or a business and a banking institution.",
    action: "Edit",
    bgImage:
      "https://images.prismic.io/statrys/ZjCOFt3JpQ5PTQi6_best-savings-acc-usa-meta.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max",
  },
  {
    id: 4,
    name: "Cash On Delivery",
    description:
      "Cash on delivery (COD) is a type of transaction where the recipient pays for a good at the time of delivery rather than using credit.",
    action: "Edit",
    bgImage:
      "https://png.pngtree.com/png-clipart/20210523/original/pngtree-cash-on-delivery-green-stamp-cod-png-image_6331297.jpg",
  },
];

export const paymentMethodsName = {
  STRIP: "Strip Payment",
  RAZOR: "RazorPay Payment",
  BANK: "Bank Account",
  COD: "Cash On Delivery",
};

export const emailConfigurationEncryptoionOption = [
  {
    name: "SSL",
    value: "ssl",
  },
  {
    name: "TLS",
    value: "tls",
  },
];

export const mainTemplateVariable = {
  "{{name}}": "User Name",
  "{{email}}": "User Email",
  "{{phone}}": "User Phone",
  "{{subject}}": "User Subject",
  "{{message}}": "User Message",
  "{{name}}": "User Name",
  "{{seller_name}}": "Seller Name",
  "{{withdraw_method}}": "Withdraw method",
  "{{total_amount}}": "Total amount",
  "{{withdraw_charge}}": "Withdraw Charge",
  "{{withdraw_amount}}": "Withdraw amount",
  "{{approval_date}}": "Approval Date",
  "{{total_amount}}": "Total amount",
  "{{payment_method}}": "Payment Method",
  "{{payment_status}}": "Payment Status",
  "{{order_status}}": "Order Status",
  "{{order_date}}": "Order Date",
  "{{order_detail}}": "Order Detail",
};

export const AdvertisementSideOptionsEnum={
  sliderSidebarBannerOne : "sliderSidebarBannerOne",
  sliderSidebarBannerTwo : "sliderSidebarBannerTwo",
  popularCategorySidebarBanner : "popularCategorySidebarBanner",
  homepageTwoColumnBannerOne : "homepageTwoColumnBannerOne",
  homepageTwoColumnBannerTwo : "homepageTwoColumnBannerTwo",
  homepageSingleBannerOne : "homepageSingleBannerOne",
  homepageSingleBannerTwo : "homepageSingleBannerTwo",
  megaMenuBanner : "megaMenuBanner",
  // homepageFlashSaleSidebarBanner : "homepageFlashSaleSidebarBanner",
  shopPageCenterBanner : "shopPageCenterBanner",
  shopPageSidebarBanner : "shopPageSidebarBanner",
}
export const AdvertisementSideOptions = [
  {
    name: "Slider Sidebar Banner One",
    value: "sliderSidebarBannerOne",
  },
  {
    name: "Slider Sidebar Banner Two",
    value: "sliderSidebarBannerTwo",
  },
  {
    name: "Popular Category Sidebar Banner",
    value: "popularCategorySidebarBanner",
  },
  {
    name: "Home page Two Column Banner One",
    value: "homepageTwoColumnBannerOne",
  },
  {
    name: "Home page Two Column Banner Two",
    value: "homepageTwoColumnBannerTwo",
  },
  {
    name: "Home page Single Banner One",
    value: "homepageSingleBannerOne",
  },
  {
    name: "Home page Single Banner Two",
    value: "homepageSingleBannerTwo",
  },
  {
    name: "MegaMenu Banner",
    value: "megaMenuBanner",
  },
  // {
  //   name: "Home page Flash Sale Sidebar Banner",
  //   value: "homepageFlashSaleSidebarBanner",
  // },
  {
    name: "shopPage Center Banner",
    value: "shopPageCenterBanner",
  },
  {
    name: "shopPage Sidebar Banner",
    value: "shopPageSidebarBanner",
  },
];

export const GeneralSettingSideOptions = [
  {
    name: "General Setting",
    value: "setting",
  },
  {
    name: "Logo and Favicon",
    value: "logoAndFavicon",
  },
  {
    name: "Theme color",
    value: "themeColor",
  },
  {
    name: "Cookie Consent",
    value: "cookieConsent",
  },
  {
    name: "Google Recaptcha",
    value: "googleRecaptcha",
  },
  {
    name: "Pusher Credential",
    value: "pusher",
  },
  {
    name: "Blog Comment",
    value: "facebookComment",
  },
  {
    name: "Tawk Chat",
    value: "tawkChat",
  },
  {
    name: "Google Analytic",
    value: "googleAnalytic",
  },
  {
    name: "Custom Pagination",
    value: "customPaginations",
  },
  {
    name: "Social Login",
    value: "socialLogin",
  },
  {
    name: "Facebook Pixel",
    value: "facebookPixel",
  },
  {
    name: "Database Generate",
    value: "dataBase",
  },
];



export const GeneralSettingSideOptionsEnum = {
  setting: "setting",
  logoAndFavicon: "logoAndFavicon",
  themeColor: "themeColor",
  cookieConsent: "cookieConsent",
  googleRecaptcha: "googleRecaptcha",
  pusher: "pusher",
  facebookComment: "facebookComment",
  tawkChat: "tawkChat",
  googleAnalytic: "googleAnalytic",
  customPaginations: "customPaginations",
  socialLogin: "socialLogin",
  facebookPixel: "facebookPixel",
  dataBase: "dataBase",
};

export const SettingActiveStatus = [
  {
    name: "Enable",
    value: 2,
  },
  {
    name: "Disable",
    value: 1,
  },
];

export const commentActive = [
  {
    name: "Menual Comment",
    value: 1,
  },
  {
    name: "Facebook Comment",
    value: 2,
  },
];

export const getCountryCode = [
  { name: "Andorra +376", code: "AD" },
  { name: "Afghanistan +93", code: "AF" },
  { name: "Antigua and Barbuda +1268", code: "AG" },
  { name: "Anguilla +1264", code: "AI" },
  { name: "Albania +355", code: "AL" },
  { name: "Armenia +374", code: "AM" },
  { name: "Angola +244", code: "AO" },
  { name: "Antarctica +672", code: "AQ" },
  { name: "Argentina +54", code: "AR" },
  { name: "American Samoa +1684", code: "AS" },
  { name: "Austria +43", code: "AT" },
  { name: "Australia +61", code: "AU" },
  { name: "Aruba +297", code: "AW" },
  { name: "Åland Islands +358", code: "AX" },
  { name: "Azerbaijan +994", code: "AZ" },
  { name: "Bosnia and Herzegovina +387", code: "BA" },
  { name: "Barbados +1246", code: "BB" },
  { name: "Bangladesh +880", code: "BD" },
  { name: "Belgium +32", code: "BE" },
  { name: "Burkina Faso +226", code: "BF" },
  { name: "Bulgaria +359", code: "BG" },
  { name: "Bahrain +973", code: "BH" },
  { name: "Burundi +257", code: "BI" },
  { name: "Benin +229", code: "BJ" },
  { name: "Saint Barthélemy +590", code: "BL" },
  { name: "Bermuda +1441", code: "BM" },
  { name: "Brunei Darussalam +673", code: "BN" },
  { name: "Bolivia (Plurinational State of) +591", code: "BO" },
  { name: "Bonaire, Sint Eustatius and Saba +5997", code: "BQ" },
  { name: "Brazil +55", code: "BR" },
  { name: "Bhutan +975", code: "BT" },
  { name: "Bouvet Island +47", code: "BV" },
  { name: "Botswana +267", code: "BW" },
  { name: "Belarus +375", code: "BY" },
  { name: "Belize +501", code: "BZ" },
  { name: "Canada +1", code: "CA" },
  { name: "Switzerland +41", code: "CH" },
  { name: "Côte d'Ivoire +225", code: "CI" },
  { name: "Chile +56", code: "CL" },
  { name: "Cameroon +237", code: "CM" },
  { name: "China +86", code: "CN" },
  { name: "Colombia +57", code: "CO" },
  { name: "Costa Rica +506", code: "CR" },
  { name: "Cuba +53", code: "CU" },
  { name: "Cabo Verde +238", code: "CV" },
  { name: "Curaçao +599", code: "CW" },
  { name: "Christmas Island +61", code: "CX" },
  { name: "Cyprus +357", code: "CY" },
  { name: "Germany +49", code: "DE" },
  { name: "Djibouti +253", code: "DJ" },
  { name: "Denmark +45", code: "DK" },
  { name: "Dominica +767", code: "DM" },
  { name: "Algeria +213", code: "DZ" },
  { name: "Ecuador +593", code: "EC" },
  { name: "Estonia +372", code: "EE" },
  { name: "Egypt +20", code: "EG" },
  { name: "Western Sahara +212", code: "EH" },
  { name: "Eritrea +291", code: "ER" },
  { name: "Spain +34", code: "ES" },
  { name: "Ethiopia +251", code: "ET" },
  { name: "Finland +358", code: "FI" },
  { name: "Fiji +679", code: "FJ" },
  { name: "Micronesia (Federated States of) +691", code: "FM" },
  { name: "France +33", code: "FR" },
  { name: "Gabon +241", code: "GA" },
  { name: "Grenada +1473", code: "GD" },
  { name: "Georgia +995", code: "GE" },
  { name: "French Guiana +594", code: "GF" },
  { name: "Guernsey +44", code: "GG" },
  { name: "Ghana +233", code: "GH" },
  { name: "Gibraltar +350", code: "GI" },
  { name: "Greenland +299", code: "GL" },
  { name: "Guinea +224", code: "GN" },
  { name: "Guadeloupe +590", code: "GP" },
  { name: "Equatorial Guinea +240", code: "GQ" },
  { name: "Greece +30", code: "GR" },
  { name: "South Georgia and the South Sandwich Islands +500", code: "GS" },
  { name: "Guatemala +502", code: "GT" },
  { name: "Guam +1", code: "GU" },
  { name: "Guinea-Bissau +245", code: "GW" },
  { name: "Guyana +592", code: "GY" },
  { name: "Hong Kong +852", code: "HK" },
  { name: "Honduras +504", code: "HN" },
  { name: "Croatia +385", code: "HR" },
  { name: "Haiti +509", code: "HT" },
  { name: "Hungary +36", code: "HU" },
  { name: "Indonesia +62", code: "ID" },
  { name: "Ireland +353", code: "IE" },
  { name: "Israel +972", code: "IL" },
  { name: "Isle of Man +44", code: "IM" },
  { name: "India +91", code: "IN" },
  { name: "British Indian Ocean Territory +246", code: "IO" },
  { name: "Iraq +964", code: "IQ" },
  { name: "Iran (Islamic Republic of) +98", code: "IR" },
  { name: "Iceland +354", code: "IS" },
  { name: "Italy +39", code: "IT" },
  { name: "Jersey +44", code: "JE" },
  { name: "Jamaica +876", code: "JM" },
  { name: "Jordan +962", code: "JO" },
  { name: "Japan +81", code: "JP" },
  { name: "Kenya +254", code: "KE" },
  { name: "Kyrgyzstan +996", code: "KG" },
  { name: "Cambodia +855", code: "KH" },
  { name: "North Korea +850", code: "KP" },
  { name: "South Korea +82", code: "KR" },
  { name: "Kiribati +686", code: "KI" },
  { name: "Saint Kitts and Nevis +1869", code: "KN" },
  { name: "Kuwait +965", code: "KW" },
  { name: "Kazakhstan +7", code: "KZ" },
  { name: "Lebanon +961", code: "LB" },
  { name: "Saint Lucia +1758", code: "LC" },
  { name: "Liechtenstein +423", code: "LI" },
  { name: "Sri Lanka +94", code: "LK" },
  { name: "Liberia +231", code: "LR" },
  { name: "Lesotho +266", code: "LS" },
  { name: "Lithuania +370", code: "LT" },
  { name: "Luxembourg +352", code: "LU" },
  { name: "Latvia +371", code: "LV" },
  { name: "Libya +218", code: "LY" },
  { name: "Morocco +212", code: "MA" },
  { name: "Monaco +377", code: "MC" },
  { name: "Montenegro +382", code: "ME" },
  { name: "Saint Martin (French part) +590", code: "MF" },
  { name: "Madagascar +261", code: "MG" },
  { name: "Mali +223", code: "ML" },
  { name: "Myanmar +95", code: "MM" },
  { name: "Mongolia +976", code: "MN" },
  { name: "Macao +853", code: "MO" },
  { name: "Martinique +596", code: "MQ" },
  { name: "Mauritania +222", code: "MR" },
  { name: "Montserrat +1664", code: "MS" },
  { name: "Malta +356", code: "MT" },
  { name: "Mauritius +230", code: "MU" },
  { name: "Maldives +960", code: "MV" },
  { name: "Malawi +265", code: "MW" },
  { name: "Mexico +52", code: "MX" },
  { name: "Malaysia +60", code: "MY" },
  { name: "Mozambique +258", code: "MZ" },
  { name: "Namibia +264", code: "NA" },
  { name: "New Caledonia +687", code: "NC" },
  { name: "Norfolk Island +672", code: "NF" },
  { name: "Nigeria +234", code: "NG" },
  { name: "Nicaragua +505", code: "NI" },
  { name: "Norway +47", code: "NO" },
  { name: "Nepal +977", code: "NP" },
  { name: "Nauru +674", code: "NR" },
  { name: "Niue +683", code: "NU" },
  { name: "New Zealand +64", code: "NZ" },
  { name: "Oman +968", code: "OM" },
  { name: "Panama +507", code: "PA" },
  { name: "Peru +51", code: "PE" },
  { name: "French Polynesia +689", code: "PF" },
  { name: "Papua New Guinea +675", code: "PG" },
  { name: "Pakistan +92", code: "PK" },
  { name: "Poland +48", code: "PL" },
  { name: "Saint Pierre and Miquelon +508", code: "PM" },
  { name: "Pitcairn +64", code: "PN" },
  { name: "Puerto Rico +1", code: "PR" },
  { name: "Palestine, State of +970", code: "PS" },
  { name: "Portugal +351", code: "PT" },
  { name: "Palau +680", code: "PW" },
  { name: "Paraguay +595", code: "PY" },
  { name: "Qatar +974", code: "QA" },
  { name: "Réunion +262", code: "RE" },
  { name: "Romania +40", code: "RO" },
  { name: "Serbia +381", code: "RS" },
  { name: "Russia +7", code: "RU" },
  { name: "Rwanda +250", code: "RW" },
  { name: "Saudi Arabia +966", code: "SA" },
  { name: "Solomon Islands +677", code: "SB" },
  { name: "Seychelles +248", code: "SC" },
  { name: "Sweden +46", code: "SE" },
  { name: "Singapore +65", code: "SG" },
  { name: "Saint Helena, Ascension and Tristan da Cunha +290", code: "SH" },
  { name: "Slovenia +386", code: "SI" },
  { name: "Svalbard and Jan Mayen +47", code: "SJ" },
  { name: "Slovakia +421", code: "SK" },
  { name: "Sierra Leone +232", code: "SL" },
  { name: "San Marino +378", code: "SM" },
  { name: "Senegal +221", code: "SN" },
  { name: "Somalia +252", code: "SO" },
  { name: "Suriname +597", code: "SR" },
  { name: "South Sudan +211", code: "SS" },
  { name: "Sao Tome and Principe +239", code: "ST" },
  { name: "El Salvador +503", code: "SV" },
  { name: "Sint Maarten (Dutch part) +1721", code: "SX" },
  { name: "Syrian Arab Republic +963", code: "SY" },
  { name: "Eswatini +268", code: "SZ" },
  { name: "Chad +235", code: "TD" },
  { name: "Togo +228", code: "TG" },
  { name: "Thailand +66", code: "TH" },
  { name: "Tajikistan +992", code: "TJ" },
  { name: "Tokelau +690", code: "TK" },
  { name: "Timor-Leste +670", code: "TL" },
  { name: "Turkmenistan +993", code: "TM" },
  { name: "Tunisia +216", code: "TN" },
  { name: "Tonga +676", code: "TO" },
  { name: "Turkey +90", code: "TR" },
  { name: "Trinidad and Tobago +1868", code: "TT" },
  { name: "Tuvalu +688", code: "TV" },
  { name: "Taiwan +886", code: "TW" },
  { name: "Tanzania, United Republic of +255", code: "TZ" },
  { name: "Ukraine +380", code: "UA" },
  { name: "Uganda +256", code: "UG" },
  { name: "United States +1", code: "US" },
  { name: "Uruguay +598", code: "UY" },
  { name: "Uzbekistan +998", code: "UZ" },
  { name: "Holy See +379", code: "VA" },
  { name: "Saint Vincent and the Grenadines +1784", code: "VC" },
  { name: "Venezuela (Bolivarian Republic of) +58", code: "VE" },
  { name: "Virgin Islands (British) +1284", code: "VG" },
  { name: "Virgin Islands (U.S.) +1340", code: "VI" },
  { name: "Viet Nam +84", code: "VN" },
  { name: "Vanuatu +678", code: "VU" },
  { name: "Wallis and Futuna +681", code: "WF" },
  { name: "Samoa +685", code: "WS" },
  { name: "Yemen +967", code: "YE" },
  { name: "Mayotte +262", code: "YT" },
  { name: "South Africa +27", code: "ZA" },
  { name: "Zambia +260", code: "ZM" },
  { name: "Zimbabwe +263", code: "ZW" },
];

export const deliveryManDetailsTracker = [
  {
    id: 1,
    name: "Current product Balance",
    countKey: "current_product_amount",
    icon: "ni ni-money-coins text-lg opacity-10",
  },
  {
    id: 2,
    name: "Completed Order",
    countKey: "completeOrder",
    icon: "ni ni-world text-lg opacity-10",
  },
  {
    id: 3,
    name: "Running Order",
    countKey: "runingOrder",
    icon: "ni ni-paper-diploma text-lg opacity-10",
  },
  {
    id: 4,
    name: "Total Earn",
    countKey: "tota_earn",
    icon: "ni ni-cart text-lg opacity-10",
  },
  {
    id: 5,
    name: "Total widthdraw",
    countKey: "deliveryManWithdraw",
    icon: "ni ni-money-coins text-lg opacity-10",
  },
];

export const deliveryManDetails = [
  {
    id: 1,
    name: "Email",
    countKey: "email",
    type: "text",
  },
  {
    id: 2,
    name: "Phone",
    countKey: "phone",
    type: "text",
  },
  {
    id: 3,
    name: "Delivery Man Type",
    countKey: "man_type",
    type: "text",
  },
  {
    id: 4,
    name: "Identity Type",
    countKey: "idn_type",
    type: "text",
  },
  {
    id: 5,
    name: "Identity Number",
    countKey: "idn_num",
    type: "text",
  },
  {
    id: 6,
    name: "Identity Image",
    countKey: "idn_image",
    type: "image",
  },
  {
    id: 7,
    name: "User Status",
    countKey: "status",
    type: "status",
  },
];
