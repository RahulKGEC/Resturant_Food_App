import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native-gesture-handler";
import { Feather, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
export const CartContext = createContext(null)
import EditScreen from "@/app/standalone/EditScreen";
import { createContext } from "react";

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRouter()
  const drawerOpen = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginHorizontal: 15 }}>




          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, alignItems: "center", }}>


            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>

              <View
                style={{
                  height: 35,
                  width: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "#C9C9C9",
                  // flexDirection:"row"
                }}
              >


                <FontAwesome name="angle-left" size={26} onPress={drawerOpen} />

              </View>

              <Text style={{ fontSize: 18 }}>
                Personal Info
              </Text>
            </View>




            <TouchableOpacity onPress={() => route.push("/standalone/EditScreen")}>
              <Text style={{ fontSize: 18, color: "#FF7622", textDecorationLine: "underline" }}>
                Edit
              </Text>
            </TouchableOpacity>

          </View>

          <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginTop: 30, marginBottom: 14 }}>
            <View>
              <Image source={require('../../../assets/images/detail1.png')} style={{ width: 90, height: 90, borderRadius: 50 }} />

            </View>
            <View>
              <Text style={{ fontSize: 19, fontWeight: "800", marginBottom: 7 }}>
                Rahul Shaw
              </Text>
              <Text>
                I love my food
              </Text>
            </View>
          </View>



          <View style={[
            // styles.border,
            { width: "80%", backgroundColor: "#E0E0E0", paddingVertical: 25, borderRadius: 16, paddingHorizontal: 14, marginVertical: 25 }]}>  // start



            <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginHorizontal: 14 }}>
              <View>
                {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}

                <View
                  style={{
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#C9C9C9",
                    // flexDirection:"row"
                  }}
                >


                  <Feather name="user" size={26} onPress={drawerOpen} style={{ color: "#FF7622" }} />

                </View>

              </View>
              <View>
                <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                  USER NAME
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "500" }}>
                  Rahul Shaw
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginTop: 12, marginHorizontal: 14 }}>
              <View>
                {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                <View
                  style={{
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#C9C9C9",
                    // flexDirection:"row"
                  }}
                >


                  <Fontisto name="email" size={23} style={{ color: "#FF7622" }} />

                </View>
              </View>
              <View>
                <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                  EMAIL
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "500" }}>
                  shawrahula@gmail.com
                </Text>
              </View>
            </View>


            <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginTop: 12, marginHorizontal: 14 }}>
              <View>
                {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}

                <View
                  style={{
                    height: 35,
                    width: 35,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    backgroundColor: "#C9C9C9",
                    // flexDirection:"row"
                  }}
                >


                  <Feather name="phone" size={23} onPress={drawerOpen} style={{ color: "#FF7622" }} />

                </View>
              </View>
              <View>
                <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                  PHONE
                </Text>
                <Text style={{ fontSize: 13, fontWeight: "500" }}>
                  8420176164
                </Text>
              </View>
            </View>

          </View> // end










        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: "red"
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
