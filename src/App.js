import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';

// PROGRESS: Just installed libraries, going to set up for the stack and redux states

export default function App() {
  const {height} = useWindowDimensions();
  const [action, setAction] = useState('Doing nothing');

  function handlePress() {
    setAction('I am Reading Now!');
  }

  return (
    <View style={[styles.container, {height}, StyleSheet.absoluteFill]}>
      <Text>Activity right now: {action}</Text>
      <View style={styles.br} />
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
            borderRadius: 30,
          },
          styles.btn,
        ]}
        onPress={handlePress}>
        <Text style={styles.btnText}>
          {action !== 'Doing nothing' ? 'Done Reading' : 'Reading Now'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  br: {
    height: 12,
  },
  btn: {
    backgroundColor: '#222',
    padding: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
});
