
export const saveToLocalStorage = async (type, value) => {
    let localstorage = window.localStorage;
    let key = type + "_" + Date.now();
    value.key = key
    value = JSON.stringify(value)
    await localstorage.setItem(key, value)
}

export const getFromLocalStorage = async (type) => {
    let localstorage = window.localStorage;
    let keys = Object.keys(localstorage);
    let result = [];
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if (key.includes(type)) {
            let value = await localstorage.getItem(key);
            result.push(JSON.parse(value));
        }    
    }
    console.log(result)
    return result;
}

export const removeFromLocalStorage = async (key) => {
    let localstorage = window.localStorage;
    await localstorage.removeItem(key)
}

// get all items from localstorage and group items
export const getGroupedItems = async () => {
    let localstorage = window.localStorage;
    let keys = Object.keys(localstorage);
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        let type = key.split("_")[0]
        if (result[type] == undefined) {
            result[type] = []
        }
        let value = await localstorage.getItem(key);
        result[type].push(JSON.parse(value));
    }
    return result;
}