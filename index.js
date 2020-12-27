function validate(){

    var text=document.getElementById("text1").value;
    var regx= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,20})$/;
    
    if(regx.test(text)){
        alert("valid email ");
    }
    else{
        alert("invalid email");
    }







}