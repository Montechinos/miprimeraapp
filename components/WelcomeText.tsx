import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const WelcomeText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a mi App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 100,
    maxWidth: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },

  text: {
    color: 'black',
    fontSize: 24,
  },
})

export default WelcomeText