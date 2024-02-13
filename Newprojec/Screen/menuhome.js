import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function menuhome({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={["#DEC4FC", "#91C6FC"]}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "13%",
            backgroundColor: "#583C81",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "50%",
              marginTop: "10%",
              marginLeft: "5%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              Tawan Thanyaphon
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 15,
              }}
            >
              056350405065-6
            </Text>
            <View
              style={{
                marginLeft: "85%",
                bottom: "10%",
                position: "absolute",
              }}
            >
              <TouchableOpacity 
              onPress={() => navigation.navigate("profile")}
              style={{
                
              }}>
              <Image source={require("../assets/image/Avatar.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: "#677185",
            fontSize: 25,
            marginLeft: "10%",
            marginTop: "3%",
          }}
        >
          เมนู
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("repair")}
          style={{
            width: "40%",
            height: "20%",
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 35,
          }}
        >
          <View
            style={{
              marginTop: "15%",
              marginLeft: "35%",
            }}
          >
            <FontAwesome name="wrench" size={60} color="#677185" />
          </View>
          <Text
            style={{
              fontSize: 15,
              marginTop: "20%",
              marginLeft: "35%",
            }}
          >
            แจ้งซ่อม
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "40%",
            height: "20%",
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            bottom: "20%",
            marginLeft: "52%",
          }}
        >
          <View
            style={{
              marginTop: "20%",
              marginLeft: "35%",
            }}
          >
            <Entypo name="text-document-inverted" size={50} color="#677185" />
          </View>
          <Text
            style={{
              fontSize: 15,
              marginTop: "20%",
              marginLeft: "30%",
            }}
          >
            ติดตามสถานะ
          </Text>
        </TouchableOpacity>
        
      </LinearGradient>
    </View>
  );
}
