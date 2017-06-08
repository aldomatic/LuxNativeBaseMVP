import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Content, Body, Title, Button, Header, Icon, Right, Left, StyleProvider } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import getTheme from '../../native-base-theme/components';

export default class Tour extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Container>
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
                <Title>Tours</Title>
              </Body>
              <Right>

            </Right>
            </Header>
        <Grid>
              <Row>
                <Text>Tours homepage.</Text>
              </Row>
        </Grid>
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
