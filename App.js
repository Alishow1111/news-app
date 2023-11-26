import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://nc-news-2.onrender.com/api/articles')
      .then((response) => {
          response.json()
          .then((json) => {
            setData(json);
            console.log(json);
          })
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])
  
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <Text>Done!</Text>
        // <FlatList
        // data={data}
        // renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}/>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
   padding: 10,
    fontSize: 18,
    height: 44,
  },
});
