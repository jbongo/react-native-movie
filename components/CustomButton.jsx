import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
    className={`bg-secondary rounded-xl p-2 min-h-[62px] justify-center items-center ${containerStyles}`}
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton