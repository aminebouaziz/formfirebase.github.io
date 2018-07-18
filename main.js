//inizialize firebase
var config = {
    apiKey: "AIzaSyBcSXq4biaYfVcPBt2z0Jdb2IltEuI5uM8",
    authDomain: "gmc1-4d45f.firebaseapp.com",
    databaseURL: "https://gmc1-4d45f.firebaseio.com",
    projectId: "gmc1-4d45f",
    storageBucket: "gmc1-4d45f.appspot.com",
    messagingSenderId: "344289231980"
  };
  firebase.initializeApp(config);

  //reference mesges collection
  var messageRef =firebase.database().ref('message');


//for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
//submit form
function submitForm(e){
    e.preventDefault();
   //get values
   var name=getInputVal('name');
   var company=getInputVal('company');
   var email=getInputVal('email');
   var phone=getInputVal('phone');
   var message=getInputVal('message');
    //save message
   saveMsg(name,company,email,phone,message);
    //show alert
    document.querySelector('.alert').style.display ='block';
    //hide alert after 3sec
    setTimeout(function(){
        document.querySelector('.alert').style.display ='none';
    },3000)
    //clear form
    document.getElementById('contactForm').reset();
}

//fct to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save msgs to firebase
function saveMsg(name,company,email,phone,message){
    var newMessageRef=messageRef.push();
    newMessageRef.set({
        name : name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}