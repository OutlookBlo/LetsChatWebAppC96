const firebaseConfig = {
    apiKey: "AIzaSyAS6eQmSIX-bjRiu08LCHddBlpps_GHjEE",
    authDomain: "the-twitter-ripoff.firebaseapp.com",
    databaseURL: "https://the-twitter-ripoff-default-rtdb.firebaseio.com",
    projectId: "the-twitter-ripoff",
    storageBucket: "the-twitter-ripoff.appspot.com",
    messagingSenderId: "44063736231",
    appId: "1:44063736231:web:3e0a10fd3de9a19d5f3682",
    measurementId: "G-9KNS37HXBL"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = "Kwitter_room.html"
function addUser()
{
    user_name = document.getElementById("user_name", user_name);

    localStorage.setItem("user_name", user_name);

    window.location = "Kwitter_room.html";
}

function getData() 
//Start code
{firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//End code
});});}
getData();

redirectToRoomName()
{
  localStorage.getItem(room_name);
  window.location("kwitter_page.html");
}