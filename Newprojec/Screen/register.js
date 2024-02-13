import { View, Image, Text, TextInput, TouchableOpacity,} from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseauth,firestoredb } from './data'; 



export default function register({ navigation }) {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [studentnumber,setStudentnumber]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmpassword]=useState("")

  const handleSignUp = async () => {
    if (true && email !== "") {
      await createUserWithEmailAndPassword(firebaseauth, email, password).then(
        (userCred) => {
          console.log("User Id : ", userCred.user.uid);
          const data = {
            _id: userCred.user.uid,
            fullName: name,
            profilePic: avatar,
            providerData: userCred.user.providerData[0],
          };

          setDoc(doc(firestoredb, "users", userCred.user.uid), data).then(
            () => {
              navigation.navigate("LoginScreen");
            }
          );
        }
      );
    }
  };
  


  return (
    <View style={{
        flex:1
      }}>
        <LinearGradient
      colors={["#DEC4FC","#91C6FC"]}
      style={{
        width:"100%",
        height:"100%"
      }}
      >
        <View style={{
          justifyContent:'center',
          alignItems:'center',
          marginTop:60,
        }}>
        <Image source={require("../assets/image/logoregister.png")} />
        </View>
        <View style={{
          width:'100%',
          height:"20%",
        }}>
        </View>
        <View style={{
            width:'100%',
            height:250,
            justifyContent:"flex-start",
            alignItems: "center",
            bottom:160
        }}><Text style={{
            marginRight: "63%",
            bottom:10,
            fontSize: 20,
            color:"white"
        }}>Register
        </Text>
        <Text style={{
          marginRight:"63%",
          marginTop:8,
          color:"#808080"
        }}>ชื่อ-นามสกุล
        </Text>
          <View style={{
          backgroundColor:"white",
          width:"80%",
          height:"20%",
          borderRadius:7,
          flexDirection:"row",
          justifyContent:"flex-start",
        }}><AntDesign style={{
            marginTop:10,
            marginLeft:10,
            padding:5
        }} name="user" size={24} color="#CCCCCC" />
        <TextInput
        onChangeText={(text)=>setName(text)} 
        placeholderTextColor="#CCCCCC"
        placeholder="กรอกชื่อนามสกุล"
        >         
        </TextInput>
        </View>
          <Text style={{
          marginRight:"69%",
          marginTop:7,
          color:"#808080"
        }}>Email
        </Text>
        <View style={{
          backgroundColor:"white",
          width:"80%",
          height:"20%",
          borderRadius:7,
          flexDirection:"row",
          justifyContent:"flex-start",
        }}><Fontisto style={{
            marginTop:10,
            marginLeft:10,
            padding:5
        }} name="email" size={24} color="#CCCCCC" />
        <TextInput 
        onChangeText={(text)=>setEmail(text)} 
        placeholderTextColor="#CCCCCC"
        placeholder="กรอกอีเมล"
        >         
        </TextInput>
        </View>
          <Text style={{
          marginRight:"60%",
          marginTop:7,
          color:"#808080"
        }}>รหัสนักศึกษา
        </Text>
        <View style={{
          backgroundColor:"white",
          width:"80%",
          height:"20%",
          borderRadius:7,
          flexDirection:"row",
          justifyContent:"flex-start",
        }}><SimpleLineIcons style={{
            marginTop:10,
            marginLeft:10,
            padding:5
        }} name="graduation" size={24} color="#CCCCCC" />
        <TextInput 
        onChangeText={(text)=>setStudentnumber(text)} 
        placeholderTextColor="#CCCCCC"
        placeholder="กรอกรหัสนักศึกษา"
        >         
        </TextInput>
        </View>
          <Text style={{
          marginRight:"63%",
          marginTop:7,
          color:"#808080"
        }}>Password
        </Text>
        <View style={{
          backgroundColor:"white",
          width:"80%",
          height:"20%",
          borderRadius:7,
          flexDirection:"row",
          justifyContent:"flex-start",
        }}><AntDesign style={{
            marginTop:10,
            marginLeft:10,
            padding:5
        }} name="lock" size={24} color="#CCCCCC" />
        <TextInput 
        onChangeText={(text)=>setPassword(text)} 
        placeholderTextColor="#CCCCCC"
        placeholder="กรอก Password"
        secureTextEntry={true}
        >         
        </TextInput>
        </View>
          <Text style={{
          marginRight:"54%",
          marginTop:7,
          color:"#808080"
        }}>ยืนยัน Password
        </Text>
        <View style={{
          backgroundColor:"white",
          width:"80%",
          height:"20%",
          borderRadius:7,
          flexDirection:"row",
          justifyContent:"flex-start",
        }}><MaterialCommunityIcons style={{
            marginTop:10,
            marginLeft:10,
            padding:5
        }} name="lock-off-outline" size={24} color="#CCCCCC" />
        <TextInput 
        onChangeText={(text)=>setConfirmpassword(text)} 
        placeholderTextColor="#CCCCCC"
        placeholder="ยืนยัน Password"
        secureTextEntry={true}
        >
        </TextInput>
        </View>
          <TouchableOpacity 
          onPress={() => handleSignUp()}
          style={{
            width:"68%",
            height:"20%",
            backgroundColor:"#6A74CF",
            marginTop:"12%",
            marginLeft:"-1%",
            borderRadius:30
      }}>
        <Text style={{
          fontSize:18,
          color:"white",
          marginTop:10,
          marginLeft:"40%",
          
      }}>ยืนยัน</Text>

      </TouchableOpacity>
        </View>  
  
      </LinearGradient>
          
      </View>
  )
}