import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../constants'

const SearchInput = ({title, value, placeholder, handleChangeText, otherStyle, ...props}) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className="border-2 border-black-200 focus:border-secondary items-center rounded-xl h-16 px-4 bg-black-100 flex-row space-x-4 ">
        <TextInput 
            className="text-base mt-0.5 text-white text flex-1 font-pregular" 
            value={value} placeholder="Rechercher un film" placeholderTextColor={'#7b7b78'} onChangeText={handleChangeText} {...props}
            secureTextEntry={title === 'Mot de passe' && !showPassword}
            />

        <TouchableOpacity>
            <Image source={icons.search} className="w-5 h-5" resizeMode='contain'/>
        </TouchableOpacity>

    </View>
  )
}

export default SearchInput