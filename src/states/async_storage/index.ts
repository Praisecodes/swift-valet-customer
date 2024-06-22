import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

const storeData = async (key: string, data: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, data);
    return true;
  } catch (error) {
    return false;
  }
}

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export {
  getData,
  storeData,
  removeData
};
