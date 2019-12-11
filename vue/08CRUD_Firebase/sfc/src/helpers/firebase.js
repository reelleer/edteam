import { initializeApp } from 'firebase'

const app =  initializeApp({
  apiKey: "AIzaSyCr8fs7OhGzdHwmq0Lo5-zZDUzuRmW4L-E",
  authDomain: "crud-vue-firebaase.firebaseapp.com",
  databaseURL: "https://crud-vue-firebaase.firebaseio.com",
  projectId: "crud-vue-firebaase",
  storageBucket: "crud-vue-firebaase.appspot.com",
  messagingSenderId: "796031632659",
  appId: "1:796031632659:web:91c7e264dd1b8457f586e6"
})

export const db = app.database()
export const dbRef = db.ref('students')