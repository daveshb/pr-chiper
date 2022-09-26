import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { neww } from '../constants/neww';
import { styles } from '../theme/appTheme';

export const Popular = () => {
    return (
        <ScrollView style={styles.globalMargin}>
        {neww?.data?.children?.map((item: any) => (
          <View style={styles.flexItem}>
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
