import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Menubar() {
  return (
      <View style={styles.popupMenu}>
        <TouchableOpacity>
          <AntDesign name="home" style={styles.icon1} size={30} color="black" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="rocket1"
            style={styles.icon2}
            size={30}
            color="black"
          />
          <Text style={styles.menuText}>App's</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="staro"
            style={styles.icon3}
            size={30}
            color="black"
          />
          <Text style={styles.menuText}>Your Mark's</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="user" style={styles.icon4} size={30} color="black" />
          <Text style={styles.menuText}>Account</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 0,
    backgroundColor: "#111827",
  },
  popupMenu: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    height: 70,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  icon1: {
    paddingLeft: 2,
  },
  icon2: {
    paddingLeft: 3,
  },
  icon3: {
    paddingLeft: 9,
  },
  icon4: {
    paddingLeft: 3,
  },
  menuText: {
    fontSize: 12,
  },
});
