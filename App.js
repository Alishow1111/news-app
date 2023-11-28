import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';


export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://newsdata.io/api/1/news?apikey=pub_33583e80fdf07a4f0e0b306793eba5782ca2e&q=gaza&language=en')
      .then((response) => {
          response.json()
          .then((json) => {
            setData(json);
            console.log(json);
            setLoading(false);
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
        style={styles.flatList}
        data={data.results}
        renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  flatList: {
    width: '80%', // Ensure the FlatList takes the full width
  },
  item: {
    marginBottom: 20,
  }
});

