import {FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { BasePage } from '../components'
import { appBorderRadius, appFontSize, appFontWeight, appSpaces } from '../consts/appStyleConst'
import { worldCuisines } from '../consts/appDataConst'
import { basketIcon, breadIcon,clockIcon,cookieIcon,hamburgerIcon,kebabIcon,pizzaIcon } from '../assets'
import { useState } from 'react'
import { router } from 'expo-router'


const Index = () => {
  const [activeCuisine,setActiveCuisine] = useState(0)
  const [activeCountry,setActiveCountry] = useState(0)
  const foodIcons = [kebabIcon,pizzaIcon,cookieIcon,hamburgerIcon,breadIcon]

  const handleChangeActiveCuisine = (value) => {
      if(value !== activeCuisine)
      { 
         setActiveCuisine(oldState => value)
         setActiveCountry(oldState => 0)
      }                     
                                                }
  
   const handleChangeActiveCountry = (value) => {
        setActiveCountry(oldState => value)
   }           
   
   const goRecoDetail = (name) => {
        router.push("/detail")    
   }

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
               const isActive = index === activeCountry
               const textColor = isActive ? "rgb(152, 152, 205)" : "rgb(179, 179, 179)"
               return <Pressable style={{alignItems:"center"}} onPress={() => handleChangeActiveCountry(index)}>
                         <Image source={foodIcons[index%foodIcons.length]} style={{width:40,height:40}} />   
                         <Text style={{fontWeight:appFontWeight.semibold,color:textColor}}>{item}</Text>
                      </Pressable>
          }}
       />
       <Text style={{fontSize:appFontSize.md,fontWeight:appFontWeight.medium,marginBottom:appSpaces.md}}>Recommended</Text>
       <FlatList
          data={[1,1,1,1]}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexGrow:1,columnGap:appSpaces.lg,padding:appSpaces.md}}
          keyExtractor={(item,index) => index*10}
          renderItem={({item,index}) => {
                
                return <>
                        <Pressable style={styles.recoCardWrapper} onPress={() => goRecoDetail()}>
                           <View style={styles.recoFoodImg}>
                           </View>
                           <View style={styles.recoCardContent} >
                             <Text style={{marginRight:appSpaces.md,fontSize:appFontSize.md,fontWeight:appFontWeight.medium}}>Recommendation Name dasdsadas</Text>
                             <View style={{marginVertical:"auto",flexDirection:"row",justifyContent:"space-around"}}>
                                 <View style={{flexDirection:"row",alignItems:"center",columnGap:4}}>
                                   <Image source={clockIcon} style={{width:30,height:30}} />
                                   <Text style={{fontSize:appFontSize.sm,fontWeight:appFontWeight.semibold}}>5 min</Text>
                                 </View>
                                 <View style={{flexDirection:"row",alignItems:"center",columnGap:4}}>
                                   <Image source={basketIcon} style={{width:30,height:30}} />
                                   <Text style={{fontSize:appFontSize.sm,fontWeight:appFontWeight.semibold}}>x 4</Text>
                                 </View>
                             </View>
                           </View>
                        </Pressable> 
                      </>
          }}
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
   },
   recoCardWrapper : {
       width:"220",
       height:"320",
       paddingRight:appSpaces.lg,
   },
   recoCardContent : {
       flex:1,
       backgroundColor:"rgb(216, 247, 233)",
       borderRadius:appBorderRadius.lg,
       paddingTop:180,
       paddingHorizontal:appSpaces.md
   },
   recoFoodImg : {
       position:"absolute",
       right:"0",
       top:"40",
       zIndex:1,
       width:"120",
       height:"120",
       borderRadius:appBorderRadius.circle(120),
       backgroundColor:"white",
   }
})