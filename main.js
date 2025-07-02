
const products = [
    //producto 1
    {
        name: "Filete de ternera ecológica",
        price: "7,28 €",
        seller: "Cárnicas Málaga",
        tipo : "ternera",
        link: "https://carneecologicafincasarbil.com/product/filete-de-ternera-extra-500gr-aprox/",
        img: "https://carneecologicafincasarbil.com/14595-large_default/filete-de-ternera-extra-500gr-aprox.jpg",
    },
    //producto 2
    {
        name: "Carne picada de ternera ecológica",
        price: "5,23 €",
        seller: "Cárnicas Málaga",
        tipo: "ternera",
        link: "https://carneecologicafincasarbil.com/product/picadillo-de-ternera/",
        img: "https://carneecologicafincasarbil.com/2424-large_default/picadillo-de-ternera.jpg",
    },
    //producto 3
    {
        name: "Huesos de ternera ecológica",
        price: "6,58 €",
        seller: "La Dehesa de Luis",
        tipo: "ternera",
        link: "https://carneecologicafincasarbil.com/product/huesos-de-ternera/",
        img: "https://carneecologicafincasarbil.com/2430-large_default/huesos-de-ternera.jpg",
    },
    //producto 4
    {
        name: "Hígado de ternera ecológica",
        price: "9,36 €",
        seller: "La Finca de Paco",
        tipo: "ternera",
        link: "https://carneecologicafincasarbil.com/product/higado-ternera/",
        img: "https://carneecologicafincasarbil.com/2428-large_default/higado-ternera.jpg",
    },
    //producto 5
    {
        name: "Hamburguesas de ternera ecológica",
        price: "4,40 €",
        seller: "La Finca de Paco",
        tipo: "ternera",
        link: "https://carneecologicafincasarbil.com/product/hamburguesa-de-ternera/",
        img: "https://carneecologicafincasarbil.com/14586-large_default/hamburguesa-de-ternera.jpg",
    },
    //producto 6
    {
        name: "Hígado de pollo ecológico",
        price: "4,66 €",
        seller: "Cárnicas Jabugo",
        tipo: "pollo",
        link: "https://carneecologicafincasarbil.com/product/higado-de-pollo-500-gr/",
        img: "https://carneecologicafincasarbil.com/14611-medium_default/higado-de-pollo-500-gr.jpg",
    },
    //producto 7
    {
        name: "Pechugas de pollo ecológico",
        price: "4,59 €",
        seller: "Cárnicas Jabugo",
        tipo: "pollo",
        link: "https://carneecologicafincasarbil.com/product/pechugas-de-pollo/",
        img: "https://carneecologicafincasarbil.com/14600-large_default/pechugas-de-pollo.jpg",
    },
    //producto 8
    {
        name: "Muslo de pollo ecológico",
        price: "7,82 €",
        seller: "Jabega Salamanca",
        tipo: "pollo",
        link : "https://carneecologicafincasarbil.com/product/muslos-de-pollo/",
        img: "https://carneecologicafincasarbil.com/14602-medium_default/muslos-de-pollo.jpg",
    },
    //producto 9
    {
        name: "Muslitos de pollo ecológico",
        price: "7,26 €",
        seller: "Cárnicas Málaga",
        tipo: "pollo",
        link: "https://carneecologicafincasarbil.com/product/muslos-pollo/",
        img: "https://carneecologicafincasarbil.com/5837-medium_default/pollo-ecologico-entero-despiezado-25kgs-aprox.jpg",
    },
    //producto 10
    {
        name: "Contramuslos de pollo ecológico",
        price: "9,02 €",
        seller: "Ganadería Juan",
        tipo: "pollo",
        link: "https://carneecologicafincasarbil.com/product/contramuslo-450-gr/",
        img: "https://carneecologicafincasarbil.com/5808-medium_default/contramuslo-450-gr.jpg",
    },
];

//Construcción del Header
const header = document.createElement("header");
document.body.appendChild(header);

//Sección logo del header
const logoSection = document.createElement("section");
logoSection.className = "header-logo";

const logoImg = document.createElement("img");
logoImg.className = "logo2";
logoImg.alt = "Filete";
logoImg.src = "data:image/png;base64,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";

const logoH1 = document.createElement("h1");
logoH1.innerText = "El Prado Carnívoro";

