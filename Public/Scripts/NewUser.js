document.querySelector('#btn-create-acount').onclick = function(){
    const name =  document.querySelector('#name-form-new').value
    const email =  document.querySelector('#email-form-new').value
    const user = document.querySelector('#user-form-new').value
    const born = document.querySelector('#date-form-new').value
    const tel = document.querySelector('#tel-form-new').value
    const pass = document.querySelector('#pass-form-new').value
    const passconf = document.querySelector('#passconfirm-form-new').value

    let age = new Date().getFullYear - born; 
    if((name == '')||(email == '')||(user == '')||(born == '')||(tel == '')||(pass == '')||(passconf == '')){
        alert('Impossivel Criar Conta, Os Campos Estão Vazios!')
    }if(age<17){
        alert('Não Foi Possivel Criar Uma Conta, Idade Não Permitida!')
    }if(pass != passconf){
        alert('As Senhas Não Conhecidem, Verifique e Tente Novamente!')
        pass.focus();
    }else{
       var newName = localStorage.setItem('Name',name);
       var newEmail = localStorage.setItem('Email',email);
       var newUser = localStorage.setItem('User',user);
       var newTel = localStorage.setItem('Tel',tel);
       var newPass = localStorage.setItem('Pass',pass);
       window.location.href = "../Pages/Login.html" 
    }
}


       