import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { icons } from '../constants'
import { ResizeMode, Video } from 'expo-av'


const zoomIn = {
  0: {
    scale: 0.9
  },
  1: {
    scale: 1
  }
}
const zoomOut = {
  0: {
    scale: 1
  },
  1: {
    scale: 0.9
  }
}

const TrendingItem = ({item, activeItem}) => {
        
  const [play, setPlay] = useState(false)
  // agrandir la vidéo au milieu (visible)

  return (
    <Animatable.View
      animation={activeItem === item.$id ? zoomIn : zoomOut}
      duration={500}
      className="mr-5" 
    >
    {play ? (
       <Video
        source={{uri:item.video}}
        className="w-52 h-72 rounded-[33px] my-4 overflow-hidden bg-white/10"
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        shouldPlay
       />
    ) : (
        <TouchableOpacity className="relative  justify-center  items-center " activeOpacity={0.7} onPress={() => setPlay(true)}>
             <ImageBackground
                  source={{uri:item.thumbnail}}
                  className="w-52 h-72 rounded-[33px] my-4 overflow-hidden shadow-lg shadow-black/50" 
                  resizeMethod='cover'
              />
              <Image
                  source={icons.play}
                  className="w-12 h-12 absolute"
              />
              
        </TouchableOpacity>
    )}
    </Animatable.View>
  )         
}
const Trending = ({posts}) => {

  const [activeItem, setActiveItem] = useState(posts[1])
  
  const viewableItemsChanged = ({viewableItems}) => {
    if (viewableItems.length > 0) {
        setActiveItem(viewableItems[0].key)
    }
  }

  
  return (
    <FlatList 
      data={posts}
      keyExtractor={item => item.$id}
      renderItem={({item}) => {
        return <TrendingItem item={item} activeItem={activeItem}/>
      } }
      horizontal
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      contentOffset={{x:170}}
    />
  )
}

export default Trending