import { ICommonUser } from "./common";

export interface IReview {
  user: ICommonUser;
  rating: number;
  review: string;
  timestamp: string;
}
