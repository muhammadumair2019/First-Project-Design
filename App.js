import React, { Component } from 'react';
import react from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  
} from 'react-native';


export default class App extends Component
{
  render()
  {
    return (
    <View style={{flex:1,backgroundColor: 'white'}}>

        <View style={{flex:17,backgroundColor: 'white'}}>
        <Image source={require('./android/app/src/main/assets/images/foodpanda_cover.png')}
        style={{width: 412,
                height: 190,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20
            }}
        />
        </View>

        <View style={{flex:20,backgroundColor: 'white'}}>

          <View style={{flex: 0.65,flexDirection:'row',backgroundColor: 'white'}}>

          <Image source={require('./android/app/src/main/assets/images/user_icon.png')}
        style={{width: 25,
          height: 25,
          marginTop: 35,
          marginLeft: 30
         
        }}
        />

        <TextInput

        style={{height: 40,
          width: 300,
          marginLeft: 5,
          marginTop: 25,
          borderBottomWidth: 0.5,
          borderBottomColor: 'grey',
          padding: 10,}}
        
          placeholder="Username"
        
      />
        </View>

        <View style={{flex: 0.9,flexDirection:'row',backgroundColor: 'white'}}>

        <Image source={require('./android/app/src/main/assets/images/email_icon.png')}
        style={{width: 25,
          height: 25,
          marginTop: 35,
          marginLeft: 30
         
        }}
        />
          <TextInput

          style={{height: 40,
            width: 300,
            marginLeft: 6,
            marginTop: 25,
            borderBottomWidth: 0.5,
            borderBottomColor: 'grey',
            padding: 10,}}

            placeholder="Email"

          />
        </View>

        <View style={{flex: 0.7,flexDirection:'row',backgroundColor: 'white'}}>

        <Image source={require('./android/app/src/main/assets/images/pass_icon.png')}
        style={{width: 25,
          height: 25,
          marginTop: 10,
          marginLeft: 30
         
        }}
        />

        <TextInput         

        style={{height: 40,
          width: 300,
          marginLeft: 6,
          marginTop: 0,
          borderBottomWidth: 0.5,
          borderBottomColor: 'grey',
          padding: 10,}}
          
          placeholder="Password"
          secureTextEntry={true}
        
      />
      </View>

          
         
        </View>

        <View style = {{flex:8 ,alignItems: 'center',backgroundColor: 'white'}}>
          <TouchableOpacity 
          style={{
            backgroundColor: '#D50D62',
            width: 300,
            height: 50,
            alignItems: 'center',
            padding: 15,
            borderRadius: 5,
            marginTop: 20,
            marginLeft: 15
            
            

          }}
          
        >
          <Text style={{color:'#ffffff',fontWeight: 'bold'}}>REGISTER</Text>
        </TouchableOpacity>
          </View>

        <View style={{flex:5,flexDirection:'row',backgroundColor: 'white'}}>
        <TouchableOpacity style={{
            backgroundColor: '#FFD3D4',
            width: 90,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            borderRadius: 5,
            marginLeft: 63
            

          }}>
          <Image source = {require('./android/app/src/main/assets/images/fbb.jpg')}
            style={{width: 35,
              height: 30
              
              
              
          }}
          />
          
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor: '#FFD3D4',
            width: 90,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            borderRadius: 5,
            marginLeft: 14
            

          }}>
          <Image source = {require('./android/app/src/main/assets/images/twitter2.jpg')}
            style={{width: 30,
              height: 30,
              
          }}
          />
          
        </TouchableOpacity>

        <TouchableOpacity style={{
            backgroundColor: '#FFD3D4',
            width: 90,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
            borderRadius: 5,
            marginLeft: 14
            

          }}>
          <Image source = {require('./android/app/src/main/assets/images/mail.png')}
            style={{width: 40,
              height: 30,
              
              
              
          }}
          />
          
        </TouchableOpacity>
        
        </View>

        <View style={{flex:8,backgroundColor: 'white',alignItems: 'center'}}>
         <Text style={{color:'#D50D62',marginTop: 25}}>Already have an account? <Text style={{fontWeight:'bold',color:'#D50D62'}}>Login</Text></Text>
         
        </View>

      </View>
    )
     
    }

  


}





