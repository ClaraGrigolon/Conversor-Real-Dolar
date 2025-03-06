function Conversor(){
    let r = parseFloat(document.getElementById("r").value);
    let dolar = r*5.75;
    document.getElementById("v").innerHTML = `U$ = ${dolar}`;
}