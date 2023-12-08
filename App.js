import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import { PaperProvider } from 'react-native-paper';



// function NewsFeed({articles}){
//   return (
//     <FlatList
//         style={styles.flatList}
//         data={articles.results}
//         renderItem={({item}) =>
//         <View>
//           <Image source={{uri:item.image_url}} />
//           {/* <Text style={styles.item}>{item.title}</Text> */}
//         </View>}
//     />
//   )
// }

// export default function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('https://newsdata.io/api/1/news?apikey=pub_33583e80fdf07a4f0e0b306793eba5782ca2e&q=gaza&language=en')
//       .then((response) => {
//           response.json()
//           .then((json) => {
//             setData(json);
//             console.log(json);
//             setLoading(false);
//           })
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }, [])
  
//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         // <NewsFeed articles={data} />
//         <Image style={styles.tinyLogo} source={{uri:"https://truthout.org/app/uploads/2023/11/2023_1129-joe-biden-1200x900.jpg"}} />
//       )}
//     </View>
//   );
// }

export default function App(){
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Header />
        <ArticleContainer />
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  // flatList: {
  //   width: '80%', // Ensure the FlatList takes the full width
  // },
  // item: {
  //   marginBottom: 20,
  // }
});

