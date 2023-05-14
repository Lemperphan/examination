function add()
{
    var todo = document.getElementById("todo").value;
    var object = {
        todo : todo
    }
    var json = JSON.stringify(object)
    localStorage.setItem(todo, json)
    location.reload()
}
function render(){
    // let some = localStorage.getItem('todo')
    // arse(localStorage)
}
