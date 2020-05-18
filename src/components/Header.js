import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';

const Header = () => {
  return(
    <View style={headerContainer}>
      <Text style={header}>
        Криптовалюты
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 55,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
  }
})

const {headerContainer, header} = styles;

export default Header;