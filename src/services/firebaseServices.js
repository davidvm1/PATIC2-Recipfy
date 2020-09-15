import axios from 'axios'
import * as firebase from "firebase/app";
import "firebase/auth";

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

export default firebaseService
