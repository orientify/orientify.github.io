fileButton.addEventListener('change', function(e){
    var file = e.target.files[0];

    var storageRef = firebase.storage().ref('maps/' + file.name);

    var task = storageRef.put(file);

    task.on('state_changed',
            function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
    },
            function error(err){

    },
            function complete(){

    }
           );
});

function writeTrackInfo() {
    var rada = document.getElementById('rada').value;
    var linn = document.getElementById('linn').value;
    var kaart = document.getElementById('kaart').value;

    var checkpoints = [];
    var answer = [];
    var choice = [];
    var time = [];
    for(var i = 1; i < 5; i++){
        checkpoints[i] = document.getElementById('checkpoints' + i).value;
        answer[i] = document.getElementById('answer' + i).value;
        choice[i] = document.getElementById('choice' + i).value;
        time[i] = document.getElementById('time' + i).value;
    }

    if(rada.length >0){
        firebase.database().ref('trackss/' + rada).set({
            city: linn,
            map: kaart
        });
        for(var i = 1; i < 5; i++){
            console.log('trackss/' + rada + '/checkpoints/' + checkpoints[i]);
            firebase.database().ref('trackss/' + rada + '/checkpoints/' + checkpoints[i]).set({
                answer: answer[i],
                choice: choice[i],
                time: time[i]
            });
        }
    }
}
$(function() {
    document.getElementById("logOut").onclick = signOutFromGoogle;
    console.log("tere");
});

