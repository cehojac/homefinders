import initializeSwipers from "./swiper.js";


//VARIABLES
const menuBar = document.querySelector('#menuBar');
const closeTimes = document.querySelector('#closeTimes');
const chevronMenu = document.querySelector('#chevronMenu');


//FUNCIONES

/* Funcion del menu bar y el icono de cerrar menu en dispositimo movil */
function iconMenuBar() {
  const openMenuBar = document.querySelector('#openMenuBar');
  document.body.className = 'body';
  openMenuBar.style.width = '50%';
}

function iconXmenu() {
  const openMenuBar = document.querySelector('#openMenuBar');
  openMenuBar.style.width = '0';
  document.body.classList.remove('body');
}

/* funcion abrir icon chevron del submenu del menu principal*/
function iconChevron() {
  const openChevronUl = document.querySelector('#openChevronUl');
  openChevronUl.classList.toggle('max-h-[400px]');
}


//EVENTOS

document.addEventListener("DOMContentLoaded", () => {

  /* Evento del icono del menu bar y el icono de cerrar menu en dispositimo movil */
  menuBar.addEventListener('click', iconMenuBar);
  closeTimes.addEventListener('click', iconXmenu);
  chevronMenu.addEventListener('click', iconChevron); 

  /* Inicializamos swiper */
  initializeSwipers();

});


//import dataApi from '/data/api.js';

//MENU-BAR
// const menuBar = document.getElementById("menuBar");
// const openSideNav = document.getElementById("openSideNav");
// const closeSideNav = document.getElementById("closeSideNav");

// menuBar.addEventListener("click", () => {
//   openSideNav.style.width = "20rem";
  
// });

// closeSideNav.addEventListener("click", () => {
//   openSideNav.style.width = "0";
  
// });

//SLIDER DE IMAGENES DE DESCRIPCION PROPIEDAD

const imageSrc = document.querySelectorAll(".image-src");

imageSrc.forEach((src) => {
  src.addEventListener("click", (e) => {
    const imgElement = e.target.querySelector("img"); // Obtener la imagen dentro del div
    const imagenPrincipal = document.getElementById("imagenPrincipal");

    const src = imgElement.getAttribute("src"); // Obtener el atributo src de la imagen
    imagenPrincipal.src = src;
  });
});

//ACORDEON 

const acordeonOpen = document.querySelectorAll('.acordeon-open');
const acordeonClose = document.querySelectorAll('.acordeon-close')

acordeonOpen.forEach(plus => {
  plus.addEventListener('click', (e) => {
    const acordeonClose = document.querySelector('.acordeon-close')
    const searchElement = e.target.parentNode.parentElement;
    const openDiv = searchElement.querySelector('.acordeon-content');

    plus.style.display = 'none';
    acordeonClose.style.display = 'block';
    openDiv.style.maxHeight = '100%';
    openDiv.style.transition = 'max-height 2s ease'
    console.log(openDiv);
  });
});

acordeonClose.forEach(cross => {
  cross.addEventListener('click', (e) => {
    const searchElement = e.target.parentNode.parentElement;
    const openDiv = searchElement.querySelector('.acordeon-content');
    const plus = searchElement.querySelector('.acordeon-open');  
    
    plus.style.display = 'block';
    cross.style.display = 'none';
    openDiv.style.maxHeight = '0';
    openDiv.style.transition = 'max-height .5s ease';
  });
});



// const rutaImagen = "/assets/image/" + nombreImagen;
// const imagenPrincipal = document.getElementById("imagenPrincipal");
// imagenPrincipal.src = rutaImagen;

//BUSCADOR DE PROPIEDADES (Filtracion de propiedades)

// const inputSearcHome = document.getElementById("inputSearcHome");

// const filterData = (searchTerm, data) => {
//     const regex = new RegExp(searchTerm, "i");
//     const filteredData = data.filter(item => regex.test(item.title));
//     console.log(filteredData); // Muestra los datos filtrados en la consola
//     return filteredData;
// };

// inputSearcHome.addEventListener('input', ()=> {
//     const ulSearcHome = document.getElementById("ulSearcHome");
//     const valueInput = inputSearcHome.value;
//     const resultFilter = filterData(valueInput, dataApi);

//     ulSearcHome.innerHTML = "";

//     resultFilter.forEach(data => {
//         const {image, title, state} = data;

//         // Limpiar contenido previo
//         ulSearcHome.innerHTML = '';

//         const resultFilter = `
//             <li class="h-auto flex items-center hover:bg-[#E7f6fd] rounded-2xl p-[.7rem] hover:text-primary cursor-pointer">
//                 <div class="ulSearcHome-dimension rounded-full overflow-hidden shadow mr-4">
//                   <a href="#" class="block w-full h-full">
//                     <img src="${image}" alt="${title}" class="h-full w-full object-cover">
//                   </a>
//                 </div>

//                 <div class="flex items-center justify-between w-full">
//                   <a href="#">
//                       <h3 class="text-[1.1rem] font-bold">${title}</h3>
//                   </a>
//                   <span class="block w-[16%] text-gray-500 text-start">${state}</span>
//                 </div>
//             </li>
//         `;

//         ulSearcHome.innerHTML += resultFilter;
//         ulSearcHome.style.display = "block";

// if (resultFilter.length > 0) {
//     ulSearcHome.innerHTML += resultFilter;
//     ulSearcHome.style.display = "block";
//     ulSearcHome.style.height = "275px";
//     ulSearcHome.style.transition = 'height 0.3s ease-in-out';
// }

//})
//});

//BOTON DEL BUSCADOR BUSQUEDA AVANZADA

// const btAdvanceSearch = document.getElementById('btAdvanceSearch');

// btAdvanceSearch.addEventListener('click', (e) => {
//     e.preventDefault();
//     const hideAdvancedSearch = document.getElementById('hideAdvancedSearch');
//     const searchContaint = document.getElementById('searchContaint');
//     hideAdvancedSearch.className = "block max-h-screen overflow-hidden transition-all duration-700 ease-in";
//     searchContaint.style.bottom = "-18vh";
// });

/*DETALLE DE LA BUSQUEDAD*/

// const detaiLayer = document.querySelectorAll(".detail-layer");

// detaiLayer.forEach(image => {
//     image.addEventListener('click', (e) => {
//         console.log(e.target);
//     });
// });

// console.log(detaiLayer);
