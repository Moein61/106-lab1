function createtodo(){
    var text=$('#textToDo').val();
    $('#textToDo').val("");
    $("#txtToDo").focus();
    var li = "<h3>" + text + "</h3>";
    $("#pendinglist").append(li);
   

}

function init(){

    $('#butt').click(createtodo);

}

window.onload = init;
