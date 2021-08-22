//import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyADHZaZ7ae2v6WBtOz_Z6qZeL-PzS7uk5A",
    authDomain: "sparta-myhoneytip-yeah.firebaseapp.com",
    databaseURL: "https://sparta-myhoneytip-yeah-default-rtdb.firebaseio.com",
    projectId: "sparta-myhoneytip-yeah",
    storageBucket: "sparta-myhoneytip-yeah.appspot.com",
    messagingSenderId: "745147924947",
    appId: "1:745147924947:web:70566916432292b9252f26",
    measurementId: "G-00803R1MWJ"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()