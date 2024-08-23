import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.jbongo.aora",
    projectId: "66c163680025984788e3",
    databaseId: "66c30bc2003d42f07072",
    userCollectionId: "66c30bfe0020de13189a",
    videoCollectionId: "66c30c330023753124b3",
    storageId: "66c30f11001b7cc558b7"

}

const{
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId,
} = config


const client = new Client();

client
  .setEndpoint(endpoint)
  .setProject(projectId)
  .setPlatform(platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async (username, email, password) => {

    try{
        const newAccount = await account.create(ID.unique(), email, password, username)
        if(!newAccount) throw new Error("Le compte n'a pas pu être crée");

        const avatarURL = avatars.getInitials(username)
        signIn(email, password);

        const newUser = await databases.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                accountid: newAccount.$id,
                username,
                email,
                avatar:avatarURL,
            });

        if(!newUser) throw new Error("Le compte n'a pas pu être crée");

        return newUser;

    }catch(error){
        console.log(error);
        throw new Error(error);
    }    
}

export const signIn = async (email, password) => {
    try{
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try{
        const currentAccount = await account.get();
        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountid', currentAccount.$id)]
        );

        if(!currentUser) throw Error;

        return currentUser.documents[0];


    }catch(error){
        throw new Error(error);
    }
}

export const getAllPosts = async () => {
    try{
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId
        );        
        return posts.documents;
    }catch(error){
        throw new Error(error);
    }
}

export const getLatestPosts = async () => {
    try{
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.orderDesc('$createdAt', Query.limit(7))]
        );        
        return posts.documents;
    }catch(error){
        throw new Error(error);
    }
}