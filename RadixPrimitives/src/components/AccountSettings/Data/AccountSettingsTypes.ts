export interface IUserSettings {
    id: string;
    name: string;
    userName: string;
    gender: Gender;
    password: string;
    notifications: NotificationType;
    notificationFrequency: number;
    agreementForDataCollection: boolean;
}

export enum Gender {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

export enum NotificationType {
    All = "All",
    OnlyFollowed = "Only Followed",
    None = "None"
}
