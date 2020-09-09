

function calcularprecio(){
    var a=parseFloat(document.form1.inp.value);
    var b=parseFloat(document.form1.inp1.value);
    var c=parseFloat(document.form1.inp2.value);
    var d=new Number(0);

    d=(a/b)*c;
    document.form1.inp3.value=(d);
}

    let btnres = document.getElementById("btn");   
        btnres.onclick = calcularprecio;

function agregar(){ 
    let e =new Number(0);
    let res = parseFloat(document.form1.inp3.value)
    e=res;
    document.form1.camp1.value=(e);

}
  

     
$("#btnen").click(function(){
    $("#div1").append("<br><input type='text' eadonly='readonly' class='inputres' id='camp1' value="+e+")></input>'");
    alert(e)
});

/* <input type="number" readonly="readonly" id="camp1"></input> */


/* let env = document.getElementById("btnen");
    env.onclick = agregar; */


/* $(document).ready(function(){
    console.log("listo")
}); */