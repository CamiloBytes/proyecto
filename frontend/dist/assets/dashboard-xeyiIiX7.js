import"./modulepreload-polyfill-B5Qt9EMX.js";import"./hamburger-BfA7E000.js";/* empty css             */import{a as L}from"./index-NIGUFBhG.js";import{b as S,c as A}from"./main-BZgMBzPQ.js";import{a as I}from"./cart-Csf3sPQ4.js";import"./auth-interceptor-CwbVBbW_.js";import"./logout-DGqXLZQJ.js";const p=document.getElementById("card-section"),T=document.getElementById("category-section");let f=[];function N(e){return`
        <article class="card">
            <img src="${e.image_url}" alt="${e.name_product}" class="card-img">
            <div class="overlay"></div>
            <div class="content">
                <h2>${e.name_product}</h2>
                <div class="price">
                <h3>${e.stock} L</h3> <!-- Mostrar el stock (por ejemplo, en litros) -->
                <h3>$${e.price.toLocaleString()}</h3> <!-- Mostrar el precio -->
            </div>
            <p>vendido por: <strong>Carulla</strong></p>
            </div>
                <a href="#" class="swipe-btn add-to-cart-btn" data-product-id="${e.id_product}">
                <span>Agrega al carrito</span>
            <div class="arrows"><span>›</span><span>›</span></div>
        </a>
        </article>
    `}function g(e){p.innerHTML="",e.length>0?(e.forEach(n=>{p.innerHTML+=N(n)}),q(e)):p.innerHTML="<p>No hay productos disponibles.</p>"}L.get(S).then(e=>{f=e.data,g(f),k()}).catch(e=>{console.error("Error al cargar los productos:",e),p.innerHTML="<p>Error al cargar los productos.</p>"});function q(e){document.querySelectorAll(".add-to-cart-btn").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault();const a=parseInt(n.getAttribute("data-product-id")),o=e.find(r=>r.id_product===a);o&&(I(o),w(`Producto "${o.name_product}" agregado al carrito`,"success"))})})}function k(){const e=T.querySelectorAll(".category-item"),n=["TODAS","FRUTAS Y VERDURAS","GRANOS Y CEREALES","LACTEOS Y DERIVADOS","RES, POLLO Y PESCADO"],t=document.getElementById("current-category-label");e.forEach((a,o)=>{a.addEventListener("click",()=>{if(o===0)g(f),t.textContent="";else{const r=o,c=f.filter(d=>d.id_category===r);g(c),t.textContent=`: ${n[o]}`}})})}function w(e,n="info"){const t=document.createElement("div");t.className=`notification notification-${n}`,t.textContent=e,t.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${n==="success"?"#4caf50":"#2196f3"};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `,document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease-in",setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},300)},3e3)}const $=document.createElement("style");$.textContent=`
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;document.head.appendChild($);console.log("Módulo de búsqueda cargado correctamente");async function m(){console.log("Función buscar() ejecutada");const e=document.getElementById("searchInput"),n=e?e.value:"";if(console.log("Query de búsqueda:",n),!n){console.log("Query vacío, mostrando alerta"),alert("Por favor ingrese algo para buscar.");return}const t=`${A}${encodeURIComponent(n)}`;console.log("Endpoint de búsqueda:",t);try{console.log("Realizando petición a la API...");const a=await L.get(t);console.log("Respuesta recibida:",a.data),_(a.data)}catch(a){console.error("Hubo un problema con la petición:",a);const o=document.getElementById("resultados");o&&(o.innerHTML="<p>Error al realizar la búsqueda. Intente nuevamente.</p>")}}function _(e){const n=document.getElementById("resultados");if(n.innerHTML="",!Array.isArray(e)||e.length===0){n.innerHTML='<p class="no-results">No se encontraron resultados para tu búsqueda.</p>';return}const t=document.createElement("h2");t.textContent=`Resultados de búsqueda (${e.length} productos encontrados)`,t.className="search-results-title",n.appendChild(t);const a=document.createElement("section");a.id="card-section",a.className="search-results-grid",e.forEach(o=>{const r=document.createElement("article");r.className="card";const c=document.createElement("img");c.src=o.image_url||"../assets/img/leche.jpg",c.alt=o.name_product,c.className="card-img";const d=document.createElement("div");d.className="overlay";const s=document.createElement("div");s.className="content";const h=document.createElement("h2");h.textContent=o.name_product;const l=document.createElement("div");l.className="price";const y=document.createElement("h3");y.textContent=`${o.stock} disponibles`;const E=document.createElement("h3");E.textContent=`$${o.price.toLocaleString()}`,l.appendChild(y),l.appendChild(E);const C=document.createElement("p");C.innerHTML=`vendido por: <strong>${o.shop_name}</strong>`;const i=document.createElement("a");i.href="#",i.className="swipe-btn add-to-cart-btn",i.setAttribute("data-product-id",o.id_product);const b=document.createElement("span");b.textContent="Agrega al carrito";const u=document.createElement("div");u.className="arrows";const v=document.createElement("span");v.textContent="›";const x=document.createElement("span");x.textContent="›",u.appendChild(v),u.appendChild(x),i.appendChild(b),i.appendChild(u),s.appendChild(h),s.appendChild(l),s.appendChild(C),s.appendChild(i),r.appendChild(c),r.appendChild(d),r.appendChild(s),a.appendChild(r)}),n.appendChild(a),M(e)}function M(e){document.querySelectorAll(".add-to-cart-btn").forEach(n=>{n.addEventListener("click",t=>{t.preventDefault();const a=parseInt(n.getAttribute("data-product-id")),o=e.find(r=>r.id_product===a);o&&(I(o),O(`Producto "${o.name_product}" agregado al carrito`,"success"))})})}function O(e,n="info"){const t=document.createElement("div");t.className=`notification notification-${n}`,t.textContent=e,t.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${n==="success"?"#4caf50":"#2196f3"};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `,document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease-in",setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},300)},3e3)}if(!document.querySelector("#notification-styles")){const e=document.createElement("style");e.id="notification-styles",e.textContent=`
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `,document.head.appendChild(e)}function R(){console.log("Configurando event listeners de búsqueda...");const e=document.querySelector(".container-search .btn");console.log("Botón de búsqueda encontrado:",e),e&&e.addEventListener("click",function(){console.log("Botón de búsqueda clickeado"),m()});const n=document.getElementById("searchInput");console.log("Input de búsqueda encontrado:",n),n&&n.addEventListener("keypress",function(a){a.key==="Enter"&&(console.log("Enter presionado en input de búsqueda"),m())});const t=document.querySelector(".container-search .btn i");t&&t.addEventListener("click",function(){console.log("Ícono de búsqueda clickeado"),m()})}document.addEventListener("DOMContentLoaded",function(){R()});window.buscar=m;
