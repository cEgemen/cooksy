import {FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { BasePage } from '../components'
import { appBorderRadius, appFontSize, appFontWeight, appSpaces } from '../consts/appStyleConst'
import { worldCuisines } from '../consts/appDataConst'
import { breadIcon,cookieIcon,hamburgerIcon,kebabIcon,pizzaIcon } from '../assets'
import { useState } from 'react'


const Index = () => {
  const [activeCuisine,setActiveCuisine] = useState(0)
  const foodIcons = [kebabIcon,pizzaIcon,cookieIcon,hamburgerIcon,breadIcon]

  const handleChangeActiveCuisine = (value) => setActiveCuisine(oldState => value)

  return (
    <BasePage  pageWrapper={styles.wrapper}>
       <View style={styles.header}>
           <View style={styles.headerTextWrapper}>
             <Text style={{fontSize:appFontSize.xl,fontWeight:appFontWeight.bold}}>Search</Text>
             <Text style={{fontSize:appFontSize.md,fontWeight:appFontWeight.normal}}>for recipes</Text>
           </View>
           <View style={styles.headerFoto}>

           </View>
       </View>
       <FlatList
          data={worldCuisines}
          horizontal
          contentContainerStyle={{width:"100%",justifyContent:"space-around",marginBottom:appSpaces.md}}
          keyExtractor={(item,index) => index}
          renderItem={({item,index}) => {
               const isActive = activeCuisine === index
               const flatItemStyle = {...styles.flatItem}
               const textColor = isActive ? "rgb(152, 152, 205)" : "rgb(179, 179, 179)"
               return <Pressable style={flatItemStyle} onPress={() => handleChangeActiveCuisine(index)} >
                       <Text style={{fontWeight:appFontWeight.semibold,fontSize:appFontSize.md,color:textColor}}>{item.shortName}</Text>
                       <Text style={{fontWeight:appFontWeight.medium,color:textColor}}>{item.continentName}</Text>
                      </Pressable>
          }}
       />
       <FlatList 
          data={worldCuisines[activeCuisine].cuisines}
          keyExtractor={(item,index) => index+item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexGrow:1,paddingHorizontal:appSpaces.md,justifyContent:"space-between",columnGap:appSpaces.xxl,marginBottom:appSpaces.lg}}
          renderItem={({item,index}) => {
               
               return <Pressable style={{alignItems:"center"}}>
                         <Image source={foodIcons[index%foodIcons.length]} style={{width:40,height:40}} />   
                         <Text style={{fontWeight:appFontWeight.semibold}}>{item}</Text>
                      </Pressable>
          }}
       />
       <Text style={{fontSize:appFontSize.md,fontWeight:appFontWeight.medium,marginBottom:appSpaces.md}}>Recommended</Text>
       <FlatList
          
        />
    </BasePage>
  )
}

export default Index

const styles = StyleSheet.create({
   wrapper:{
       padding:appSpaces.md 
   },
   header:{
      minHeight:"64",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      marginBottom:appSpaces.lg
   },
   headerTextWrapper:{
       
   },
   headerFoto:{
      width:40,
      height:40,
      borderRadius:appBorderRadius.circle(40),
      borderWidth:1,
      borderColor:"black",
      backgroundColor:"white"
   },
   flatItem : {
      alignItems:"center"
   }
})