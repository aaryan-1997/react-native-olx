import { View, Text, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <KeyboardAvoidingView behavior='position'>
            <View>
                <View style={style.logoBox}>
                    <Image style={{ width: 200, height: 200 }} source={require('../assets/logo.png')} />
                    <Text style={style.text} >Please Sign-Up</Text>
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
                        Signup
                    </Button>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={style.loginText}>Already have account?</Text>
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
    loginText: {
        fontSize: 16,
        textAlign: "center",
    }
});

export default SignupScreen