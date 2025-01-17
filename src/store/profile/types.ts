export interface IUserData {
  id: string;
  name: string;
  lastName: string;
  email: string;
  profileImage: string;
}

export interface IAddressInfo {
  street: string;
  extNumber: string;
  intNumber: string;
  zipCode: string;
}

export interface IUpdateUserDataField {
  field: string;
  value: string;
}

export interface ProfileState {
  userData: IUserData;
  addressInfo: IAddressInfo;
  userName: string;
  userEmail: string;
  userAge: number;
}
