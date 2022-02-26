import { createContext, useContext, useState } from "react"
import * as ImagePicker from 'expo-image-picker'


export const ProfileContext = createContext()

export const useProfile = () => {
    return useContext(ProfileContext)
}

const ProfileProvider = ({ children }) => {
    const [image, setImage] = useState(null)

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
  
    return (
        <ProfileContext.Provider value={{image, pickImage}}>
            { children }
        </ProfileContext.Provider>
    )
}


export default ProfileProvider