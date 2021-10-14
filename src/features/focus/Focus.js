import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/common/RoundedButton/RoundedButton";
import { styles } from "./Focus.styles";

export const Focus = ({
  addSubject = (text) => alert("Hi user!", `Soon yo'll be able of focusing on ${text}`),
  lastSubject = "",
}) => {
  const [inputText, setInputText] = useState(lastSubject);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            value={inputText}
            onSubmitEditing={({ nativeEvent: { text } }) => addSubject(text)}
            onChangeText={(text) => setInputText(text)}
            style={styles.input}
          />
          <RoundedButton
            onPress={() => addSubject(inputText)}
            size={50}
            title="+"
          />
        </View>
      </View>
    </View>
  );
};
