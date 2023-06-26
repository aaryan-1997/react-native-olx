import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, } from 'react-native-paper'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <KeyboardAvoidingView behavior='position'>
            <View>
                <View style={style.logoBox}>
                    <Image style={{ width: 200, height: 200 }} source={require('../assets/logo.png')} />
                    <Text style={style.text} >Please Login To Continue</Text>
                </View>
                <View style={style.textBox}>
                    <TextInput
                        label="Email"
                        value={email}
                        mode="outlined"
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        mode="outlined"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                    <Button mode="contained" textColor='white' onPress={() => console.log('Pressed')}>
                        Login
                    </Button>
                    <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                        <Text style={style.signupText}>Don't have account?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    logoBox: {
        alignItems: 'center',
    },
    textBox: {
        paddingHorizontal: 20,
        height: "50%",
        justifyContent: "space-evenly"
    },
    text: {
        fontSize: 22,
    },
    signupText: {
        fontSize: 16,
        textAlign: "center",
    }
});

export default LoginScreen