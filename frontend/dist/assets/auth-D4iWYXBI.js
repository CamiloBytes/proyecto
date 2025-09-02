import"./modulepreload-polyfill-B5Qt9EMX.js";import{a as m}from"./index-NIGUFBhG.js";import{e as p,a as y}from"./main-BZgMBzPQ.js";async function h(e,t){const{data:o}=await m.post(p,{email:e,password:t});return console.log("Login response data:",o),localStorage.setItem("user",JSON.stringify(o)),o}const w=document.getElementById("btnSign"),v=document.getElementById("email"),I=document.getElementById("password");w.addEventListener("click",async()=>{const e=v.value.trim(),t=I.value.trim();if(!e||!t){alert("Please fill out the login");return}try{const o=await h(e,t);window.location.href="/src/views/dashboard.html"}catch{alert("Bad Credentials")}});const r=document.getElementById("container"),s=document.getElementById("form"),d=document.getElementById("formTitle"),l=document.getElementById("img"),i=document.getElementById("containerToggle");let a=!0;i.addEventListener("click",e=>{(e.target.id==="toggleRegister"||e.target.id==="toggleLogin")&&b()});function b(){a=!a,a?(r.classList.add("login"),r.classList.remove("register"),d.innerText="Login",l.src="https://res.cloudinary.com/dd7vy0y6n/image/upload/f_auto,q_auto/v1755644602/back-login_vtle9y.jpg",s.innerHTML=`
            <input id="userName" type="text" placeholder="Email">
            <input id="password" type="password" placeholder="Password">
            <input id="btnSign" type="button" value="SIGN IN">
        `,i.innerHTML=`
            <button id="toggleRegister">Go to Register</button>
        `):(r.classList.add("register"),r.classList.remove("login"),d.innerText="Register",l.src="https://res.cloudinary.com/dd7vy0y6n/image/upload/f_auto,q_auto/v1755644601/back-register_uiimdr.jpg",s.innerHTML=`
            <input id="userName" type="text" placeholder="Full Name">
            <input id="email" type="email" placeholder="Email">
            <input id="phone" type="text" placeholder="Phone">
            <select name="documentType" id="documentType" required>
                <option value="" disabled selected>Select Document Type...</option>
                <option value="1">National ID</option>
                <option value="2">Identity Card</option>
                <option value="3">Foreign ID</option>
                <option value="4">Passport</option>
            </select>
            <input id="documentNumber" type="text" placeholder="Document Number">
            <input type="date" name="birthdate" id="birthdate">
            <input id="password" type="password" placeholder="Password">
            <input id="passwordAgain" type="password" placeholder="Password Again">
            <input id="userAddress" type="text" placeholder="Address">
            <input id="btnUp" type="submit" value="REGISTER">
        `,i.innerHTML=`
            <button id="toggleLogin">Go to Login</button>
        `)}i.innerHTML='<button id="toggleRegister">Go to Register</button>';const u=document.getElementById("form");u.addEventListener("submit",async e=>{e.preventDefault();const t=document.getElementById("password").value,o=document.getElementById("passwordAgain").value;if(t!==o){alert("Passwords do not match!");return}const g={full_name:document.getElementById("userName").value.trim(),email:document.getElementById("email").value.trim(),phone:document.getElementById("phone").value.trim(),id_document_type:parseInt(document.getElementById("documentType").value),document_number:document.getElementById("documentNumber").value.trim(),birthdate:document.getElementById("birthdate").value,user_password:t,user_address:document.getElementById("userAddress").value,id_rol:1};try{const{data:n}=await m.post(y,g);console.log("User registered:",n),localStorage.setItem("user",JSON.stringify(n)),alert("User created and logged in!"),u.reset(),window.location.href="/src/views/dashboard.html"}catch(n){console.error("❌ Error creating user:",n),alert("Something went wrong!")}});const c=JSON.parse(localStorage.getItem("user"));c?window.location.href="/src/views/dashboard.html":console.log("Usuario autenticado:",c);
