import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BasePage = ({children,pageWrapper={}}) => {

  const insets = useSafeAreaInsets()   
  const safeArea = {flex:1,paddingLeft:insets.left,paddingTop:insets.top,paddingRight:insets.right,paddingBottom:insets.bottom}
  return ( 
    <View style={safeArea} >
      <View style={[pageWrapper]}>
        {children}
      </View>
    </View>
  )
}

export default BasePage

const styles = StyleSheet.create({
    
})