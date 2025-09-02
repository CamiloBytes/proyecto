import"./modulepreload-polyfill-B5Qt9EMX.js";import"./hamburger-BfA7E000.js";import"./logout-DGqXLZQJ.js";import{b as d,c as l,u as p,r as u,d as m}from"./cart-Csf3sPQ4.js";import"./index-NIGUFBhG.js";function c(){const o=document.getElementById("render_cart"),e=d();if(e.length===0){o.innerHTML=`
            <div class="empty-cart">
                <h3>Your GreenPath Cart is Empty</h3>
                <p>¡Descubre productos frescos y saludables para tu hogar!</p>
                <a href="./dashboard.html" class="btn-primary">Explorar Productos</a>
            </div>
        `;return}let t=`
        <div class="cart-header">
            <h3>¡Tu carrito de compras está listo!</h3>
            <p>Revisa tus productos y procede al pago seguro</p>
        </div>
        <div class="cart-items">`;e.forEach(a=>{const r=a.price*a.quantity;t+=`
            <div class="cart-item" data-product-id="${a.id_product}">
                <img src="${a.image_url}" alt="${a.name_product}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${a.name_product}</h4>
                    <p>Precio: $${a.price.toLocaleString()}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn minus" data-action="decrease">-</button>
                        <span class="quantity">${a.quantity}</span>
                        <button class="quantity-btn plus" data-action="increase">+</button>
                    </div>
                    <p class="item-total">Total: $${r.toLocaleString()}</p>
                </div>
                <button class="remove-btn" data-product-id="${a.id_product}">×</button>
            </div>
        `}),t+="</div>";const s=l();t+=`
        <div class="cart-total">
            <h3>Total: $${s.toLocaleString()}</h3>
        </div>
    `,t+=`
        <div class="payment-section">
            <h3>Selecciona método de pago</h3>
            <div class="payment-methods">
                <div class="payment-option" data-method="visa">
                    <img src="../assets/img/pasarelas-pago/visa-logo.png" alt="Visa">
                    <span>Visa</span>
                </div>
                <div class="payment-option" data-method="mastercard">
                    <img src="../assets/img/pasarelas-pago/mastercard.png" alt="MasterCard">
                    <span>MasterCard</span>
                </div>
                <div class="payment-option" data-method="paypal">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal">
                    <span>PayPal</span>
                </div>
                <div class="payment-option" data-method="amex">
                    <img src="../assets/img/pasarelas-pago/american-express.png" alt="American Express">
                    <span>American Express</span>
                </div>
                <div class="payment-option" data-method="nequi">
                    <img src="../assets/img/pasarelas-pago/nequi.png" alt="Nequi">
                    <span>Nequi</span>
                </div>
            </div>
            <button id="checkout-btn" class="checkout-btn" disabled>Proceder al pago</button>
        </div>
    `,o.innerHTML=t,g()}function g(){document.querySelectorAll(".quantity-btn").forEach(e=>{e.addEventListener("click",t=>{const s=t.target.closest(".cart-item"),a=parseInt(s.getAttribute("data-product-id")),r=t.target.getAttribute("data-action"),i=parseInt(s.querySelector(".quantity").textContent);let n=i;r==="increase"?n+=1:r==="decrease"&&i>1&&(n-=1),p(a,n),c()})}),document.querySelectorAll(".remove-btn").forEach(e=>{e.addEventListener("click",t=>{const s=parseInt(t.target.getAttribute("data-product-id"));u(s),c()})});let o=null;document.querySelectorAll(".payment-option").forEach(e=>{e.addEventListener("click",t=>{document.querySelectorAll(".payment-option").forEach(s=>s.classList.remove("selected")),t.currentTarget.classList.add("selected"),o=t.currentTarget.getAttribute("data-method"),document.getElementById("checkout-btn").disabled=!1})}),document.getElementById("checkout-btn").addEventListener("click",()=>{if(!o){alert("Por favor selecciona un método de pago");return}alert(`Procesando pago con ${o}...`),m(o)&&(alert("¡Pago exitoso! Tu pedido ha sido procesado."),window.location.href="./profile.html")})}document.addEventListener("DOMContentLoaded",()=>{c()});
