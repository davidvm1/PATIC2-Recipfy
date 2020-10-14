import axios from 'axios'
import * as firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4rWe-fqTzbphE6p29rYEy6qAPVa2lV8s",
  authDomain: "recipfy.firebaseapp.com",
  databaseURL: "https://recipfy.firebaseio.com",
  projectId: "recipfy",
  storageBucket: "recipfy.appspot.com",
  messagingSenderId: "834275327155",
  appId: "1:834275327155:web:81e8aeafb26f81928b84c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



const firebaseService = {}
firebaseService.createUser = async (email, password) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    return user
  } catch (err) {
    throw new Error(err.message)
  }
}
firebaseService.Sign = async (email, password) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    return user
  } catch (err) {
    throw new Error(err.message)
  }
}
firebaseService.rememberPass = async(email)=>{
  try{
    const user = await firebase.auth().sendPasswordResetEmail(email)
    return user
  }catch(err){
    throw new Error(err.message)
  }
}
firebaseService.getUserRecipes = async(userId) => {
  try{
    const user = await db.collection("users").doc(userId).get().then(function(doc) {
      if (doc.exists) {
        return doc.data()
      } else {
       return undefined
      }
    }).catch(function(error) {
      throw new Error((error))
    });
    return user
  }catch(err){
    throw new Error(err.message)
  }
}
firebaseService.addUserRecipe = async(data) => {
  try{
    await db.collection("users").doc(data.user).update({
      favRecipes: firebase.firestore.FieldValue.arrayUnion(data.recipe)
    })
    return 'success'
  }catch(err){
    throw new Error(err.message)
  }
}
firebaseService.removeUserRecipe = async(data) => {
  try{
    await db.collection("users").doc(data.user).update({
      favRecipes: firebase.firestore.FieldValue.arrayRemove(data.recipe)
    })
    return 'success'
  }catch(err){
    throw new Error(err.message)
  }
}
firebaseService.addNewUserInstance = async(data) => {
  try{
    await db.collection('users').doc(data.userId).set({
      favRecipes: [],
      name: data.name,
      lastName: data.lastName
    }, { merge: true })
    return 'success'
  }catch(err){
    throw new Error(err.message)
  }
}


export default firebaseService
