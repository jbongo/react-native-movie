import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import { EmptyState } from '../../components/EmptyState'
import { getAllPosts, getLatestPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'

const Home = () => {

  const {data: posts, refetch, isLoading} = useAppwrite(getAllPosts)
  const {data: latestPosts} = useAppwrite(getLatestPosts)

  const [refreshing, setRefreshing] = useState(false)
    
  const onRefresh = () => {
    setRefreshing(true)
    refetch()
    setRefreshing(false)
  }

  console.log(posts);
  
  return (
    <SafeAreaView className="bg-primary h-full" >

      <FlatList 
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <VideoCard video = {item}/>
        } }

        ListHeaderComponent={() => 
        (
          <View className="my-6 px-4 space-y-4">
            <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="text-sm text-pmedium text-gray-100">
                      Bienvenue
                  </Text>
                  <Text className="text-3xl text-psemibold text-white">
                      Santos
                  </Text>
                </View>
                <View className="mt-1.5">
                  <Image source={images.logoSmall} className="w-11 h-12" resizeMode='contain'/>
                </View>
            </View>

            <SearchInput/>

            <View className="flex-1 w-full pt-5 pb-8">
              <Text className="text-lg text-gray-100 font-pregular mb-3 ">
                  Dernières vidéos  
              </Text>
              <Trending posts={latestPosts ?? []}/>
            </View>
          </View>
        )
      }
      ListEmptyComponent={() => {

        return (
        <EmptyState
          title="Aucune vidéo trouvée"
          subtitle="Soyez le premier à créer une vidéo"
        />
        )
      }}

      refreshControl={() => <RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>}

      />
      
    </SafeAreaView>
  )
}

export default Home