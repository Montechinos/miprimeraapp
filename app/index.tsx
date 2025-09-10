import { StyleSheet,View, Text, ImageBackground } from 'react-native'
import React from 'react'
import WelcomeText from '@/components/WelcomeText'

const index = () => {
  return (
    <ImageBackground
      source={require('@/IMG/image copy.png')} // Asegúrate de que la ruta sea correcta
      style={styles.background}
      resizeMode="cover"
    >
    <View style={styles.container}>
      <WelcomeText></WelcomeText>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    fontSize: 24,
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default index