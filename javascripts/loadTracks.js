function readDataFromFire(){
    var starCountRef = firebase.database().ref('trackNames/');
    starCountRef.on('value', function(snapshot) {
        var hey = snapshot.val();
        var hey1 = snapshot.val();
        console.log(hey);
        console.log(hey1["1"]);
        console.log(hey1["1"].city);
        for (var key in hey) {
            var table = document.getElementById("myTable");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = hey[key].city;
            cell2.innerHTML = hey[key].name;
        }
    });
}
