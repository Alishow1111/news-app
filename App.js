import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import { PaperProvider } from 'react-native-paper';
import SearchForm from './components/SearchForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticlePage from './components/ArticlePage';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="News Feed"
            component={ArticleContainer}
          />
          <Stack.Screen name="Article" component={ArticlePage} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  )
}


