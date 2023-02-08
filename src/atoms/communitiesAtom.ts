import { Timestamp } from "firebase/firestore";

export interface Community {
  id: string;
  creatorId: string;
  numberOfMembers: number;
  privacyType: "public" | "restrict" | "private";
  createdAt?: Timestamp;
  imageURL?: string;
}
