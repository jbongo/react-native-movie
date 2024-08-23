import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants'

const FormField = ({title, value, placeholder, handleChangeText, otherStyle, ...props}) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyle} `}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 border-black-200 focus:border-secondary items-center rounded-xl h-16 px-4 bg-black-100 flex-row ">
        <TextInput 
            className="flex-1 text-white font-psemibold" 
            value={value} placeholder={placeholder} placeholderTextColor={'#7b7b78'} onChangeText={handleChangeText} {...props}
            secureTextEntry={title === 'Mot de passe' && !showPassword}
            />

        {title === 'Mot de passe' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="">
            <Image source={showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode='contain'/>
          </TouchableOpacity>
        )}
      </View>

    </View>
  )
}

export default FormField