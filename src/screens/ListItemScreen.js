import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput, Button, Card, Paragraph } from 'react-native-paper'

const ListItemScreen = () => {
    const myItems = [
        {
            name: "Dog",
            year: "2019",
            phone: "938485393",
            price: "4999",
            image: "https://images.unsplash.com/photo-1686890121543-10f053311219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            description: "I am selling my dog.",
        },
        {
            name: "IPhone",
            year: "2019",
            phone: "938485392",
            price: "4999",
            image: "https://images.unsplash.com/photo-1677563277026-17a254ea02f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            description: "I am selling my IPhone.",
        }
    ];
    const renderItem = (item) => {
        return <Card mode='elevated' style={style.card}>
            <Card.Title title={item.name} />
            <Card.Content>
                <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
                <Text variant="titleLarge">{"Phone : " + item.phone}</Text>
                <Text variant="bodyMedium">{"Price : INR " + item.price}</Text>
                <Text variant="bodyMedium">{"Year : " + item.year}</Text>
            </Card.Content>
            <Card.Actions>
                <Button>Cancel</Button>
                <Button textColor='white'>Call Seller</Button>
            </Card.Actions>
        </Card>
    }
    return (
        <View>

            <FlatList data={myItems}
                keyExtractor={(item) => item.phone}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}
const style = StyleSheet.create({
    card: {
        margin: 10,
        padding: 5,
    },

});
export default ListItemScreen