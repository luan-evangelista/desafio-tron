import React, {Component} from 'react';
import {Button, ScrollView, Image, Dimensions, Text} from 'react-native';

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
        <Text style={{padding: 10, fontSize: 30}}>{hero.name}</Text>
        <Button
          title="Informações"
          onPress={() =>
            this.props.navigation.navigate('Web', {link: hero.urls})
          }
        />
        <Text style={{padding: 10, fontSize: 20}}>{hero.description}</Text>
      </ScrollView>
    );
  }
}
