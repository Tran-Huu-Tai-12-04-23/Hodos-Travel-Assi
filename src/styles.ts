import {
  borderColor,
  btnPrimary,
  labelColor,
  whiteColor,
} from "@constants/Colors";
import { StyleSheet } from "react-native";

export const styleGlobal = StyleSheet.create({
  btnAccept: {
    width: 100,
    borderRadius: 10,
    backgroundColor: btnPrimary,
    padding: 10,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
  },
  btnCancel: {
    width: 100,
    borderRadius: 10,
    padding: 10,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    color: whiteColor,
    fontWeight: "800",
  },
  point: {
    padding: 8,
    borderRadius: 100,
    elevation: 10,
    backgroundColor: btnPrimary,
    shadowColor: "#00ff20",
    shadowOffset: { width: 20, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 110,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  textHeader: {
    fontSize: 32,
    fontWeight: "bold",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  center: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  shadow: {},
  shadowForce: {
    borderColor: "transparent",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  icon: { width: 30, height: 30 },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: borderColor,
    borderStyle: "solid",
  },
  border: { borderWidth: 1, borderColor: borderColor, borderStyle: "solid" },
  borderTop: {
    borderTopWidth: 1,
    borderColor: borderColor,
    borderStyle: "solid",
  },
  text: {
    color: "#1F2937",
    fontSize: 13,
  },
  container: {
    flex: 1,
  },
  label: {
    color: labelColor,
    fontSize: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "100%",
  },
});
