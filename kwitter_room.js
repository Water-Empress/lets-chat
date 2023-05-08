
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location= "index.html";
        }