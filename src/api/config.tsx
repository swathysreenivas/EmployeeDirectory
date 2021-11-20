// @flow
const domains = {
  testUrl: 'https://www.mocky.io/',
};

export const baseURL = domains.testUrl;

const routes = {
  v2: 'v2/',
};
export const apiEndpoints = {
  employeeList: baseURL + routes.v2 + '5d565297300000680030a986',
};

export type EndPointType = 'employeeList';

export type APIDataType = {
  params: any;
  method?: string;
  endPoint: EndPointType;
};
