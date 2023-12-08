import { Avatar, Button, Card, Text } from 'react-native-paper';
import { View } from "react-native"

export default function ArticleCard({item}){
    return (
        <Card style={{marginBottom: 20, marginHorizontal: 20, padding: 20}}>
            <Card.Title title={item.title}/>
            <Card.Content>
            <Text style={{paddingBottom: 20}} variant="titleLarge">{item.title}</Text>
            <Text stylee={{paddingBottom: 20}}variant="bodyMedium">{item.description}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: item.image_url }} />
            <Card.Actions>
            <Button>Read More...</Button>
            </Card.Actions>
        </Card>
    )
}