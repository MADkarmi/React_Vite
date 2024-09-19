import { useState } from "react";
import { AccountsContainer, TabContent, TabsList, TabsTrigger,  } from "./StyledTabs";
import PasswordChange from "./PasswordChange/PasswordChange";
import Preferences from "./Preferences/Preferences";
import UserName from "./UserName/UserName";
import {UserSettings as userData} from './Data/UserSettingsData'



export default function AccountSettings(){
    const [userSettings, setUserSettings] = useState(userData);

    return(
        <AccountsContainer defaultValue="userName"  orientation="vertical">
            <TabsList aria-label="Manage your account">
                <TabsTrigger value="userName">
                    Account
                </TabsTrigger>
                <TabsTrigger value="passwordChange">
                    Password
                </TabsTrigger>
                <TabsTrigger value="preferences">
                    Preferences
                </TabsTrigger>
            </TabsList>

            <TabContent value="userName">
                <UserName name={userSettings.name} userName={userSettings.userName} Gender={userSettings.gender}/>
            </TabContent>

            <TabContent value="passwordChange">
                <PasswordChange password = {userSettings.password}/>
            </TabContent>

            <TabContent value="preferences">
                <Preferences
                notifications={userSettings.notifications}
                notificationFrequency={userSettings.notificationFrequency}
                agreementForDataCollection={userSettings.agreementForDataCollection}/>
            </TabContent>
        </AccountsContainer>
    );
}