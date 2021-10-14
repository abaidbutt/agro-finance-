/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Block } from '../components';
import Chat from '../info/Chat';
import { theme } from '../theme';

const InfoScreen = () => {
  return (
    <ScrollView>
      <Block style={styles.container}>
        <Avatar
          name="hamza"
          position="Expert consultant"
          email="hamzanasa@gmail.com"
          img={require('../assets/consultant.jpg')}
        />
        <Avatar
          name="Nauman"
          position="Programer"
          email="nauanasforsn8@gmail.com"
          img={require('../assets/programer.jpeg')}
        />
        <Chat />
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgorund,
    padding: theme.sizes.base
  }
});

export default InfoScreen;
