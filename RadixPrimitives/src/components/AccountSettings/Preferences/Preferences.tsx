import { useState } from "react";
import Button from "../Commons/Button";
import { StyledFieldSet } from "../Commons/FieldSet";
import Header from "../Commons/Header";
import { StyledLabel } from "../Commons/StyledLabel";
import { NotificationType } from "../Data/AccountSettingsTypes";
import StyledSlider from "./Slider";
import StyledSelect from "./StyledSelect";
import StyledSwitch from "./StyledSwitch";

interface PreferencesProps{
    notifications: NotificationType;
    notificationFrequency: number;
    agreementForDataCollection: boolean;
}

export default function Preferences({notifications, notificationFrequency, agreementForDataCollection}: PreferencesProps){
    const [dataCollection, setDataCollection] = useState<boolean>(agreementForDataCollection);

    const handleAgreementForDataCollection = (val : boolean) => {
        setDataCollection(val);
        console.log(val? "agreed" : "refused");
    }

    const handleNotificationFrequencyChange = (val:number[]) => {
        console.log(val);
    }

    const handleNotificationsChange = (val:string) => {
        console.log(val);
    }

    return(
        <>
            <Header>
                Change preferences here. Click save when you're done.
            </Header>
            <StyledFieldSet>
                <StyledLabel htmlFor="notifications">
                    Notification Settings
                </StyledLabel>
                <StyledSelect notifications={notifications} onValueChange={handleNotificationsChange} />

                <StyledLabel htmlFor="notificationsFrequency">
                    Notifications Frequency
                </StyledLabel>
                <StyledSlider id="notificationsFrequency" defaultValue={[notificationFrequency]} max={100} step={1} onValueCommit={handleNotificationFrequencyChange} />

                <StyledLabel htmlFor="dataCollectSwitch">
                    Collect additional data
                    {agreementForDataCollection}
                </StyledLabel>
                <StyledSwitch id="dataCollectSwitch" checked={dataCollection} onCheckedChange={handleAgreementForDataCollection}/>

                <Button onClick={(e) => {console.log("submited")}}>
                    Save Preferences
                </Button>
            </StyledFieldSet>
        </>
    );
}