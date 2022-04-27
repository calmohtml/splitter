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
    backgroundColor: "#ffffff",
    paddingHorizontal: 25,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  resultContainer: {
    backgroundColor: "#00494d",
    padding: 20,
    borderRadius: 10,
  },
  resultButton: {
    alignItems: "center",
  },
});
