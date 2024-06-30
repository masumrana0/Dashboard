import { StaticImageData } from "next/image";

export interface IName {
  firstName: string;
  lastName?: string;
}

export interface ICommonUser {
  id?: string | any;
  name: IName;
  photo: string | StaticImageData;
  role?: string;
}
