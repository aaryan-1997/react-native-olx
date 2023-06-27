import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { Button, } from 'react-native-paper'

const AccountScreen = () => {
    return (
        <View style={style.container}>

            <Text style={style.text}>{auth().currentUser.email}</Text>
            <Button mode="contained" textColor='white' onPress={() => {
                auth().signOut();
            }}>
                Logout
            </Button>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
    },
    text: {
        padding: 10,
    },
});
export default AccountScreen