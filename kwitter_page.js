 var firebaseConfig = {
    apiKey: "AIzaSyB_UMkNKG3L97I95g5ONNNczHRa-NiBkVY",
    authDomain: "let-chat-web-app-652ea.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-652ea-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-652ea",
    storageBucket: "let-chat-web-app-652ea.appspot.com",
    messagingSenderId: "357882244761",
    appId: "1:357882244761:web:0636f5c3ea006b35829208"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
   

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
       name: user_name,
       message:msg,
       like:0   
    });

    document.getElementById("msg").value="";
}