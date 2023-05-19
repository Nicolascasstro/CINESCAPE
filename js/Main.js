function animadas(){

    let contAventuras = document.getElementById('aventuras');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

   
    contAnimadas.classList.add("active");
    contAventuras.classList.remove("active");
    contDramas.classList.remove("active");

    botonAnimadas.classList.add("active");
    botonAventuras.classList.remove("active");
    botonDramas.classList.remove("active");

}

function dramas(){

    let contAventuras = document.getElementById('aventuras');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

   
    contAnimadas.classList.remove("active");
    contAventuras.classList.remove("active");
    contDramas.classList.add("active");

    botonAnimadas.classList.remove("active");
    botonAventuras.classList.remove("active");
    botonDramas.classList.add("active");

}

function aventuras(){

    let contAventuras = document.getElementById('aventuras');
    let contAnimadas = document.getElementById('animadas');
    let contDramas = document.getElementById('dramas');

    let botonAventuras = document.getElementById('btn-aventuras');
    let botonDramas = document.getElementById('btn-dramas');
    let botonAnimadas = document.getElementById('btn-animadas');

    contAnimadas.classList.remove("active");
    contAventuras.classList.add("active");
    contDramas.classList.remove("active");

    botonAnimadas.classList.remove("active");
    botonAventuras.classList.add("active");
    botonDramas.classList.remove("active");

   

}

function modal(){

    let ContModal = document.getElementById("modal");

    ContModal.classList.add("active");
}

function cerrarM(){
    
    let ContModal = document.getElementById("modal");

    ContModal.classList.remove("active");

}

function activarMenu(){
    
    let ContMenu = document.getElementById("menu");
    ContMenu.classList.toggle("active");
    
}