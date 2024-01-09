function  text(){
    var name=document.getElementById("text").value;

    displaymsg("You Entered Message:"+name)

}
function displaymsg(msg){
    document.getElementById("msg").textContent=msg;
}