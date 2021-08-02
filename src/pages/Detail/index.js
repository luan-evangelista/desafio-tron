import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default class Detail extends Component {
  render() {
    const {hero} = this.props.route.params;
    return (
      <ScrollView>
        <Image
          source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
          style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH}}
        />
        <TextInput style={[styles.text, {color: '#000'}]}>
          {hero.name}
        </TextInput>

        <View style={styles.line} />

        <View style={styles.container}>
          <TouchableOpacity
            style={{
              right: 0,
              alignSelf: 'center',
              marginVertical: '2%',
            }}>
            <Icon name="save" size={30} />
          </TouchableOpacity>

          <Icon
            style={{
              right: 0,
              alignSelf: 'center',
              marginVertical: '2%',
            }}
            name="podcast"
            size={30}
            onPress={() =>
              this.props.navigation.navigate('Web', {link: hero.urls})
            }
          />

          <Icon
            style={{
              right: 0,
              alignSelf: 'center',
              marginVertical: '2%',
            }}
            name="reply-all"
            size={30}
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 30,
    marginHorizontal: '2%',
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 5,
  },
});
