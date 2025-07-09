import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { BasePage, SquareIconButton, StackHeader } from '../components'
import { basketIcon, breadIcon, clockIcon, favIcon, shortLeftBackIcon } from '../assets'
import { appBorderRadius, appFontSize, appFontWeight, appSpaces } from '../consts/appStyleConst'
import { router } from 'expo-router'

const Detail = () => {

  const HeaderLeftComp = () => {
       return <SquareIconButton icon={shortLeftBackIcon} iconWrapperStyle={{backgroundColor:"rgba(225, 220, 220, 0.65)"}} onPress={() => router.back()} />
  }

  const HeaderRightComp = () => {
        return <SquareIconButton icon={favIcon} iconWrapperStyle={{backgroundColor:"rgba(225, 220, 220, 0.65)"}} />
  }

  return (
     <BasePage pageWrapper={{height:"100%"}}>
       <View style={styles.topSide}>
         <StackHeader title='TMP MEAL NAME' LeftComp={() => <HeaderLeftComp />} RightComp={() => <HeaderRightComp />} />
         <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
             <View style={{borderRadius:appBorderRadius.circle(200),backgroundColor:"pink",width:200,height:200}}></View>   
         </View>
         <View style={{height:64,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
            <View style={{flexDirection:"row",alignItems:"center",columnGap:appSpaces.sm}}>
              <Image source={clockIcon} style={{width:40,height:40}} />
              <Text style={{fontSize:appFontSize.sm,fontWeight:appFontWeight.semibold}}>5 min</Text>
            </View>   
            <View style={{flexDirection:"row",alignItems:"center",columnGap:appSpaces.sm}}>
              <Image source={basketIcon} style={{width:40,height:40}} />
              <Text style={{fontSize:appFontSize.sm,fontWeight:appFontWeight.semibold}}>x 4</Text>
            </View>   
         </View>
       </View>
       <View style={styles.bottomSide}>
        <View style={{flexDirection:"row"}}>
          
        </View>
        <Text style={{fontSize:appFontSize.md,fontWeight:appFontWeight.semibold,marginBottom:appSpaces.sm}}>Ingredients</Text> 
        <FlatList 
           data={[1,1,1,1]}
           keyExtractor={(item,index) => index}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{flexGrow:1,rowGap:appSpaces.md}}
           renderItem={({item,index}) => {
                 return <View style={{width:"100%",height:64,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderRadius:appBorderRadius.lg,paddingHorizontal:appSpaces.md,backgroundColor:"white"}}>
                          <View style={{flexDirection:"row",columnGap:appSpaces.xxl,alignItems:"center"}}>
                           <SquareIconButton icon={breadIcon} iconStyle={{tintColor:null}} iconWrapperStyle={{backgroundColor:"rgba(225, 220, 220, 0.65)"}} />
                           <Text style={{fontSize:appFontSize.md,fontWeight:appFontWeight.bold}}>Bread</Text>
                          </View>
                          <Text style={{fontSize:appFontSize.sm,fontWeight:appFontWeight.semibold,color:"rgba(194, 188, 188, 0.7)"}}>125 g</Text>
                        </View>
           }}
        />
       </View>
       
     </BasePage>
  )
}

const styles = StyleSheet.create({
     topSide : {
         width:"100%",
         height:"50%",
         overflow:"hidden",
         borderBottomLeftRadius:appBorderRadius.xxl,
         borderBottomRightRadius:appBorderRadius.xxl,
         backgroundColor:"white"
     },
     bottomSide : {
       padding:appSpaces.md
     }
})

export default Detail