const logoImg2 = document.createElement("img");
logoImg2.className = "logo";
logoImg2.src = "data:image/png;base64,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";
logoImg2.alt = "Filete";

header.appendChild(logoSection);
logoSection.appendChild(logoImg);
logoSection.appendChild(logoH1);
logoSection.appendChild(logoImg2);

const h2 = document.createElement("h2");
h2.innerText = "La mejor carne de pasto ecológica del país";
header.appendChild(h2);

/* ------- MENÚ DE NAVEGACIÓN ------- */
const nav = document.createElement("nav");
header.appendChild(nav);

const ulNav = document.createElement("ul");
ulNav.className = "nav-menu";
nav.appendChild(ulNav);

const divNav = document.createElement("div");
divNav.className = "menu-info";
ulNav.appendChild(divNav);

const liDiv = document.createElement("li");
const aLi = document.createElement("a");
aLi.href = "";
aLi.innerText = "¿Quiénes somos?";
divNav.appendChild(liDiv);
liDiv.appendChild(aLi);

const liDiv2 = document.createElement("li");
const aLi2 = document.createElement("a");
aLi2.href ="";
aLi2.innerText = "Origen de nuestras carnes";
divNav.appendChild(liDiv2);
liDiv2.appendChild(aLi2);

const divNav2 = document.createElement("div");
divNav2.className = "menu-user";
ulNav.appendChild(divNav2);

const li1 = document.createElement("li");
const lia1 = document.createElement("a");
lia1.href ="";
lia1.innerText = "Registrarte / Iniciar Sesión";

const li2 = document.createElement("li");
const lia2 = document.createElement("a");
lia2.href ="";
lia2.innerText = "Cesta";


divNav2.appendChild(li1);
li1.appendChild(lia1);
divNav2.appendChild(li2);
li2.appendChild(lia2);

/* --- GENERAMOS EL MAIN --- */
const main = document.createElement("main");
document.body.appendChild(main);

/* Dentro del MAIN, generamos un div que será el global-container */
const global_container = document.createElement("div");
global_container.className = "global-container";
main.appendChild(global_container);

/* Dentro del GLOBAL-CONTAINER, insertamos un article DESCRIPCIÓN */
const articleDescription = document.createElement("article");
articleDescription.className = "description";
const descriptionH2 = document.createElement("h2");
descriptionH2.innerText = "¿Por qué la carne de pasto?";
const pDescription = document.createElement("p");
pDescription.textContent = "En El Prado Carnívoro, creemos que la carne ecológica de pasto es más que un placer: es una elección poderosa. Proveniente de vacas criadas en libertad y alimentadas naturalmente, esta carne es rica en omega-3, antioxidantes y sabor, cuidando tu salud como ninguna otra. Además, al respetar los ciclos de la naturaleza, reducimos el impacto ambiental y promovemos suelos más sanos. Y lo mejor: nuestras vacas viven felices, pastando en prados verdes, porque el bienestar animal es el corazón de lo que hacemos. ¡Saborea la diferencia, vive mejor!"; 
articleDescription.appendChild(descriptionH2);
articleDescription.appendChild(pDescription);
global_container.appendChild(articleDescription);

/* --- SECCIÓN CON EL LISTADO DE PRODUCTOS ---*/


const products_section = document.createElement("section");
products_section.className = "products";
global_container.appendChild(products_section);


const listadoProductos = document.createElement("ul");
listadoProductos.className = "products-list";
products_section.appendChild(listadoProductos);

//CREAMOS LAS CARTAS QUE CONFORMARÁN EL LISTADO DE PRODUCTOS

    function crearProductos(){
    products.forEach(product => {
    const li = document.createElement("li");
    li.className = "card";
    listadoProductos.appendChild(li);

    const a = document.createElement("a");
    a.href = product.link;
    li.appendChild(a);

    const img = document.createElement("img");
    img.src = product.img;
    a.appendChild(img);

    const h2 = document.createElement("h2");
    h2.innerText = product.name;
    li.appendChild(h2);

    const seller = document.createElement("p");
    seller.innerText = product.seller;
    li.appendChild(seller);

    const p = document.createElement("p");
    p.innerText = product.price;
    li.appendChild(p);
})};

crearProductos();







