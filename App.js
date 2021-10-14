import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import { styles } from "./App.styles";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? <Text>"I have a subject"</Text> : <Focus />}
    </View>
  );
}

// avoid recalculation on each refresh

