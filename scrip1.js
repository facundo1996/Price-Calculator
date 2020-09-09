var sumario = 0;

/* Calcula el valor de los productos usados */
$("#btn").click(function(){
    var a=parseFloat(document.form1.inp.value);
    var b=parseFloat(document.form1.inp1.value);
    var c=parseFloat(document.form1.inp2.value);
    var d=new Number(0);

    if ( a < 0){
        alert("Ese precio no es valido");
        return false;
    }
    else {
        if(b < 0){
            alert("Esa cantidad no corresponde")
            return false;
        }
        else{
            if(c < 0) {
                alert("La cantidad que usaste no es valida")
                return false;
            }
        }
    }

    d=(a/b)*c;
    document.form1.inp3.value=d;

})




/* Envia el calculo a la lista y lo suma */
$("#btnen").click(function(){
    var pregunta_falta_numero = (document.form1.inp3.value)
    let nombrepro = (document.form1.inppro.value); 

    var cant_de_uso = parseFloat(document.form1.inp2.value);
    var medida_de_uso = (document.form1.medida.value)
    
    if (nombrepro === ""){
        alert("Ingresa Nombre de producto");
        return false;
    }else if (pregunta_falta_numero === ""){
        alert("Faltan llenar datos.")
        return false
    }
    
    let e = 0;
    let res = parseFloat(document.form1.inp3.value);
    
    e=res;
    sumario = sumario+e;
    
    $("#tabl2").append("<tr><td>"+nombrepro+" x "+cant_de_uso+""+medida_de_uso+"</td><td><input type='text' readonly='readonly' class='inputres' id='camp1' value=$"+e.toFixed(2)+"ºº></td></tr>");
    $("#div3").html("<p class='sumarioNum'>Total = $"+sumario.toFixed(2)+"°°</p>")

})

/* Limpia todos los inputs */
$("#limpiar").click(function(){
    var cero ="";
    var r=parseFloat(document.form1.inp.value);
    var r1=parseFloat(document.form1.inp1.value);
    var r2=parseFloat(document.form1.inp2.value);
    var r3=parseFloat(document.form1.inppro.value);
    var r2=parseFloat(document.form1.inp3.value);
    r=cero;
    r1=cero;
    r2=cero;
    r3=cero;
    r4=cero;
    document.form1.inp.value=r;
    document.form1.inp1.value=r1;
    document.form1.inp2.value=r2;
    document.form1.inp3.value=r4;
    document.form1.inppro.value=r3;
})

/* Convierte el nombre del porducto en texto */
$("#botonproducto").click(function(){
    var nombreproducto = 0;
    var nombreinppro = (document.form1.producto.value);
    nombreproducto = nombreinppro;
    $("#div2").html(""+nombreproducto+"");
})