/* SECCIÓN A LA IZQUIERDA DE LA WEB => LEFT-ASIDE */

const left_aside = document.createElement("aside");
left_aside.className = "left-aside";
global_container.appendChild(left_aside);

const filterByCategory = document.createElement("section");
filterByCategory.className = "category";
left_aside.appendChild(filterByCategory);

const asideH2=  document.createElement("h2");
asideH2.innerText = "Categorías";
filterByCategory.appendChild(asideH2);

const ul_aside = document.createElement("ul");
filterByCategory.appendChild(ul_aside);

const categories = [
    "ternera",
    "pollo",
    "Todo",
];

categories.forEach( category => {
    const li = document.createElement("li");
    ul_aside.appendChild(li);
    const p = document.createElement("p");
    p.innerText = category;
    li.appendChild(p);
    
    p.addEventListener("click", (ev)=>{
        
        switch(ev.target.innerText){
            case "ternera": 
                listadoProductos.innerHTML = "";
                crearProductosTernera();
                break;
            case "pollo": 
                listadoProductos.innerHTML ="";
                crearProductosPollo();
                break;
            case "Todo": 
                listadoProductos.innerHTML ="";
                crearProductos();
                break;

        }
    })
});

/* SECCIÓN DE SOCIAL MEDIA */

const socialMediaSection = document.createElement("section");
socialMediaSection.className = "social-media";
left_aside.appendChild(socialMediaSection);

const h2Social = document.createElement("h2");
h2Social.innerText = "Nuestras Redes";
socialMediaSection.appendChild(h2Social);

const ul_social = document.createElement("ul");
socialMediaSection.appendChild(ul_social);

const redes = ["Instagram", "X", "Facebook", "Whatsapp"];

redes.forEach(red => {
    const li = document.createElement("li");
    ul_social.appendChild(li);
    const a = document.createElement("a");
    a.href = "";
    a.innerText = red;
    li.appendChild(a);

});


/* FOOTER */

const footer = document.createElement("footer");
document.body.appendChild(footer);

const ul_footer = document.createElement("ul");
ul_footer.className = "politics";
footer.appendChild(ul_footer);

const itemsFooter = [
    "Política de Reembolso",
    "Política de Privacidad",
    "Términos del Servicio",
    "Política de Envío",
    "Política de Cancelación",
    "Aviso Legal",
];

itemsFooter.forEach(item => {
    const li = document.createElement("li");
    ul_footer.appendChild(li);

    const a = document.createElement("a");
    a.href = "";
    a.innerText = item;
    li.appendChild(a);
});

const p_footer = document.createElement("p");
p_footer.innerText = "Copyright 2025 - El Prado Carnívoro";
footer.appendChild(p_footer);


/* FUNCIONES DE FILTRADO DE PRODUCTOS */


// FILTRADO PRODUCTOS POLLO
function crearProductosPollo(){
    
    products.forEach(product => {

        if(product.tipo == "pollo"){

            const li = document.createElement("li");
            li.className = "card";
            listadoProductos.appendChild(li);

            const a = document.createElement("a");
            a.href = product.link;
            li.appendChild(a);

            const img = document.createElement("img");
            img.src = product.img;
            a.appendChild(img);

            const h2 = document.createElement("h2");
            h2.innerText = product.name;
            li.appendChild(h2);

            const seller = document.createElement("p");
            seller.innerText = product.seller;
            li.appendChild(seller);

            const p = document.createElement("p");
            p.innerText = product.price;
            li.appendChild(p);
        }
    });
}

//FILTRADO PRODUCTOS TERNERA

function crearProductosTernera(){
    
    products.forEach(product => {

        if(product.tipo == "ternera"){

            const li = document.createElement("li");
            li.className = "card";
            listadoProductos.appendChild(li);

            const a = document.createElement("a");
            a.href = product.link;
            li.appendChild(a);

            const img = document.createElement("img");
            img.src = product.img;
            a.appendChild(img);

            const h2 = document.createElement("h2");
            h2.innerText = product.name;
            li.appendChild(h2);

            const seller = document.createElement("p");
            seller.innerText = product.seller;
            li.appendChild(seller);

            const p = document.createElement("p");
            p.innerText = product.price;
            li.appendChild(p);
        }
    });
}



