import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './style';

type Props = {
  details: any;
  index: number;
  onPress: any;
};

export const EmployeeCell = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.details)}>
      <View style={styles.row}>
        <FastImage
          style={styles.thumbnail}
          source={{
            uri: props.details.profile_image,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.nameStyle}>{props.details.name}</Text>
          <Text style={styles.companyNameStyle}>
            {props.details.company ? props.details.company.name : '-'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
