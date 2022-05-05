import { Navigation } from './src/navigation';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <>
      <Navigation />
      <StatusBar style='dark' />
    </>
  );
};

export default App;
