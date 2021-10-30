const firebaseConfig = {
    apiKey: "AIzaSyDdbiIEVyQ-f3rA926oDRbRkHckMgZCEFc",
    authDomain: "morequitter.firebaseapp.com",
    projectId: "morequitter",
    storageBucket: "morequitter.appspot.com",
    messagingSenderId: "290353897470",
    appId: "1:290353897470:web:9d3cde64036699c7f1aaaf",
    measurementId: "G-5J72R9TQB5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  user_name=localStorage.getItem("User_name");
  document.getElementById("user_Name").innerHTML = "Welcome " + user_name;
  
  function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "htmlhtmlhtml.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
        console.log("room name-" + Room_names);
        row = "<div class='room_name'  id=" + Room_names + " onclick='RedirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
         
        //End code
        });});}
  getData();
  function RedirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "htmlhtmlhtml.html";
  }
  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value = "";
  }
  