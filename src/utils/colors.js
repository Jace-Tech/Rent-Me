import MMKVStorage from 'react-native-mmkv-storage'
// import { useColorScheme } from 'react-native'
// const storage = MMKVStorage.Loader().withEncryption().initialize()


// const getItem = async (key) => {
//     let data = await storage.getStringAsync(key)
//     return data
// }

// const string = getItem('mode').then(data => data)
// const color = useColorScheme()

const string = 'light'


// export const PRIMARY_COLOR = "#f3994b"
export const PRIMARY_COLOR = "#092C4C"
export const BLACK = "#00022E"
export const RED = "#EB5757"
export const ORANGE = "#F2994A"
export const YELLOW = "#FFECDC"
export const GREEN = "rgb(103,173,101)"
export const BLUE = "rgb(82,127,233)"
export const TEXT_PRIMARY_COLOR = string === 'light' ? "#40425C" : "#eee"
export const TEXT_SECONDARY_COLOR = string === 'light' ? "#6C7884" : "#ccc"
export const BG_COLOR = string === 'light' ? "#1e1e1e" : "#fefefe"