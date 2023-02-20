import { View, Text } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated';

export default function RenderProfile() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-evenly',

        }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: "400" }}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Name</Text> : Mustafain Raza</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: "400" }}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Email</Text> : mustafain656@gmail.com</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: "400" }}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Phone No</Text> : +923208251389</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: "400" }}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>CNIC</Text> : 4210186562437</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: "400" }}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Address</Text> : R-537 Block 20 F.B Area Ancholi, Karachi</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: "400" }}><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total Campaigns</Text> : 23</Text>
        </View>
    );
}