
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AppLayout = () => {
  return (
     <Stack>
        <Stack.Screen options={{headerShown:false}} name='index' />
     </Stack>
  )
}

export default AppLayout

const styles = StyleSheet.create({})