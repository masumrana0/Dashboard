import { ICommonUser } from "./common";

export interface IMessage {
  sender: ICommonUser;
  timestamp: string;
  content: string;
}

export interface IConversation {
  conversationId: string;
  participants: ICommonUser[];
  messages: IMessage[];
}
