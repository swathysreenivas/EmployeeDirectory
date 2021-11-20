import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {RootStackParamList} from '../../navigation/config';
import {ItemInfo} from './itemInfo';
import {styles} from './style';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavigationProp;
  route: any;
};

export const EmployeeDetails = ({navigation, route}: Props) => {
  const [details, setDetails] = useState(route.params.empInfo);
  useEffect(() => {}, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.mainContainer}>
        {renderImage()}
        {renderDetails()}
      </View>
    </ScrollView>
  );
  function renderImage() {
    return (
      <FastImage
        style={styles.imageStyle}
        source={{
          uri: details.profile_image,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  }
  function renderDetails() {
    return (
      <View>
        <ItemInfo details={{head: 'Name', value: details.name}} />
        <ItemInfo details={{head: 'User Name', value: details.username}} />
        <ItemInfo details={{head: 'Email', value: details.email}} />
        <ItemInfo
          details={{
            head: 'Address',
            value:
              details.address.street +
              '\n' +
              details.address.suite +
              '\n' +
              details.address.city +
              '\n' +
              details.address.zipcode,
          }}
        />
        <ItemInfo
          details={{
            head: 'Phone',
            value: details.Phone ? details.Phone : 'N/A',
          }}
        />
        <ItemInfo details={{head: 'Website', value: details.username}} />
        <ItemInfo
          details={{
            head: 'Company Details',
            value: details.company
              ? details.company.name +
                '\n' +
                details.company.catchPhrase +
                '\n' +
                details.company.bs
              : 'N/A',
          }}
        />
      </View>
    );
  }
};
