import { useContext, createContext } from "react"



export const MapContext = createContext() 

export const useMap = () => useContext(MapContext)

const MapProvider = ({ children }) => {
    const initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    return (
        <MapContext.Provider value={{initialRegion}}>
            { children }
        </MapContext.Provider>
    )
}


export default MapProvider