import { View, Text, FlatList, StyleSheet } from "react-native"
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { ActivityIndicator, Colors } from 'react-native-paper';
import SearchForm from './SearchForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function ArticleContainer({navigation}){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://newsdata.io/api/1/news?apikey=pub_33583e80fdf07a4f0e0b306793eba5782ca2e&q=${search}&language=en`)
        .then((response) => {
            response.json()
            .then((json) => {
                setArticles(json);
                console.log(json);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            }) 
        })
           
    }, [search])

    if (loading){
        return <ActivityIndicator animating={true} />
    }


    return (
        <>
        <View style={styles.search_container}>
            <SearchForm style={styles.search} setSearch={setSearch}/>
        </View>
        <View style={styles.container}>
            <FlatList
                data={articles.results}
                renderItem={({item}) =>
                <View>
                    <ArticleCard item={item} navigation={navigation} />
                </View>}
           />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    search_container: {
      marginTop: 50,
      paddingHorizontal: 20,
      paddingTop: 5,
    },
    search: {
      alignItems: 'center',
    }, 
});