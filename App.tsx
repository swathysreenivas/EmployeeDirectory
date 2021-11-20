import React, {useEffect} from 'react';
import {apiManager} from './src/api';
import AppContainer from './src/navigation';
import {saveEmployeeDetails} from './src/utilities/asyncStore';

const App = () => {
  useEffect(() => {
    const getEmployeeList = () => {
      const apiData = {
        method: 'get',
        endPoint: 'employeeList',
      };
      apiManager(apiData)
        .then(response => {
          saveEmployeeDetails(response);
        })
        .catch(reject => {
          console.log('Error: ', reject);
        });
    };
    getEmployeeList();
  }, []);

  return <AppContainer />;
};

export default App;
