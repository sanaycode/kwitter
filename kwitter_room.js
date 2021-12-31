const firebaseConfig = {
      apiKey: "AIzaSyCdLPZIGhTzyCicG83lZufFtO3-wPxYIp0",
      authDomain: "kwitter-app-3dd1f.firebaseapp.com",
      projectId: "kwitter-app-3dd1f",
      storageBucket: "kwitter-app-3dd1f.appspot.com",
      messagingSenderId: "139617740574",
      appId: "1:139617740574:web:2e0372dfa4ef60f3508b0f"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
