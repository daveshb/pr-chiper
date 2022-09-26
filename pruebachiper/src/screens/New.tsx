import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {neww} from '../constants/neww';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const New = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.globalMargin}>
      {neww?.data?.children?.map((item: any) => (
        <View key={item} style={styles.flexItem}>
          <View style={styles.img}>
            <Image
              source={{uri: item.data.thumbnail}}
              style={{width: 50, height: 50, borderRadius: 10, marginRight: 10}}
            />
          </View>

          <View>
            <View>
              <Text style={styles.labelTime}>a few seconds ago</Text>
            </View>
            <Text style={styles.labelTitle}>{item.data.title}</Text>
            <View style={styles.flexLabelBottom}>
              <Text style={styles.labelBottom}>{item.data.author}</Text>
              <Text style={styles.labelBottom}>Score:{item.data.score}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
