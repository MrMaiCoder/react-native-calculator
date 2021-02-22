import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

import {
  HomeScreen,
  LoginScreen,
  Dashboard,
  RegisterScreen,
} from './screens';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Router = createStackNavigator(
  {
    LoginScreen,
    HomeScreen,
    Dashboard,
    RegisterScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
