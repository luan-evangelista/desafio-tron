import React, {Component, useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

export default function Home() {
  const navigation = useNavigation();

  function filterDesc(desc) {
    if (desc.length < 20) {
      return desc;
    }

    return `${desc.substring(0, 10)}...`;
  }

  const [searchText, setSearchText] = useState('');
  const [list, setData] = useState(list);

  useEffect(() => {
    personagens();
    {
      if (searchText === '') {
        setData(list);
      } else {
        setData(
          list.filter(item => {
            if (item.name.indexOf(searchText) > -1) {
              return true;
            } else {
              return false;
            }
          }),
        );
      }
    }
  }, [searchText]);

  async function personagens() {
    const response = await api.get();
    setData(response.data.data.results);
  }

  console.tron.log(list);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.jpg')}
          style={styles.image}
        />
      </View>

      <View style={styles.line} />

      <View
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#FFF'}}>
        <View style={styles.search}>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder="Qual personagem está procurando?"
              value={searchText}
              onChangeText={t => setSearchText(t)}
            />
          </View>
        </View>
      </View>

      <FlatList
        data={list}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() => navigation.navigate('Detail', {hero: item})}>
              <Image
                style={styles.shoesImg}
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
              />
              <Text style={styles.shoesText}>{filterDesc(item.name)}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 8,
  },
  image: {
    // width: '100%',
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  },
  search: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FFF',
    elevation: 7,
    paddingHorizontal: 15,
    height: 40,
    borderRadius: 10,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 15,
    width: '90%',
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  shoesText: {
    fontSize: 20,
  },
});
