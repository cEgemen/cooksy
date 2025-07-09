import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SquareButton from './SquareButton'

const SquareIconButton = ({icon,onPress=() => {},iconStyle={},iconWrapperStyle={}}) => {
  return (
    <SquareButton onClick={onPress} wrapperStyle={iconWrapperStyle}>
        <Image source={icon} style={[styles.iconStyle,iconStyle]}  />
    </SquareButton>
  )
}

export default SquareIconButton

const styles = StyleSheet.create({
    iconStyle : {
       width:"80%",
       height:"80%",
       tintColor:"black"
    }
})