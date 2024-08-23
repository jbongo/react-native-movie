import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const VideoCard = ({video : {title, thumbnail, video, users: {username, avatar}}}) => {

    const [play, setPlay] = useState(false)
    return (
    <View className="items-center  justify-center mx-4 mb-10  ">
      <View className="flex-1 flex-row justify-between space-x-4 w-full mb-2">
        <View className="flex-1 flex-row space-x-4">
            <View className="w-12 h-11 border border-secondary-200 rounded-lg">
            <Image source={{uri:avatar}} className="w-full h-full rounded-lg " resizeMode='cover' />
            </View>
            <View className="flex-1 justify-center ">
            <Text className="text-white font-pmedium" numberOfLines={1}>{title}</Text>
            <Text className="text-gray-300 font-pregular text-sm">{username} </Text>
            </View>
        </View>
        <View className="pt-2">
            <Image source={icons.menu} className="w-6 h-5 " resizeMode='contain'/>
        </View>
      </View>
     

      {play ? (
          <Text className="w-full h-60 mt-4 text-white font-pmedium" onPress={() => setPlay(false)}>Playing</Text>
      ) : (
          <TouchableOpacity className="w-full h-60 mt-4 items-center justify-center" activeOpacity={0.5} onPress={() => setPlay(true)}>
               <Image
                    source={{uri:thumbnail}}
                    className="w-full h-full rounded-3xl mb-4"
                />
                <Image
                    source={icons.play}
                    className="w-12 h-12 absolute"
                />
          </TouchableOpacity>
      )}
    </View>
  )
}

export default VideoCard