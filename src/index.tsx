import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

import {
  HomeScreen,
  LoginScreen,
  Dashboard,
} from './screens';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Router = createStackNavigator(
  {
    LoginScreen,
    Dashboard,
    RegisterScreen,
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
