import React, { memo } from 'react';
import Button from '../components/Button';
import { Navigation } from '../types';
import Background from '../components/Background';
import { StyleSheet, Text, View, Alert, SafeAreaView } from 'react-native';
import { Calculator } from 'react-native-calculator';
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
      <SafeAreaView style={{ flex: 1, flexDirection: 'row' }}>
        <Calculator style={{ flex: 1, flexDirection: 'row' }} />
      </SafeAreaView>
      <Button mode="outlined" onPress={_onLogoutPressed}>
        Logout
      </Button>
    </Background>
  )
};

export default memo(Dashboard);
