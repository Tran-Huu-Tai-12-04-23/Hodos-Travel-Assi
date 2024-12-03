import { IBase } from ".";

export enum ERole {
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
}
export interface IUser extends IBase {
  id: string;
  username: string;
  avatar: string;
  verifyAt: Date | null;
  isActive: boolean;
  role: ERole;
  userDetail: IUserDetail;
}

export interface IUserDetail extends IBase {
  fullName: string;
  address: string;
  phoneNumber: string;
  bio: string;
  email: string;
  githubLink: string;
  telegramLink: string;
  facebookLink: string;
}
