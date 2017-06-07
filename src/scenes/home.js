import React, { Component } from 'react';
import { Text } from 'react-native'
import { Container, Content, Body, Title, Button, Header, Icon, Right, Left, Drawer, StyleProvider } from 'native-base';
import Menu from '../components/menu';
import getTheme from '../../native-base-theme/components';

export default class Home extends React.Component{

 //  static navigationOptions = ({ navigation }) => ({
 //    headerTintColor: 'white',
 //    title: 'Home',
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
    closeDrawer = () => {
      console.log("close")
        //this.drawer._root.close()
      };
      // openDrawer = () => {
      //   this.drawer._root.open()
      // };
    return (
      <StyleProvider style={getTheme()}>
      <Container>
        <Drawer
             ref={(ref) => { this.drawer = ref; }}
             content={<Menu navigator={this.props.navigation} />}
             onClose={() => console.log('Closed Drawer')}
          >

             <Header>
             <Left>
             <Button transparent onPress={() => {
               this.props.navigation.navigate("DrawerOpen")
             }}>
                 <Text style={{
                   color:'#E3DBCE',
                   fontSize: 16,
                   fontWeight:'bold'
                 }}>Menu</Text>
             </Button>
             </Left>
               <Body>
                 <Title>HOME</Title>
               </Body>
               <Right>

             </Right>
             </Header>
         </Drawer>
      </Container>
      </StyleProvider>
    //   <View style={{
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}>
    //     <Button
    //     onPress={() => navigate('CameraView', {item: 'itemOne'})}
    //     title="Tour 1"
    //     color="#000"
    //   />
    //   <Button
    //   onPress={() => navigate('CameraView', {item: 'itemTwo'})}
    //   title="Tour 2"
    //   color="#000"
    // />
    //   </View>
    )
  }

}
