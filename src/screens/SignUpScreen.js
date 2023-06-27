import {
    View, Text, Image, StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert, ToastAndroid, Keyboard
} from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'
import auth from '@react-native-firebase/auth';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const userSignup = async () => {
        if (!email || !password) {
            showToast("Please Enter Email and Password!")
        } else {
            try {
                const userCredential = await auth().createUserWithEmailAndPassword(email, password);
                console.log(userCredential.user)
            } catch (e) {
                if (e.code == "auth/email-already-in-use") {
                    showToast(e.message.replace('[auth/email-already-in-use] ', ''), 4)
                }
            }
        }
    }
    const showToast = (message, duration = 3) => {
        ToastAndroid.show(message, duration)
    };
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
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        mode="outlined"
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                    <Button mode="contained" textColor='white' onPress={() => {
                        Keyboard.dismiss();
                        userSignup();
                    }}>
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