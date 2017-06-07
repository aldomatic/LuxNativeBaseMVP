import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  List,
  ListItem,
  Icon } from 'native-base';

const routes = ["Home", "Camera", "Tour"];
export default class Menu extends React.Component {

render(){
  return (
    <Container style={{flex: 1, backgroundColor: '#fff'}}>
      <Content>
      <Image
         source={{
           uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
         }}
         style={{
           height: 120,
           alignSelf: "stretch",
           justifyContent: "center",
           alignItems: "center"
         }}
       />
       <List
        dataArray={routes}
        renderRow={data => {
          return (
            <ListItem
              button
              onPress={() => this.props.navigation.navigate(data, {})}
            >
              <Text>{data}</Text>
            </ListItem>
          );
        }}
      />
      </Content>
    </Container>
  )
}
}
