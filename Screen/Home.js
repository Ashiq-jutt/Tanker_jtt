//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
// import Icon2 from 'react-native-vector-icons/dist/FontAwesome'
import Checkbo from 'react-native-vector-icons/dist/Fontisto'
// import {CheckBox} from 'react-native-elements';

// const icon = ;
// create a component
const Home = (props) => {
    const [check, setcheck] = useState('');
    const [check1, setcheck1] = useState('');
    global.check=check;
    global.check1=check1;
    return (
        <View style={styles.container}>
        
            <View style={{flexDirection:'row',justifyContent:'space-between',width:250,marginTop:30}}>
            <View>
            {check=='active'?<Checkbo name="checkbox-active" size={30} color="white" onPress={()=>setcheck('passive')}/>
            :<Checkbo name="checkbox-passive" size={30} color="white"  onPress={()=>setcheck('active')}/>} 
            <Text style={{color:'white'}}>for English</Text>
            </View>
            <View>
            {check1=='active'?<Checkbo name="checkbox-active" size={30} color="white" onPress={()=>setcheck1('passive')}/>
            :<Checkbo name="checkbox-passive" size={30} color="white"  onPress={()=>setcheck1('active')}/>} 
            <Text style={{color:'white'}}>for Urdu</Text>
           </View>
            </View>
             {/* {check?:null}   */}
            
            {/* <Icon2 name={'fingerprint'} size={30} color='yellow' /> */}
            <TouchableOpacity 
              onPress={()=>props.navigation.navigate('Map')}
            
            style={{justifyContent:"space-around",backgroundColor:'red',marginTop:'22%',width:'80%',height:'15%',}}>
                <Text style={{textAlign:'center',color:'white',fontSize:24}}>Request a Tanker</Text>
            <Text style={{textAlign:'center',color:'white',fontSize:16}}>Add Information to apply for a tanker</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('RespondComplain')}
            style={{backgroundColor:'red',marginTop:'15%',width:'80%',height:'15%',justifyContent:'space-around'}}>
                <Text style={{textAlign:'center',color:'white',fontSize:24}}>Request Complain</Text>
            <Text style={{textAlign:'center',color:'white',fontSize:16}}>Any query related to this sservice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'red',marginTop:'15%',width:'80%',height:'15%',justifyContent:'space-around'}}>
                <Text style={{textAlign:'center',color:'white',fontSize:24}}>Register as a Consumer</Text>
                <Text style={{textAlign:'center',color:'white',fontSize:16}}>Add consumer profile kinaly register to be able to use this application</Text>
            {/* <Text style={{textAlign:'center',color:'white',fontSize:16}}></Text> */}
            </TouchableOpacity>
            {/* <icon/> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default Home;
