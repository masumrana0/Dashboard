import { IName } from "@/interface/common";


const FullName = (name: IName): string => {
  if (name?.firstName && name?.lastName) {
    return `${name?.firstName} ${" "} ${name?.lastName}`;
  } else {
    return name?.firstName || "";
  }
};

export default FullName;
