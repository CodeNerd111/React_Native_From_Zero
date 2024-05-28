import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'




//<Heading>Heading</Heading>
export default function AppText({children}) {
  return (
   <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:Platform.OS==="android"?"Roboto":"Avenir"
    }
})