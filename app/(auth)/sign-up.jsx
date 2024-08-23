import { Alert, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    username:'',
    email: '',
    password: '',
  })

  const [isSubmiting, setIsSubmiting] = useState(false)

  const onSubmit = async () => {

    if(form.username === '' || form.email === '' || form.password === '') {
      Alert.alert("Veuillez renseigner tous les champs")
    }else{
      setIsSubmiting(true);

   
      try{
        result = await createUser(form.username, form.email, form.password);
        // Gérer le state global
        router.replace('/home');

      }catch(error){
        Alert.alert("Une erreur est survenue: "+error.message);
      }finally{
        setIsSubmiting(false);  
      }
    

    }

    
  }
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{height: '100%'}}>

        <View className=" w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={images.logo}
            className="w-[130px] h-[35px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white font-psemibold mt-10 ">Créer mon compte</Text>
          
          <FormField
            title="Nom"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyle="mt-10"

            />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyle="mt-7"
            keyBoardType="email-address"

            />

          <FormField
            title="Mot de passe"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyle="mt-7"
            secureTextEntry={true}

            />

          <CustomButton title="Créer mon compte" handlePress={() => onSubmit()}
           containerStyles="mt-10"  isLoading={isSubmiting}
          />

          <View className="justify-center items-center pt-5 ">
            <Text className="justify-center text-gray-100 text-lg font-pregular">Vous avez déja un compte ?</Text>
            <Link href="/sign-in" className='text-secondary font-psemibold text-lg' > Se connecter</Link>
          </View>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp