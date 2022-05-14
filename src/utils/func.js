export const generateId = (prefix, length = 10) => {
    let id = prefix || 'usr-'
    const addons = "1234567890abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < length; i++) {  
        id += addons[Math.floor(Math.random() * (addons.length - 1))]
    }

    return id
}