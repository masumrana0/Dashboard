// icons
import {
  IoMdNotificationsOutline,
  IoIosLogOut,
  IoIosPeople,
  IoMdAnalytics,
} from "react-icons/io";

import { RxDashboard } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbBrandProducthunt } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineSound } from "react-icons/ai";
import { INavMenuItem } from "@/interface/dashboard";

export const sidebarContent: INavMenuItem[] = [
  { icon: <RxDashboard />, label: "DashBoard", route: "/dashboard" },
  { icon: <FaUserCircle />, label: "Profile", route: "/dashboard/profile" },
  {
    icon: <IoIosPeople />,
    label: "Seller",
    children: [
      { label: "Sellers", route: "/dashboard/Seller" },
      { label: "Create Seller", route: "/dashboard/create-seller" },
    ],
  },
  {
    icon: <FaPeopleGroup />,
    label: "Buyer",
    children: [
      { label: "Buyers", route: "/dashboard/buyer" },
      { label: "Create Buyer", route: "/dashboard/create-buyer" },
    ],
  },
  {
    icon: <TbBrandProducthunt />,
    label: "Product",
    children: [
      { label: "Products", route: "/dashboard/products" },
      { label: "Create Buyer", route: "/dashboard/create-product" },
    ],
  },
  {
    icon: <MdOutlineCategory />,
    label: "Category",
    children: [
      { label: "Categories", route: "/dashboard/category" },
      { label: "Create Category", route: "/dashboard/create-category" },
    ],
  },
  {
    icon: <RiAuctionLine />,
    label: "Bid",
    children: [
      { label: "Bids", route: "/dashboard/bid" },
      { label: "Create Bid", route: "/dashboard/create-bid" },
    ],
  },
  {
    icon: <TfiLayoutMediaRightAlt />,
    label: "Media",
    children: [
      { label: "Media", route: "/dashboard/media" },
      { label: "Create Media", route: "/dashboard/create-media" },
    ],
  },
  {
    icon: <GoCommentDiscussion />,
    label: "Comments",
    route: "/dashboard/comments",
  },
  {
    icon: <AiOutlineSound />,
    label: "Merketing",
    route: "/dashboard/Merketing",
  },
  {
    icon: <IoMdAnalytics />,
    label: "Analytic",
    route: "/dashboard/analytic",
  },
  {
    icon: <IoMdNotificationsOutline />,
    label: "Notification",
    route: "/dashboard/notification",
  },
  {
    icon: <IoSettingsOutline />,
    label: "Settings",
    route: "/dashboard/Settings",
  },
  {
    icon: <IoIosLogOut />,
    label: "LogOut",
    route: "/dashboard/logout",
  },
];
