import { SafeAreaView, ViewProps } from 'react-native';

export type Props = JSX.IntrinsicAttributes &
  JSX.IntrinsicClassAttributes<SafeAreaView> &
  Readonly<ViewProps>;
