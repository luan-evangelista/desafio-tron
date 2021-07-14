import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Button from '../../components/Button';
// import Form from '../../components/Form';

export default function Detail() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/banner.jpg')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, {fontSize: 30}]}>Nome</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, {fontSize: 24}]}>Informações</Text>
        </View>
      </View>

      {/* <Form /> */}

      <Button />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
  },
  title: {
    paddingHorizontal: '2%',
  },
});
