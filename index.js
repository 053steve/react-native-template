import { AppRegistry } from 'react-native';
import {Navigation} from 'react-native-navigation';
import App from './src/App';


Navigation.registerComponent('reactnativetemplate', () => App);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'reactnativetemplate',
    title: 'Welcome'
  }
});


