const user_name = "admin"
const password = "123456789"

const inputUsuario = document.getElementById('text-user').value
const inputPassword=document.getElementById('txt-password').value
const entrar=document.getElementById('entrar')

entrar.addEventListener('click',()=>{
    if(inputUsuario==='' || inputPassword===''){
        alert('Hay espacios vacios en la peticion')
        //AQUI INTENTE VOLVER A PONER ESPACIOS EN BLANCO PERO NO SALE
//        inputUsuario.innerHTML=''
//        inputPassword.innerHTML=''
    }else{
        if(inputUsuario===user_name && inputPassword===password){
            const token='asiodufgiasdvbashdvashdcblaksd';
            console.log(token);
            localStorage.setItem("token", token);
            window.location.href="Pagina_inicio.html"
        }else{
            alert('Algo esta mal')
        }
    }
})