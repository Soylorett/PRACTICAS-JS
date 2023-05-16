let d =document.querySelector("#d")
let m = document.querySelector("#m")

d.oninput=()=>{signo()}
m.oninput=()=>{signo()}

const signo=()=> {
document.querySelector("#vd").innerHTML.value
document.querySelector("#fecha").innerHTML=`FECHA ${d.value} de ${m.value}`
let di = parseInt(di.value)
let signo=""
switch(m.value){
    case"Enero": signo=(di>=20)?"CAPRICORNIO":"ACUARIO";break;
    case"Febrero": signo=(di>=20)?"ACUARIO":"PISCIS";break;
    case"Marzo": signo=(di>=20)?"PISCIS":"ARIES";break;
    case"Abrl": signo=(di>=20)?"ARIES":"TAURO";break;
    case"Mayo": signo=(di>=20)?"TAURO":"GEMINIS";break;
    case"Junio": signo=(di>=20)?"GEMINIS":"CANCER";break;
    case"Julio": signo=(di>=20)?"CANCER":"LEO";break;
    case"Agosto": signo=(di>=20)?"LEO":"VIRGO";break;
    case"Septiembre": signo=(di>=20)?"VIRGO":"LIBRA";break;
    case"Octubre": signo=(di>=20)?"LIBRA":"ESCORPION";break;
    case"Noviembre": signo=(di>=20)?"ESCORPION":"SAGITARIO";break;
    case"Diciembre": signo=(di>=20)?"SAGITARIO":"CAPRICORNIO";break;

}
document.querySelector("#signo").innerHTML=signo;

}