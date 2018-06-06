$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"http://127.0.0.1:3001/liste",
            success : function(data){
            var tab = [];
            for (var id in data){
                tab.push ('<li class="list-group-item">' + data[id].name.first + " " + data[id].name.last + '</li>');
            }
            $("#l").html(tab);
        }});
    });
 });$.ajax({url:"http://127.0.0.1:3001/liste",
    success : function(data){
    var tab = [];
    for (var id in data){
        tab.push ('<li class="list-group-item">' + data[id].name.first + " " + data[id].name.last + '</li>');
    }
    $("#l").html(tab);
 }});