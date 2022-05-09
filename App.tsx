import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { Navigation } from '@navigation';
import store from '@reduxStore';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style='dark' />
    </Provider>
  );
};

export default App;
