import { View, Text, FlatList } from "react-native"
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleContainer(){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://newsdata.io/api/1/news?apikey=pub_33583e80fdf07a4f0e0b306793eba5782ca2e&q=gaza&language=en')
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
           
    }, [])


    return (
        <View>
            <FlatList
                data={articles.results}
                renderItem={({item}) =>
                <View>
                    <ArticleCard item={item} />
                </View>}
           />
        </View>
    )
}