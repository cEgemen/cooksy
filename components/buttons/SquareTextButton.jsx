import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SquareButton from './SquareButton'

const SquareTextButton = ({text,onPress=()=>{},textStyle={},textWrapperStyle={}}) => {
  return (
     <SquareButton onClick={onPress} wrapperStyle={textWrapperStyle}>
        <Text style={textStyle}>{text}</Text>
     </SquareButton>
  )
}

export default SquareTextButton

const styles = StyleSheet.create({

})