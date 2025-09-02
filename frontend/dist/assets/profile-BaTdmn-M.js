import"./modulepreload-polyfill-B5Qt9EMX.js";import"./hamburger-BfA7E000.js";import"./auth-interceptor-CwbVBbW_.js";import{a as c}from"./index-NIGUFBhG.js";import{d as m}from"./main-BZgMBzPQ.js";import{g as f}from"./cart-Csf3sPQ4.js";import"./logout-DGqXLZQJ.js";const i=document.getElementById("view-container"),l=document.getElementById("settings-section");async function y(){try{console.log("Loading user profile...");const e=await c.get(`${m}/me/profile`),t=e.data;console.log("API Response:",e),console.log("User data:",t);const s=document.getElementById("profile-name-display");s&&(console.log("Updating profile name to:",t.full_name),s.textContent=t.full_name);const n=document.getElementById("user-email-display");n&&(console.log("Updating email to:",t.email),n.innerHTML=`<strong>Correo:</strong> ${t.email}`);const a=document.getElementById("user-address-display");a&&t.user_address&&(console.log("Updating address to:",t.user_address),a.innerHTML=`<strong>Dirección:</strong> ${t.user_address}`);const o=document.getElementById("user-description-display");if(o&&t.created_at){const u=new Date(t.created_at).getFullYear();console.log("Updating description with year:",u),o.innerHTML=`<strong>Descripción:</strong> Usuario registrado desde ${u}`}console.log("User profile loaded successfully:",t)}catch(e){console.error("Error loading user profile:",e),console.error("Error details:",e.response),e.response&&e.response.status===401?(localStorage.removeItem("user"),window.location.href="./auth.html"):alert("Error al cargar el perfil del usuario")}}document.addEventListener("DOMContentLoaded",y);let r={};function h(e){let t,s,n,a,o;e==="name"?(t=document.getElementById("profile-name-display"),s=document.getElementById("profile-name-input"),n=document.querySelector(`.edit-btn[data-field="${e}"]`),a=document.querySelector(`.save-btn[data-field="${e}"]`),o=document.querySelector(`.cancel-btn[data-field="${e}"]`),r[e]=t.textContent):(t=document.getElementById(`user-${e}-display`),s=document.getElementById(`user-${e}-input`),n=document.querySelector(`.edit-btn[data-field="${e}"]`),a=document.querySelector(`.save-btn[data-field="${e}"]`),o=document.querySelector(`.cancel-btn[data-field="${e}"]`),e==="email"?r[e]=t.textContent.replace("<strong>Correo:</strong> ",""):e==="address"?r[e]=t.textContent.replace("<strong>Dirección:</strong> ",""):e==="description"&&(r[e]=t.textContent.replace("<strong>Descripción:</strong> ",""))),t.style.display="none",n.style.display="none",s.style.display="inline-block",a.style.display="inline-block",o.style.display="inline-block",s.value=r[e],s.focus()}function p(e){let t,s,n,a,o;e==="name"?(t=document.getElementById("profile-name-display"),s=document.getElementById("profile-name-input"),n=document.querySelector(`.edit-btn[data-field="${e}"]`),a=document.querySelector(`.save-btn[data-field="${e}"]`),o=document.querySelector(`.cancel-btn[data-field="${e}"]`)):(t=document.getElementById(`user-${e}-display`),s=document.getElementById(`user-${e}-input`),n=document.querySelector(`.edit-btn[data-field="${e}"]`),a=document.querySelector(`.save-btn[data-field="${e}"]`),o=document.querySelector(`.cancel-btn[data-field="${e}"]`)),t.style.display="inline",n.style.display="inline-block",s.style.display="none",a.style.display="none",o.style.display="none"}async function v(e){let t,s;if(e==="name"?(t=document.getElementById("profile-name-input"),s=t.value.trim()):(t=document.getElementById(`user-${e}-input`),s=t.value.trim()),!s){alert("El campo no puede estar vacío");return}try{const a=(await c.get(`${m}/me/profile`)).data.id_user;let o={};if(e==="name")o.full_name=s;else if(e==="email")o.email=s;else if(e==="address")o.user_address=s;else if(e==="description"){alert("La descripción no se puede actualizar desde aquí"),p(e);return}await c.put(`${m}/${a}`,o),await y(),p(e),alert("Cambios guardados exitosamente")}catch(n){console.error("Error updating user:",n),n.response&&n.response.status===400?alert("Error en los datos proporcionados"):alert("Error al guardar los cambios")}}document.addEventListener("click",function(e){if(e.target.closest(".edit-btn")){const t=e.target.closest(".edit-btn").getAttribute("data-field");h(t)}if(e.target.closest(".cancel-btn")){const t=e.target.closest(".cancel-btn").getAttribute("data-field");p(t)}if(e.target.closest(".save-btn")){const t=e.target.closest(".save-btn").getAttribute("data-field");v(t)}});function E(){const e=f();if(e.length===0)return`
            <h4>Tus Pedidos</h4>
            <div class="no-orders">
                <p>Aún no has realizado ningún pedido.</p>
                <a href="./dashboard.html" class="btn-primary">Ir a comprar</a>
            </div>
        `;let t='<h4>Tus Pedidos</h4><div class="orders-container">';return e.forEach(s=>{const n=new Date(s.order_date).toLocaleDateString("es-ES",{year:"numeric",month:"long",day:"numeric"});t+=`
            <div class="order-card">
                <h5>Pedido #${s.id_order}</h5>
                <p><strong>Fecha:</strong> ${n}</p>
                <p><strong>Método de pago:</strong> ${s.payment_method}</p>
                <p><strong>Estado:</strong> ${s.status}</p>
                <p><strong>Total:</strong> $${s.total.toLocaleString()}</p>
                <div class="order-items">
                    <h6>Productos:</h6>
                    <ul>
        `,s.items.forEach(a=>{t+=`<li>${a.name_product} (x${a.quantity}) - $${(a.price*a.quantity).toLocaleString()}</li>`}),t+=`
                    </ul>
                </div>
            </div>
        `}),t+="</div>",t}const d={pedidos:"orders",ayuda:`
    <h4>Centro de Ayuda</h4>
    <p>¿Necesitas soporte? Contáctanos por cualquiera de nuestras redes sociales:</p>
    <div class="help-links">
        <a href="mailto:recursos.humanos@greenpath.com" target="_blank" class="help-item">
            <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="Gmail">
            <span>Gmail</span>
        </a>
        <a href="https://wa.me/573001112233" target="_blank" class="help-item">
            <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="WhatsApp">
            <span>WhatsApp</span>
        </a>
        <a href="https://instagram.com/tuusuario" target="_blank" class="help-item">
            <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram">
            <span>Instagram</span>
        </a>
        <a href="https://t.me/tuusuario" target="_blank" class="help-item">
            <img src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000" alt="Telegram">
            <span>Telegram</span>
        </a>
    </div>`,metodo:`
    <h4>Método de Pago</h4>
    <div class="payment-methods">
        <div class="payment-card">
            <img src="../assets/img/pasarelas-pago/visa-logo.png" alt="Visa">
        </div>
        <div class="payment-card">
            <img src="../assets/img/pasarelas-pago/mastercard.png" alt="MasterCard">
        </div>
        <div class="payment-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal">
        </div>
        <div class="payment-card">
            <img src="../assets/img/pasarelas-pago/american-express.png" alt="American Express">
        </div>
        <div class="payment-card">
            <img src="../assets/img/pasarelas-pago/nequi.png" alt="Nequi">
        </div>
    </div>`,logout:"<h4>Sesión cerrada</h4><p>Has cerrado sesión exitosamente.</p>"};function b(){console.log("Setting up menu event listeners...");const e=document.querySelectorAll(".menu button");console.log("Found menu buttons:",e.length),e.forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const n=t.getAttribute("data-view");console.log("Button clicked, view:",n),n&&d[n]?n==="pedidos"?(console.log("Loading orders view..."),l.style.display="block",i.innerHTML=E()):n==="ayuda"||n==="metodo"?(console.log("Loading",n,"view..."),l.style.display="none",i.innerHTML=d[n]):n==="logout"&&(console.log("Logging out..."),l.style.display="none",i.innerHTML=d[n],console.log("Sesión cerrada.")):console.log("View not found in views object:",n)})})}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM loaded, setting up menu listeners..."),b()});const g=document.getElementById("logout-btn");g&&g.addEventListener("click",()=>{localStorage.removeItem("user"),window.location.href="./auth.html"});
