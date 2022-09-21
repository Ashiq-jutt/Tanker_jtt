//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox, Image } from 'react-native';
// import {enableLatestRenderer} from 'react-native-maps';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { Button, Card, FAB, IconButton, List } from 'react-native-paper';
const Map = (props) => {


    const [lat, setLat] = useState(0);
    const [latlng, setLatlng] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    const [long, setlong] = useState(0);
    const [s, setS] = useState(0);
    const chk = 2;


    useEffect(() => {
        console.log(111);
        Geolocation.getCurrentPosition(
            info => {
                const { coords } = info
                console.log(coords);
                setLat(coords.latitude)
                setlong(coords.longitude)
                // setS(coords.accuracy)
            },
            error => console.log(error),

        )
    }, [])
    // enableLatestRenderer();   
    return (
        <View style={styles.container}>

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                showsUserLocation={true}
                //    accuracy=
                region={latlng}
            >
                
                   
                        
                            <Marker
                                onPress={() => alert('ready for provide service')}
                                desciption="origion"
                                coordinate={{ latitude: latlng.latitude, longitude: latlng.longitude }}

                            >
                                <Icon name="tanker-truck" size={30} color="green" />
                            </Marker>
                            <Marker
                                onPress={() => alert('ready for provide service')}
                                desciption="Destination"
                                coordinate={{ latitude: latlng.latitude, longitude: latlng.longitude }}
                            >
                                <Icon name="tanker-truck" size={30} color="green" />
                            </Marker>
                            
                    
                        
                
                {
                    chk==2?
                    <Card>
                        <Card.Content>
                            <List.Item
                                title="$ 15.00"
                                description="total price of delivery"
                                left={()=>
                               <IconButton
                                icon='bike'
                                size={30}
                                />
                                }
                                right={()=>
                                <View>
                                    <Button>Cancel</Button>
                                    <Button mode='contained'>Confirm</Button>
                                </View>
                            }/>
                                
                        </Card.Content>
                    </Card>
                    :null
                }

            </MapView>
            {chk==1?
                
                     <FAB 
            onPress={()=>alert('ON Press Hogia')}
            style={{ position: 'absolute', right: 0, bottom: 0, margin: 60 }} icon="plus" 
            >
            
                </FAB>
                :null}
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default Map;
