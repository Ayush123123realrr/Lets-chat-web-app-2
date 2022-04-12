 
user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
 function addRoom (){
Room_name=document.getElementById("Room_name").value;
firebase.database().ref("/").child(Room_name).update({purpose:"adding room name "});
localStorage.setItem("Room_name",Room_name);
window.location="kwitter_page.html";

 }


 function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location.replace("kwitter.html");
 }