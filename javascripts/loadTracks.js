$(function() {
    var trackCountRef = firebase.database().ref('trackNames/');
    trackCountRef.on('value', function(snapshot) {
        var tracks = snapshot.val();
        for (var track in tracks) {
            var table = document.getElementById("myTable");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = tracks[track].city;
            cell2.innerHTML = tracks[track].name;
        }
    });
  readDataFromFire();
});

