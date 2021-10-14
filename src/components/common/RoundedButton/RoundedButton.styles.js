import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants/colors";

export const generateStyles = (size) =>
  StyleSheet.create({
    radius: {
      alignItems: "center",
      borderColor: COLORS.WHITE,
      borderRadius: size / 2,
      borderWidth: 2,
      height: size,
      justifyContent: "center",
      width: size,
    },
    text: {
      color: COLORS.WHITE,
      fontSize: size / 3,
    },
  });