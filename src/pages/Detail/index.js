import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {editCharacter} from '../../store/modules/heros/actions';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default function Detail({route}) {
  const {hero} = route.params;

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const [text, onChangeText] = useState(hero.name);

  const onSubmit = data => {
    setIsEditable(false);
    dispatch(editCharacter({...data, name: text}));
  };

  return (
    <ScrollView>
      <Image
        source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
        style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH}}
      />

      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={[styles.text, {color: '#000'}]}
      />

      <View style={styles.line} />

      <View style={styles.container}>
        <TouchableOpacity
          style={{
            right: 0,
            alignSelf: 'center',
            marginVertical: '2%',
          }}
          onPress={() => onSubmit(hero)}>
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
          onPress={() => navigation.navigate('Web', {hero})}
        />

        <Icon
          style={{
            right: 0,
            alignSelf: 'center',
            marginVertical: '2%',
          }}
          name="reply-all"
          size={30}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </ScrollView>
  );
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
