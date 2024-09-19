import {IUserSettings, Gender, NotificationType} from './AccountSettingsTypes';

export const UserSettings : IUserSettings = {
    id: "e6e06b47-75d7-4f88-a5fa-5c1dbdf1cda1",
    name: "Gordon Freeman",
    userName: "GMan",
    gender: Gender.Male,
    password: "LubięPlacki",
    notifications: NotificationType.All,
    notificationFrequency: 70,
    agreementForDataCollection: false,
}