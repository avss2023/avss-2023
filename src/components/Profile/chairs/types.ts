export interface ProfileInterface {
  name: string;
  description: string;
  profileImage: string;
}

export interface ChairsInterface {
  roll: string;
  profiles: ProfileInterface[];
}
