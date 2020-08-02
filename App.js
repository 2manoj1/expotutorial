import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight, TouchableOpacity, Image, Switch } from 'react-native';

function CustomButton({ title, onHandlePress = () => null }) {
  return (
    <TouchableOpacity onPress={onHandlePress}>
      <Text style={{ color: 'red', backgroundColor: 'blue' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [isCounterStart, setIsCounterStart] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isCounterStart) {
      interval = setInterval(() => {
        setCount(count => count + 1)
      }, 1000);
    }
    else {

      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isCounterStart]);

  const startCounter = () => {
    setIsCounterStart(true);
  }
  const stopCounter = () => {
    setIsCounterStart(false);
    //setCount(0);
  }

  const toggleSwitch = () => {
    setIsEnabled(isEnabled => !isEnabled);
  }

  const imgLink = "https://wallpapercave.com/wp/wp2646303.jpg";

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 200, height: 100 }}
        source={{ uri: imgLink }}
      />
      <Text>{count}</Text>
      <View style={styles.manoj}>
        <Button style={{ backgroundColor: 'red' }} color="green" onPress={startCounter} title="Start" />
        <Button color="red" onPress={stopCounter} title="Stop" />
        <CustomButton title="Youtube" onHandlePress={startCounter} />
      </View>
      <Text style={{ textTransform: 'uppercase' }} onLongPress={() => alert("Long function called")}>
        hello youtube hello youtube hello youtube hello youtube hello youtube hello youtube hello youtube hello youtube hello youtube hello youtube hello youtube hello youtube
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  manoj: {
    flexDirection: 'row'
  }
});
