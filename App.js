import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import AppNavigator from 'App/Containers/Navigation/AppNavigator';
const { store, persistor } = createStore()

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      // <View style={styles.container}>
      //   {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      //   <AppNavigator />
      // </View>
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});




// import React, { Component } from 'react'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/lib/integration/react'
// import createStore from 'App/Stores'
// import AppNavigator from 'App/Containers/Navigation/AppNavigator';

// const { store, persistor } = createStore()

// export default class App extends Component {
//   render() {
//     return (
//       /**
//        * @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store
//        */
//       <Provider store={store}>
//         {/**
//          * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
//          * and saved to redux.
//          * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
//          * for example `loading={<SplashScreen />}`.
//          * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
//          */}
//         <PersistGate loading={null} persistor={persistor}>
//           <AppNavigator />
//         </PersistGate>
//       </Provider>
//     )
//   }
// }
