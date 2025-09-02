import"./modulepreload-polyfill-B5Qt9EMX.js";import"./hamburger-BfA7E000.js";/* empty css             */import"./logout-DGqXLZQJ.js";import"./auth-interceptor-CwbVBbW_.js";import{a as d}from"./index-NIGUFBhG.js";import{b as l}from"./main-BZgMBzPQ.js";const h="http://localhost:8000";class f{constructor(){this.shop=null,this.userId=null,this.init()}async init(){try{const e=localStorage.getItem("user");if(!e){console.error("No auth user data found");return}const t=JSON.parse(e);this.userId=t.user_id,await this.loadShop(),this.setupEventListeners()}catch(e){console.error("Error initializing MyShop:",e)}}async loadShop(){try{const e=await d.get(`${h}/shops?skip=0&limit=100`);if(!e||e.status!==200)throw new Error("Failed to fetch shops");const t=e.data;this.shop=t.find(i=>i.id_user===this.userId),console.log("Found shop for user:",this.shop),this.shop&&(window.currentShopId=this.shop.id_shop,window.currentShopName=this.shop.shop_name,window.fetchProducts&&window.fetchProducts()),this.renderShop()}catch(e){console.error("Error loading shop:",e)}}renderShop(){const e=document.getElementById("shopContainer");console.log("Rendering shop, container found:",!!e,"shop exists:",!!this.shop),e&&(this.shop?(e.innerHTML=`
            <div class="container_shop">
            <div class="container_icon">
                ${this.shop.logo_url?`<img src="${this.shop.logo_url}" alt="Logo de la tienda">`:"No disponible"}</p>
            </div>
            <h2>${this.shop.shop_name}</h2>
            </div>
                <div id="shopDisplay">
                    <p><strong>Descripción:</strong> ${this.shop.description||""}</p>
                    <p><strong>Dirección:</strong> ${this.shop.shop_address||""}</p>
                    <button id="editShopBtn">Editar</button>
                </div>
                <div id="shopFormContainer" style="display:none;">
                    <form id="shopForm" enctype="multipart/form-data">
                        <label for="shop_name">Nombre de la tienda:</label>
                        <input type="text" id="shop_name" name="shop_name" value="${this.shop.shop_name}" required>

                        <label for="description">Descripción:</label>
                        <textarea id="description" name="description" required>${this.shop.description||""}</textarea>

                        <label for="shop_address">Dirección:</label>
                        <input type="text" id="shop_address" name="shop_address" value="${this.shop.shop_address||""}">

                        <label for="logo">Logo de la tienda (opcional - deja vacío para mantener el actual):</label>
                        <input type="file" id="logo" name="logo" accept="image/*">

                        <button type="submit">Actualizar Tienda</button>
                        <button type="button" id="cancelEditBtn">Cancelar</button>
                    </form>
                </div>
            `,document.getElementById("editShopBtn").addEventListener("click",()=>{document.getElementById("shopDisplay").style.display="none",document.getElementById("shopFormContainer").style.display="block"}),document.getElementById("cancelEditBtn").addEventListener("click",()=>{document.getElementById("shopFormContainer").style.display="none",document.getElementById("shopDisplay").style.display="block"})):e.innerHTML=`
                <h3>Crear Tienda</h3>
                <form id="shopForm" enctype="multipart/form-data">
                    <label for="shop_name">Nombre de la tienda:</label>
                    <input type="text" id="shop_name" name="shop_name" required>

                    <label for="description">Descripción:</label>
                    <textarea id="description" name="description" required></textarea>

                    <label for="shop_address">Dirección:</label>
                    <input type="text" id="shop_address" name="shop_address">

                    <label for="logo">Logo de la tienda:</label>
                    <input type="file" id="logo" name="logo" accept="image/*" required>

                    <button type="submit">Crear Tienda</button>
                </form>
            `)}setupEventListeners(){document.addEventListener("submit",async e=>{e.target&&e.target.id==="shopForm"&&(e.preventDefault(),await this.handleFormSubmit(e.target))})}async handleFormSubmit(e){const t=new FormData(e),i=t.get("shop_name")?.trim(),c=t.get("description")?.trim();if(!i||i.length<2){alert("El nombre de la tienda debe tener al menos 2 caracteres.");return}if(!c){alert("La descripción es obligatoria.");return}let s=t.get("shop_address")?.trim();if(s&&s.length<2){alert("La dirección debe tener al menos 2 caracteres si se proporciona.");return}try{let a;const r=t.get("logo");if(this.shop)if(r){const n=new FormData;n.append("id_user",Number(this.userId)||0),n.append("shop_name",i),n.append("description",c),n.append("shop_address",s||""),n.append("is_active",!0),n.append("logo",r),a=await d.put(`${h}/shops/upload/${this.shop.id_shop}`,n,{headers:{"Content-Type":"multipart/form-data"}})}else{const n={id_user:Number(this.userId)||0,shop_name:i,description:c,shop_address:s||null,logo_url:this.shop.logo_url,is_active:!0};a=await d.put(`${h}/shops/${this.shop.id_shop}`,n)}else{if(!r){alert("Por favor selecciona un archivo de imagen para el logo.");return}const n=new FormData;n.append("id_user",Number(this.userId)||0),n.append("shop_name",i),n.append("description",c),n.append("shop_address",s||""),n.append("is_active",!0),n.append("logo",r),a=await d.post(`${h}/shops/upload`,n,{headers:{"Content-Type":"multipart/form-data"}})}if(!a||a.status!==200&&a.status!==201){alert("No se pudo guardar la tienda");return}this.shop=a.data,window.currentShopId=this.shop.id_shop,window.currentShopName=this.shop.shop_name,alert("Tienda guardada exitosamente"),this.renderShop(),window.fetchProducts&&window.fetchProducts()}catch(a){console.error("Error saving shop:",a),alert(a.response?.data?.detail||"Error al guardar la tienda")}}}document.addEventListener("DOMContentLoaded",()=>{new f});const u=document.getElementById("show-form-btn"),m=document.getElementById("form-container"),y=document.getElementById("product-list");let p=null;function _(o={}){m.innerHTML=`
    <input type="text" id="name_product" placeholder="Nombre del producto" value="${o.name_product||""}" required>
    <input type="number" id="stock" placeholder="Cantidad del producto" value="${o.stock||""}" min="0" required>
    <input type="number" step="0.01" id="price" placeholder="Valor unitario" value="${o.price||""}" min="0" required>
    <input type="text" id="product_description" placeholder="Descripción (opcional)" value="${o.product_description||""}">
    <input type="file" id="image_file" accept="image/*" ${p?"disabled":""}>
    <select id="id_category" required>
      <option value="">-- Selecciona una categoría --</option>
      <option value="1" ${o.id_category==1?"selected":""}>Frutas y verduras</option>
      <option value="2" ${o.id_category==2?"selected":""}>Granos y cereales</option>
      <option value="3" ${o.id_category==3?"selected":""}>Lácteos y derivados</option>
      <option value="4" ${o.id_category==4?"selected":""}>Res, pollo y pescado</option>
    </select>
    <button id="submitBtn">${p?"Actualizar":"Agregar"}</button>
    <button id="cancelBtn" style="display: ${p?"inline":"none"};">Cancelar</button>
  `,document.getElementById("submitBtn").onclick=v,document.getElementById("cancelBtn").onclick=()=>{p=null,m.innerHTML="",u.style.display="inline-block"}}u.addEventListener("click",()=>{_(),u.style.display="none"});async function g(){if(!window.currentShopId){console.log("Shop not loaded yet, skipping fetchProducts");return}const o=`${l}/shop/${window.currentShopId}`,t=(await d.get(o)).data;b(t)}window.fetchProducts=g;function b(o){y.innerHTML="",o.forEach(e=>{const t=document.createElement("article");t.classList.add("card"),t.innerHTML=`
      <img src="${e.image_url||""}" alt="${e.name_product}" class="card-img">
      <div class="overlay"></div>
      <div class="content">
        <h2>${e.name_product}</h2>
        <div class="price">
          <h3>${e.stock} L</h3>
          <h3>$${e.price.toLocaleString()}</h3>
        </div>
        <p>vendido por: <strong>${window.currentShopName||"Mi Tienda"}</strong></p>
      </div>
      <div class="buttons">
        <button data-id="${e.id_product}" class="editBtn">Editar</button>
        <button data-id="${e.id_product}" class="deleteBtn">Eliminar</button>
      </div>
    `,t.querySelector(".editBtn").onclick=()=>w(e.id_product),t.querySelector(".deleteBtn").onclick=()=>$(e.id_product),y.appendChild(t)})}async function v(){const o=document.getElementById("name_product").value.trim(),e=parseInt(document.getElementById("stock").value),t=parseFloat(document.getElementById("price").value),i=document.getElementById("product_description").value.trim(),c=document.getElementById("image_file").files[0],s=parseInt(document.getElementById("id_category").value);if(!o||isNaN(e)||e<0||isNaN(t)||t<0||isNaN(s)){alert("Por favor, completa correctamente todos los campos requeridos.");return}if(!window.currentShopId){alert("Tienda no cargada, por favor recarga la página");return}const a=window.currentShopId;try{if(p){const r={name_product:o,stock:e,price:t,product_description:i,id_shop:a,product_star_rate:0,id_category:s},n=await d.put(`${l}/${p}`,r);p=null}else if(c){const r=new FormData;r.append("id_shop",a),r.append("name_product",o),r.append("product_description",i||""),r.append("price",t),r.append("stock",e),r.append("product_star_rate",0),r.append("id_category",s),r.append("image",c);const n=await d.post(`${l}/upload`,r,{headers:{"Content-Type":"multipart/form-data"}})}else{const r={name_product:o,stock:e,price:t,product_description:i,id_shop:a,image_url:"",product_star_rate:0,id_category:s},n=await d.post(l,r)}m.innerHTML="",u.style.display="inline-block",g()}catch(r){alert(r.response?.data?.detail||r.message)}}async function w(o){try{const t=(await d.get(`${l}/${o}`)).data;p=o,_(t),u.style.display="none"}catch(e){alert(e.message)}}async function $(o){if(confirm("¿Estás seguro de eliminar este producto?"))try{const e=await d.delete(`${l}/${o}`);g()}catch(e){alert(e.message)}}
