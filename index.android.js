/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Container, Header, Item, Input, Icon, Button,Left,Right,Content,Footer,FooterTab,Body,Title,Text } from 'native-base';
import MapView from 'react-native-maps';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

export default class Shop extends Component {




render() {
  return ( 
   <Container>
      <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
 <View style ={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{    latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,}}>
        </MapView>
      </View>
 </Container>

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },

  map:
  {
top:0,
left:0,
right:0,
bottom: 0,
position: 'absolute'
  },

});

AppRegistry.registerComponent('Shop', () => Shop);
