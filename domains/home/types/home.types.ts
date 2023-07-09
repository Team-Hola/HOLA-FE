import { Language, Position } from "@/domains/common/types/common.types";

export interface Badge {
  content: string;
  type: "deadline" | "hot" | "new" | "project" | "study";
}

export interface PostItem {
  _id: string;
  author: UserInfo;
  badge: Badge[];
  comments: Comment[];
  isClosed: boolean;
  isLiked: boolean;
  language: Language[];
  likes: string[];
  positions: Position[];
  startDate: string;
  title: string;
  totalComments: number;
  totalLikes: number;
  type: number;
  views: number;
}

export interface UserInfo {
  _id: string;
  image: string;
  nickName: string;
}
