import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {  Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {

  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home" />

  return (
     <SafeAreaView className="h-full bg-primary">
        <ScrollView contentContainerStyle={{height: '100%'}}>
          <View className="justify-center items-center w-full h-[85vh] px-4">
            <Image source={images.logo} 
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            
            />
            <Image
              source={images.cards}
              className="max-w-[380px] w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center"> Découvrez nos films Avec {' '} 
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Image source={images.path} className="w-[236] h-[15px] absolute bottom-0 -right-0"  resizeMode='contain'/>
            </View>

            <CustomButton title="Continuer avec votre Email" handlePress={() => router.push('sign-in')} containerStyles="w-full mt-7"/>
          </View>

        </ScrollView>
      <StatusBar backgroundColor='#161622' style="light" />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
