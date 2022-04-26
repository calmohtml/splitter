import { StyleSheet } from "react-native";

/* strongCyan: #26c0ab; */
/* veryDarkCyan: #00494d; */
/* grayishCyan: #7f9c9f; */
/* lightGrayishCyan: #c5e4e7; */
/* veryLightGrayishCyan: #f4fafa; */
/* white: #ffffff; */

export const styles = StyleSheet.create({
  background: {
    flex: 2,
    backgroundColor: "#26c0ab",
  },
  title: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  font: {
    fontFamily: "SpaceMono-Bold",
    color: "#00494d",
  },
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  resultContainer: {
    backgroundColor: "#00494d",
  },
});
