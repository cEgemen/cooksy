
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appBorderRadius } from '../../consts/appStyleConst'

const SquareButton = ({onClick=() => {},children,wrapperStyle={}}) => {
  return (
    <Pressable style={[styles.wrapper,wrapperStyle]} onPress={onClick}>
      {children}
    </Pressable>
  )
}

export default SquareButton

const styles = StyleSheet.create({
    wrapper : {
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:appBorderRadius.md,
        overflow:"hidden",
        backgroundColor:"white"
    }
})