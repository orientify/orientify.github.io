
$(function() {
    var mapName;
    fileButton.addEventListener('change', function(e){
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('maps/' + file.name);
        var task = storageRef.put(file);
        mapName = this.value;
        mapName = mapName.replace(/.*[\/\\]/, '');

    });

    

    document.getElementById("logOut").onclick = signOutFromGoogle;
    console.log("tere");

    document.getElementById('fileButton').onchange = function () {
        alert('Selected file: ' + this.value);
        console.log(this.value);
    };
});

function writeTrackInfo() {
        var rada = document.getElementById('rada').value;
        var linn = document.getElementById('linn').value;

        var checkpoints = [];
        var answer = [];
        var choice = [];
        var time = [];
        for(var i = 1; i < 3; i++){
            checkpoints[i] = document.getElementById('checkpoints' + i).value;
            answer[i] = document.getElementById('answer' + i).value;
            choice[i] = document.getElementById('choice' + i).value;
            time[i] = document.getElementById('time' + i).value;
        }

        if(rada.length >0){
            firebase.database().ref('trackss/' + rada).set({
                city: linn,
                map: mapName
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


