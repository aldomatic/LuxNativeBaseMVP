import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import {
  Container,
  Content,
  Button,
  List,
  ListItem,
  Item,
  Icon } from 'native-base';

const routes = ["Home", "Camera", "Tour"];
export default class Menu extends React.Component {

render(){
  return (
    <Container style={{flex: 1, backgroundColor: '#2A2111'}}>
      <View>
      <View style={{
          height: 100,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#393020"
        }}>
          <Text style={{
              color:'#fff',
              fontSize: 18,
              fontWeight: 'bold'
          }}>MENU</Text>
        </View>
       <List
        dataArray={routes}
        renderRow={data => {
          return (
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate(data, {})}
              style={{
                paddingLeft:25,
                paddingTop:15,
                paddingBottom:15,
                borderBottomColor: '#393020',
                borderBottomWidth: 1
              }}
              underlayColor={'#393020'}
            >
              <Text style={{
                color:'#fff',
                fontSize: 16,
                fontWeight: 'bold'
              }}>{data}</Text>
            </TouchableHighlight>
          );
        }}
      />
      </View>
    </Container>
  )
}
}
