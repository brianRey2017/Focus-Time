import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { FONT_SIZES, SPACING_SIZES } from "../../constants/sizes";

// avoid recalculation on each refresh
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING_SIZES.md
  },
  input: {
    color: COLORS.DARK_GRAY,
    flex: 1,
    marginRight: SPACING_SIZES.md
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: SPACING_SIZES.md
  },
  title: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.lg,
    fontWeight: "bold"
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: "center",
    padding: SPACING_SIZES.md
  }
});
