import { User } from "./user";

export interface Glide {
  id: string;
  content: string;
  user: User;
  likesCount: number;
  subglidesCount: number;
  date: Date;
}
