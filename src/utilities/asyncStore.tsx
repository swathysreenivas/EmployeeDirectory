import AsyncStorage from '@react-native-community/async-storage';

export const saveEmployeeDetails = async (userData: any) => {
  if (userData != null) {
    try {
      await AsyncStorage.setItem('EMPLOYEE_DATA', JSON.stringify(userData));
    } catch (error) {}
  }
};

export const getEmployeeDetails = async () => {
  try {
    const userData = await AsyncStorage.getItem('EMPLOYEE_DATA');

    if (userData) {
      return userData;
    }
    return '';
  } catch (error) {
    return '';
  }
};
