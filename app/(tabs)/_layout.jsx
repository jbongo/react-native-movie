import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import {icons} from '../../constants'

const TabBar = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
          <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6'/>
          <Text className={`text-xs ${focused ? 'font-psemibold' : 'font-pregular'}`} style={{color: color}}>{name}</Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF9C01',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84
          }
        }}
      >
        <Tabs.Screen name="home" 
        options={{
           title: 'Acceuil',
           headerShown: false,
           tabBarIcon:( {color, focused}) => (
             <TabBar icon={icons.home} color={color} name="home" focused={focused} />
           )
           }} />
        <Tabs.Screen name="create" 
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon:( {color, focused}) => (
              <TabBar icon={icons.plus} color={color} name="create" focused={focused} />
            )
            }} />
        <Tabs.Screen name="bookmark" 
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon:( {color, focused}) => (
              <TabBar icon={icons.bookmark} color={color} name="bookmark" focused={focused} />
            )
            }} />
        <Tabs.Screen name="profile" 
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon:( {color, focused}) => (
              <TabBar icon={icons.profile} color={color} name="profile" focused={focused} />
            )
        }} />
      </Tabs>
    </>
  )
}

export default TabsLayout