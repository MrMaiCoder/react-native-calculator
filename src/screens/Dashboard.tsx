import React, { memo } from 'react';
import Button from '../components/Button';
import { Navigation } from '../types';
import Background from '../components/Background';
import { StyleSheet, Text, View, Alert, SafeAreaView } from 'react-native';
import Calculator from '../components/calculator_components/Calculator'
import firebase from 'firebase/app';
import 'firebase/auth';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const _onLogoutPressed = () => {

    firebase.auth()
      .signOut()
      .then(() => navigation.navigate('HomeScreen'))
      .catch((err) => Alert.alert(err.message));
  };

  return (
    <Background>
      <Calculator/>
      <Button mode="outlined" onPress={_onLogoutPressed}>
        Logout
      </Button>
    </Background>
  )
};

export default memo(Dashboard);
