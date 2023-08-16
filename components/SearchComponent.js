import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchTab = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <View style={{flexDirection: 'row'}}>
        <Ionicons name="search-outline" size={24} color="black" />
      <TextInput
        style={styles.searchtext}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={text => {
          setSearchQuery(text);
          handleSearch(text);
        }}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    searchtext: {
        marginLeft: 10
    }
})

export default SearchTab;
