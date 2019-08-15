
var firebaseConfig = {
    apiKey: "AIzaSyDzPprTwgz8c65nRzWnsodYAVmNyOI6I_M",
    authDomain: "train-c164e.firebaseapp.com",
    databaseURL: "https://train-c164e.firebaseio.com",
    projectId: "train-c164e",
    storageBucket: "",
    messagingSenderId: "341819312510",
    appId: "1:341819312510:web:f8ad6431111cc1ae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  database.ref().child().set({


    
  })

  let userRef = this.database.ref('users/' + userId);
  userRef.child(
 'mike').set({'firstName': value.firstName, 'lastName': value.lastName, 'gender': value.gender.toLowerCase(),
        'dateOfBirth': moment(value.dateOfBirth).toDate().getTime()})



var startTime="10:00";
var frequency=10;
console.log(getNextTrain(startTime,frequency));
function getNextTrain(startTime,frequency)
{
    var startMoment=moment(startTime,"HH:mm");
    var currentMoment=moment();
    
    var differenceInMinutes=currentMoment.diff(startMoment,"minutes");
    
    var reminder=differenceInMinutes%frequency;
    
    var minutesToCompleteFrequency=frequency-reminder;
    
    var nextTrainTime=currentMoment.add(minutesToCompleteFrequency,"minutes").format("HH:mm");
    return nextTrainTime;
}





