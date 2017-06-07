import React, { Component } from 'react';
import { Text, Image, View } from 'react-native'
import { Container, Content, Body, Title, Button, Header, Icon, Right, Left } from 'native-base';
import Camera from 'react-native-camera';
import { Col, Row, Grid } from "react-native-easy-grid";
import Dimensions from 'Dimensions';


let assetCatelog = {
  itemOne: require('../assets/profile.png'),
  itemTwo: require('../assets/user.png')
}

export default class CameraScene extends React.Component{

 //  static navigationOptions = ({ navigation }) => ({
 //    headerTintColor: 'white',
 //    title: 'Camera',
 //    headerTitleStyle:{
 //      color: 'white'
 //    },
 //    headerStyle: {
 //     backgroundColor:'#D20A4B'
 //   }
 // });
  constructor(props){
    super(props);
  }

  render(){
    const { params } = this.props.navigation.state;
    return (
      <Container>
          <Header>
          <Left>
          <Button transparent onPress={() => {
            this.props.navigation.navigate("DrawerOpen")
          }}>
              <Text>Menu</Text>
          </Button>
          </Left>
            <Body>
              <Title>Camera</Title>
            </Body>
            <Right>

          </Right>
          </Header>
      <Grid>
            <Row>
                <Camera
                  ref={(cam) => {
                    this.camera = cam;
                  }}
                  style={{
                    width:Dimensions.get('window').width
                  }}
                  aspect={Camera.constants.Aspect.fill}>
                  <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginBottom:100
                  }}>
                  <Image
                    source={assetCatelog['itemOne']}
                    style={{
                      width: 128,
                      height: 128
                    }}
                    />
                    </View>
                  </Camera>
            </Row>
      </Grid>
      </Container>
      // <Container style={{}}>
      //   <Content>
      //     <Header>
      //     <Left>
      //     <Button transparent onPress={openDrawer}>
      //         <Text>Menu</Text>
      //     </Button>
      //     </Left>
      //       <Body>
      //         <Title>Camera</Title>
      //       </Body>
      //       <Right>
      //
      //     </Right>
      //     </Header>
      //     <Camera
      //       ref={(cam) => {
      //         this.camera = cam;
      //       }}
      //       style={{
      //         justifyContent: 'flex-start',
      //         alignItems: 'center',
      //         flexDirection: 'column'
      //       }}
      //       aspect={Camera.constants.Aspect.fill}>
      //       <Image
      //         source={assetCatelog['itemOne']}
      //         style={{width: 128, height: 128, marginBottom:50}}
      //         />
      //       </Camera>
      //   </Content>
      // </Container>
      // <View style={styles.container}>
      //   <Camera
      //     ref={(cam) => {
      //       this.camera = cam;
      //     }}
      //     style={styles.preview}
      //     aspect={Camera.constants.Aspect.fill}>
      //     <Image
      //       source={assetCatelog[params.item]}
      //       style={{width: 128, height: 128, marginBottom:50}}
      //       />
      //     </Camera>
      // </View>
    )
  }

}
