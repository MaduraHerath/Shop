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
  View,
  Dimensions
} from 'react-native';
const {width,height}=Dimensions.get('window')
const ASPECT_RATIO = width / height;
const LATITUDE = 51.023033;
const LONGITUDE = 10.3621663;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class Shop extends Component {
    
    constructor(props){
        super(props);

        this.state={
            initialPosition:{
            latitude:0,
            longitude:0,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA

            },
            makerPosition:{
                latitude:37.78825,
                longtitude:-122.4324,
            }
        }
    }
    watchID: ?number = null

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
          
          console.log(position);
        var lat = parseFloat(position.coords.latitude)
        var long = parseFloat(position.coords.longitude)
        var initialRegion = {
            latitude:lat,
            longitude:long,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA
        }
        this.setState({initialPosition: initialRegion})
        this.setState({makerPosition: initialRegion})
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

    this.watchID = navigator.geolocation.watchPosition((position) => {
        
     var lat = parseFloat(position.coords.latitude)
      var long = parseFloat(position.coords.longitude)
              var lastRegion = {
            latitude:lat,
            longitude:long,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA
           
            
        }
        this.setState({initialPosition:lastRegion})
        this.setState({makerPosition:lastRegion})
    })
  }
componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID)
}

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
        showsUserLocation={true}
          style={styles.map}
         region ={ this.state.initialPosition }>
          <MapView.Marker region={this.state.markerPosition}>
              <View style={styles.radius}>
                  <View style={styles.marker}>
                      </View>
                  </View>
              </MapView.Marker>
        </MapView>
      </View>
      <View>

      </View>
 </Container>

  );
}
}

const styles = StyleSheet.create({
  radius:{
height:50,
width:50,
borderRadius:50/2,
overflow:'hidden',
backgroundColor:'rgba(10,122,255,0.1)',
borderWidth:1,
borderColor:'rgba(0,122,255,0.3)',
alignItems: 'center',
justifyContent:'center'
  }, 
  marker:{
height:20,
width:20,
borderWidth:3,
overflow:'hidden',
backgroundColor:'red',
borderColor:'white',
borderRadius:20/2
  },
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
