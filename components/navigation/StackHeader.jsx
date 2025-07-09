
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import SquareButton from '../buttons/SquareButton'
import SquareIconButton from '../buttons/SquareIconButton'
import { shortLeftBackIcon } from '../../assets'
import { appFontSize, appFontWeight, appSpaces } from '../../consts/appStyleConst'

const StackHeader = ({canBack=false,RightComp=null,LeftComp=null,title=""}) => {

  const [isCanBack,setIsCanBack] = useState(false)  

  useEffect(() => {
        if(router.canGoBack)
        {
           setIsCanBack(oldState => true)
        }
  },[])
    
  return (
    <View style={styles.wrapper}>
      {(canBack && isCanBack) ? <SquareIconButton icon={shortLeftBackIcon} onPress={() => router.back()} /> : (LeftComp !== null) ? <LeftComp /> : <View style={styles.empComp}> </View>}
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      {RightComp !== null ? <RightComp /> : <View style={styles.empComp}></View>}
    </View>
  )
}

export default StackHeader

const styles = StyleSheet.create({
    wrapper : {
        minHeight:"64",
        width:"100%",
        paddingHorizontal:appSpaces.md,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    title : {
       flex:1,
       fontSize:appFontSize.md,
       fontWeight:appFontWeight.semibold,
       textAlign:"center",
       marginHorizontal:appSpaces.sm
    },
    empComp : {
       width:40,
       height:40
    }
})