import Constants from "expo-constants";
import { COLORS } from "./src/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: COLORS.PURPLE,
    alignItems: "center",
  },
});
