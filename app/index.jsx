import {StyleSheet, Text, View } from 'react-native'
import { BasePage } from '../components'

const Index = () => {


  return (
    <BasePage>
       <View style={styles.header}>
           <View style={styles.headerTextWrapper}>
             <Text>Search</Text>
             <Text>for recipes</Text>
           </View>
           <View>

           </View>
       </View>
    </BasePage>
  )
}

export default Index

const styles = StyleSheet.create({
   wrapper:{

   },
   header:{
      minHeight:"64",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      backgroundColor:"red"
   },
   headerTextWrapper:{
       
   }
})