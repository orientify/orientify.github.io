var mapName;
$(function() {
    giveNextTrackNameNumber();
    fileButton.addEventListener('change', function(e){
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('maps/' + file.name);
        var task = storageRef.put(file);
        mapName = this.value;
        mapName = mapName.replace(/.*[\/\\]/, '');

    });

    document.getElementById("logOut").onclick = signOutFromGoogle;
    console.log("tere");
});


function writeTrackInfo() {
    var rada = document.getElementById('rada').value;
    var linn = document.getElementById('linn').value;
    var length = document.getElementById('length').value;
    var checkpoints = [];
    var answer = [];
    var choice = [];
    var time = [];
    console.log(giveNextTrackNameNumber());
    for(var i = 1; i < 3; i++){
        checkpoints[i] = i;
        answer[i] = document.getElementById('answer' + i).value;
        choice[i] = document.getElementById('choice' + i).value;
        time[i] = document.getElementById('time' + i).value;
    }

    if(rada.length >0){
        firebase.database().ref('tracksNames/' + giveNextTrackNameNumber()).set({
            city: linn,
            name: rada
        });
        firebase.database().ref('trackss/' + giveNextTrackNameNumber()).set({
            length: length,
            map: mapName
        });
        for(var i = 1; i < 3; i++){
            console.log('trackss/' + giveNextTrackNameNumber() + '/checkpoints/' + checkpoints[i]);
            firebase.database().ref('trackss/' + giveNextTrackNameNumber() + '/checkpoints/' + checkpoints[i]).set({
                answer: answer[i],
                choice: choice[i],
                time: time[i]
            });
            
        }
    }
}
function giveNextTrackNameNumber(){
    var trackCountRef = firebase.database().ref('trackNames/');
    var count = 1;
    trackCountRef.on('value', function(snapshot) {
        var tracks = snapshot.val();
        for (var track in tracks) {
            count++;
        }
    });
    console.log("tere");
    return count;
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


$('.add-checkpoint').on('click', function() {
    var counter = 1 + $('.checkpoint-wrapper').length;
    var tpl = $('#checkpoint-tpl').html();
    Mustache.parse(tpl);
    var rendered = Mustache.render(tpl, {counter: counter});
    $(rendered).appendTo(this.closest("fieldset"));
});



