import { ICommonUser } from "./common";

export interface INotificationMessage {
  type: "message" | "alert";
  user: ICommonUser;
  lastMessage: string;
  time: string;
}
