import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Modal, ScrollView} from 'react-native'
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';



export default function profile({ navigation }) {
  const[ modal,setModal ]=useState( false )

  const gomodal =()=>{
    setModal( true )
    
  }
  const openModal =()=>{
    console.log("openModal",openModal)
    return(
     <>
      <View>
      <Modal 
      animationType="fade"
      transparent={ true }
      visible={modal}

      ><View onPress={( )=>setModal( false )}
      style={{
        flex:1,
        // backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center"
      }}
      >
        <ScrollView>
        <View disabled={false} style={{
          width:380,
          height:900,
          backgroundColor:"white",
          borderRadius:20
        }}>
          <View style={{
            marginTop:10,
            marginLeft:330,
            padding:10
          }}><TouchableOpacity 
          onPress={() => navigation.navigate("menuhome")}>
            <Feather name="x" size={24} color="#0AAFC1" />
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent:"space-between",
            flexDirection:"row",
            paddingHorizontal:25,
            
          }}>
            
          <Text style={{

          }}>คอมพิวเตอร์

          </Text>
          <Text style={{
            color:"#20A6F2"
          }}
          >รายการที่ยังไม่เสร็จ
          </Text>
          </View>
          <View style={{
          width:"85%",
          backgroundColor:"white",
          marginLeft:"8%",
          marginTop:"5%",
          borderRadius:20
        }}>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            ข้อมูล
          </Text>
          <Text style={{
            marginTop:15,
            marginLeft:20
          }}>
            คณะ
          </Text>
          <View>
          <TextInput 
           placeholder="กรุณากรอกคณะ"
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          </View>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            ชื่อ-นามสกุล
          </Text>
          <View>
          <TextInput 
           placeholder="กรุณากรอกชื่อ-นามสกุล"
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          </View>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            หมายเลขบัตรประจำตัวประชาชน/รหัสนักศึกษา
          </Text>
          <View>
          <TextInput 
          placeholder="กรุณากรอกหมายเลข"
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          </View>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            เบอร์โทรศัพท์
          </Text>
          <View>
          <TextInput 
           placeholder="กรุณากรอกคณะ"
           keyboardType="phone-pad"
           maxLength={10}
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          </View>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            E-mail
          </Text>
          <View>
          <TextInput 
           placeholder="กรุณากรอกอีเมล"
           autoComplete="Email"
         
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          </View>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            วันที่สะดวก
          </Text>
          <View>
          <TextInput 
           placeholder="วว/ดด/ปป"
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          </View>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            ช่วงเวลา
          </Text>
          <View>
          <TextInput
           
          placeholder="เวลา"
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          </View>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            ระบุห้องเรียน
          </Text>
          <View>
          <TextInput 
           placeholder="ระบุห้องเรียน"
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          </View>
          <Text style={{
            marginTop:20,
            marginLeft:20
          }}>
            รายละเอียดเพิ่มเติม
          </Text>
          <TextInput 
          placeholder="รายละเอียดเพิ่มเติม"
          style={{
            borderBottomWidth:1,
            padding:5,
            borderColor:"#CCCCCC",
            width:300,
            marginLeft:20,
          }}></TextInput>
          <View style={{
            alignItems:"center",
            justifyContent:"center",
            width:130,
            height:35,
            backgroundColor:"#00BF9D",
            marginLeft:100,
            marginTop:20,
            borderRadius:10
          }}>
            <TouchableOpacity style={{
              width:100,
              marginLeft:65
            }}><Text
            style={{
              color:"white"
            }}>บันทึก</Text>

            </TouchableOpacity>
          </View>
          </View> 
        </View>
          </ScrollView>
      </View>

      </Modal>

          
      </View>
      </>
    )
  }
  return (
    <View style={{
      flex:1
    }}>
      {openModal ()}
      <LinearGradient
      colors={["#DEC4FC","#91C6FC"]}
      style={{
        width:"100%",
        height:"100%"
      }}
      >
        <View
          style={{
            width: "100%",
            height: "13%",
            backgroundColor: "#583C81",
          }}
        >
        <View style={{
          alignItems:"center",
          justifyContent:"space-between",
          flexDirection:"row",
          marginTop:60,
          paddingHorizontal:20
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("menuhome")}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{
            fontSize: 20,
            color:"white"
            
        }}>โปร์ไฟล์
        </Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate("login")}
          >
          <Ionicons name="log-out-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        </View>
        <View style={{
          flex:2,
          
        }}>
          <View style={{
            
            width:420,
            height:200,
            alignItems:"center",
            marginTop:40
          }}>
          <Image style={{
            width:70,
            height:70,
            resizeMode:"contain"
          }} source={require("../assets/image/Avatar.png")}/>
          <Text style={{
            fontSize: 20,
            color:"white",
            lineHeight:70
        }}>Tawan Thanyaphon
        </Text>
        <Text style={{
            fontSize: 15,
            color:"white",
            bottom:10
        }}>เจ้าของโครงการ
        </Text>
        <View
          style={{
            width: "100%",
            height: "25%",
            backgroundColor: "#F2F2F2",
            marginTop:10,
            justifyContent:"center"
            
          }}
        >
          <Text style={{
            marginLeft:20
          }}>รายการ

          </Text>
        
          </View>
        </View>
          <View style={{
            width:415,
            height:70,
            backgroundColor:"white",
            marginTop:20
          }}
          >
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              paddingHorizontal:20,
              marginTop:10
            }}>
              <Text style={{

            }}>คอมพิวเตอร์

            </Text>
            <TouchableOpacity
            onPress={()=>gomodal()}
            >
            <FontAwesome name="edit" size={20} color="yellow" /></TouchableOpacity>
            </View>
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              paddingHorizontal:20,
              marginTop:5

            }}>
            <Text style={{
              
            }}>วันที่เริ่ม

            </Text>
            <Text style={{
              color:"#00BF9D",
              marginRight:220
              
            }}>12/02/2023
              
            </Text>
            <TouchableOpacity 
            onPress={()=>gomodal()}
            >
            <AntDesign name="delete" size={20} color="red" /></TouchableOpacity>
            </View>



          </View>

          <View style={{
            width:415,
            height:70,
            backgroundColor:"white",
          }}
          >
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              paddingHorizontal:20,
              marginTop:10
            }}>
              <Text style={{

            }}>คีย์บอร์ด

            </Text>
            <TouchableOpacity 
            onPress={()=>gomodal()}
            >
            <FontAwesome name="edit" size={20} color="yellow" /></TouchableOpacity>
            </View>
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              paddingHorizontal:20,
              marginTop:5

            }}>
            <Text style={{
              
            }}>วันที่เริ่ม

            </Text>
            <Text style={{
              color:"#00BF9D",
              marginRight:220
              
            }}>12/02/2023
              
            </Text>
            <AntDesign name="delete" size={20} color="red" />
            </View>



          </View>

          <View style={{
            width:415,
            height:70,
            backgroundColor:"white",
          }}
          >
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              paddingHorizontal:20,
              marginTop:10
            }}>
              <Text style={{

            }}>เมาส์

            </Text>
            <TouchableOpacity
             onPress={()=>gomodal()}
             
            >
            <FontAwesome name="edit" size={20} color="yellow" />
            </TouchableOpacity>
            </View>
            <View style={{
              flexDirection:"row",
              justifyContent:"space-between",
              paddingHorizontal:20,
              marginTop:5

            }}>
            <Text style={{
              
            }}>วันที่เริ่ม

            </Text>
            <Text style={{
              color:"#00BF9D",
              marginRight:220
              
            }}>12/02/2023
              
            </Text>
            <AntDesign name="delete" size={20} color="red" />
            </View>



          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

