let btnEvaluar=document.querySelector("#evaluar")
btnEvaluar.onclick=()=>{
    var correctas=[1,1,3,1,2];
    var aciertos=0;
for(i=1; i<=5; i++){
    let r1=document.querySelector("#p"+i+"r1");
    let r2=document.querySelector("#p"+i+"r2");
    let r3=document.querySelector("#p"+i+"r3");
    let r4=document.querySelector("#p"+i+"r4");
    let r5=document.querySelector("#p"+i+"r5");

    if(!r1.checked&&!r2.checked&&!r3.checked&&!r4.checked&&!r5.checked){
    Swal.fire({
        icon:'error',
        title:'ERROR',
        text: 'FALTA SELECCIONAR RESPUESTA',
        footer:'Quiz' });
        return;
    }
    var correcta=document.querySelector("#p"+i+"r"+correctas[i-1]);
    if(correcta.checked){
    aciertos++;
    }
    if(aciertos>=3){
    Swal.fire({icon:'success',title:'APROBADO',text:'CALIFICACION: '+(aciertos*2),footer:'QUIZ'});
    }else{
    Swal.fire({icon:'error',title:'NO APROBADO',text:'CALIFICACION: '+(aciertos*2),footer:'QUIZ'});
    }
    
    
}

}