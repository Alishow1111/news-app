import { View, Text, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ArticlePage({navigation, route}){
    return (
        <View style={styles.container}>
            <Text>{route.params.item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
})