const cambiar=()=>{
    let div= document.querySelector("#item")
    let colorFondo=document.querySelector("#color").value;
    let colorTex=document.querySelector("#colort").value;
    let figura=document.querySelector("#figura").value;
    let br= (figura=="1")?"0%":"100%"
    let texto=document.querySelector("#texto").value;
    let ancho=document.querySelector("#ancho").value;
    let alto=document.querySelector("#alto").value;
    div.style.width=ancho+"px"
    div.style.height=alto+"px"
    div.innerHTML=texto
    div.style.borderRadius=br
    div.style.background=colorFondo;
    div.style.color=colorTex;
}
