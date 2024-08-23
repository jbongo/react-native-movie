import React from 'react'
import { Image, Text, View } from 'react-native'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

export const EmptyState = ({title, subtitle}) => {
  return (
        <View className="flex-1 items-center justify-center px-4">
            <Image 
              source={images.empty}
              className="w-[270px] h-[215px]"/>
              <View>
                <Text className="text-2xl text-center text-pmedium text-white">
                    {title}
                </Text>
                <Text className="text-lg text-center text-psemibold text-gray-100 mt-2">
                    {subtitle}
                </Text>
            </View>

            <CustomButton title="Créer une nouvelle vidéo" handlePress={() => {router.push('/create')}}
                containerStyles={'w-full mt-5'}
            />
        </View>
  )
}
