import { Avatar, Button, Card, Text } from 'react-native-paper';



export default function ArticleCard({item, navigation}){
    return (
        <Card style={{marginBottom: 20, marginHorizontal: 20}}>
            {item.image_url !== null ? <Card.Cover source={{ uri: item.image_url }} /> : null}
            <Card.Content>
            <Text style={{paddingBottom: 20, paddingTop: 20}} variant="titleLarge">{item.title}</Text>
            <Text stylee={{paddingBottom: 20}}variant="bodyMedium">{item.description}</Text>
            </Card.Content>
            <Card.Actions>
            <Button
            title="Read More..."
            onPress={() =>
                navigation.navigate('Article', {item: item})
            }
            >Read more...</Button>
            </Card.Actions>
        </Card>
    )
}