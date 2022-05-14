import { createContext, useContext, useState } from "react"
import * as ImagePicker from 'expo-image-picker'


export const ProfileContext = createContext()

export const useProfile = () => {
    return useContext(ProfileContext)
}

const ProfileProvider = ({ children }) => {
    const [image, setImage] = useState(null)
    const [profileDetails, setProfileDetails] = useState({
        email: "alexjace151@gmail.com",
        username: "@jaceAlex",
        phone: "+2349052541151",
        gender: "male",
        age: 21,
        nationality: "nigeria",
        fullName: "Jace Alexander"
    })

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
    
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const value = {
        image, 
        pickImage,
        profileDetails,
        setProfileDetails
    }
  
    return (
        <ProfileContext.Provider value={value}>
            { children }
        </ProfileContext.Provider>
    )
}


export default ProfileProvider