const generar = () => {
    let n = parseInt(document.querySelector("#a").value);
    let x = parseInt(document.querySelector("#b").value);
    document.querySelector("#va").innerHTML = n
    document.querySelector("#vb").innerHTML = x
    let div = document.querySelector("#res");
    div.innerHTML="<img src='nose.gif' width='200px' height='200px'>";
    setTimeout(()=>{
    let r=(n*x)/2;
    div.innerHTML=r.toFixed(2);
  },2000);
  const borrar = () => {
    let borrarT = document.querySelector("#res").innerHTML = "";
  }
}