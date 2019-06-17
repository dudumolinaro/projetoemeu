var el = document.getElementById('fora');
el.addEventListener('click', function(e) {
    //alert(e.target.id);
    let pId, spanId, hidspanId, hidspanId2;
    
    pId = "0" + e.target.id;
    spanId = "00" + e.target.id;
    hidspanId = "000" + e.target.id;
    hidspanId2 = "0000" + e.target.id;

    let img = document.getElementById(e.target.id).getAttribute("src"),
        titulo = document.getElementById(pId).innerHTML,
        data = document.getElementById(spanId).innerHTML;
        sinopse = document.getElementById(hidspanId).innerHTML;
        preco = document.getElementById(hidspanId2).innerHTML;

    document.getElementById('modalimg').src = img;
    document.getElementById("modaltitulo").innerHTML = titulo;
    document.getElementById("modaldata").innerHTML = data;
    document.getElementById("modalsinopse").innerHTML = sinopse;
    document.getElementById("modalpreco").innerHTML = preco;

});