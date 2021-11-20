import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../navigation/config';
import {getEmployeeDetails} from '../../utilities/asyncStore';
import strings from '../../utilities/strings';
import {EmployeeCell} from './components/employeeCell/employeeCell';
import {styles} from './style';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
};

export const Home = ({navigation}: Props) => {
  const [dataList, setDataList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const getEmployeeListFromAsyncStore = async () => {
      let employeeInfoAsyc = await getEmployeeDetails();
      setDataList(JSON.parse(employeeInfoAsyc));
    };
    getEmployeeListFromAsyncStore();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {renderSearchField()}
      {renderList()}
    </View>
  );
  function renderSearchField() {
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          value={searchText}
          onChangeText={text => {
            handleSearchText(text);
          }}
          placeholder={strings.main.searchPlaceholder}
        />
        <TouchableOpacity
          onPress={() => {
            setSearchText('');
          }}>
          <Text>clear</Text>
        </TouchableOpacity>
      </View>
    );
  }
  function handleSearchText(text: string) {
    let empList = [...dataList];
    setSearchText(text);
    let filterList = empList.filter(item => {
      return (
        item.name.toLowerCase().match(text) ||
        item.email.toLowerCase().match(text)
      );
    });
    setSearchList(filterList);
  }
  function renderList() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        data={searchList.length > 0 || searchText ? searchList : dataList}
        renderItem={({item, index}) => (
          <EmployeeCell
            details={item}
            index={index}
            onPress={itemInfo => onPressListItem(itemInfo)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
  function onPressListItem(itemInfo: any) {
    navigation.navigate('EmployeeDetails', {empInfo: itemInfo});
  }
};
