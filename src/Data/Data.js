// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import { UilQrcodeScan, UilExchangeAlt } from "@iconscout/react-unicons";


// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Projects",
  },
  {
    icon: UilUsersAlt,
    heading: "Experts",
  },
  {
    icon: UilPackage,
    heading: 'Assets'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "TagIT",
    color: {
      backGround: "#71DEFF", //originally c484f3
      boxShadow: "0px 10px 20px 0px #b5eeff",
    },
    barValue: 70,
    value: "Turns asset tags into text",
    png: UilQrcodeScan,
    url: "https://edge-api-orp3bl6lta-ue.a.run.app/API/imageHandle",
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "OPML2JSON",
    color: {
      backGround: "#347cff", // originally FC929D
      boxShadow: "0px 10px 20px 0px #96bbff",
    },
    barValue: 80,
    value: "Converts OPML strings to JSON",
    png: UilExchangeAlt,
    url: "https://opml2json-orp3bl6lta-ue.a.run.app/API/opml2json/",
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "XML2JSON",
    color: {
      backGround: "#c484f3",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 60,
    value: "Converts XML strings to JSON",
    png: UilClipboardAlt,
    url: "https://us-central1-fir-functions-api-a924d.cloudfunctions.net/app/",
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
