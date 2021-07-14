import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
   const tron = Reactotron.configure({host:'192.168.10.122'})
      .useReactNative({
         networking: { ignoreUrls: /symbolicate|192.168.10.122/ },
      })
      .setAsyncStorageHandler(AsyncStorage)
      .connect();

   tron.clear();

   console.tron = tron;
}
