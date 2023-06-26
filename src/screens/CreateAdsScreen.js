import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native-paper'

const CreateAdsScreen = () => {
    const [name, setName] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [year, setYear] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [phone, setPhone] = React.useState("");
    return (
        <View style={style.container}>
            <Text style={style.text}>Create Ads</Text>
            <TextInput
                label="Ad Title"
                value={name}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Description"
                value={desc}
                mode="outlined"
                numberOfLines={3}
                multiline={true}
                onChangeText={text => setDesc(text)}
            />
            <TextInput
                label="Year Of Purchase"
                value={year}
                mode="outlined"
                keyboardType='numeric'
                onChangeText={text => setYear(text)}
            />
            <TextInput
                label="Price"
                value={price}
                mode="outlined"
                keyboardType='numeric'
                onChangeText={text => setPrice(text)}
            />
            <TextInput
                label="Phone Number"
                value={phone}
                mode="outlined"
                keyboardType='phone-pad'
                onChangeText={text => setPhone(text)}
            />
            <Button icon="camera" mode="contained" textColor='white' onPress={() => console.log('Pressed')}>
                Upload Image
            </Button>
            <Button mode="contained" textColor='white' onPress={() => console.log('Pressed')}>
                Post
            </Button>
        </View>
    )
}
const style = StyleSheet.create({
    text: {
        fontSize: 22,
        textAlign: "center"
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: "space-evenly"
    },

});
export default CreateAdsScreen