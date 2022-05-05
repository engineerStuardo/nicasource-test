import { Navigation } from './src/navigation';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style='dark' />
    </Provider>
  );
};

export default App;
