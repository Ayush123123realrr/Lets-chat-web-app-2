user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("Room_name");

function addRoom (){
Room_name=document.getElementById("Room_name").value;
firebase.database().ref("/").child(Room_name).update({purpose:"adding room name "});
localStorage.setItem("Room_name",Room_name);
window.location="kwitter_page.html";


user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("Room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
}

 

function logout (){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location=("kwitter.html");
}


function send (){
msg=document.getElementById("msg").value;
firebase.database().ref(Room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
