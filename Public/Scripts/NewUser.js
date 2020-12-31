document.querySelector('#btn-create-acount').onclick = function(){
    const name =  document.querySelector('#name-form-new').value
    const email =  document.querySelector('#email-form-new').value
    const user = document.querySelector('#user-form-new').value
    const born = document.querySelector('#date-form-new').value
    const tel = document.querySelector('#tel-form-new').value
    const pass = document.querySelector('#pass-form-new').value
    const passconf = document.querySelector('#passconfirm-form-new').value

    const age = new Date().getFullYear - born; 
    if((name == '')||(email == '')||(user == '')||(born == '')||(tel == '')||(pass == '')||(passconf == '')){
        alert('Impossivel Criar Conta, Os Campos Estão Vazios!')
    }if(age<17){
        alert('Não Foi Possivel Criar Uma Conta, Idade Não Permitida!')
    }if(pass != passconf){
        alert('As Senhas Não Conhecidem, Verifique e Tente Novamente!')
        document.querySelector('#passconfirm-form-new').focus();
        document.querySelector('#passconfirm-form-new').style.backgroundColor = '#EA2027'
    }else{
       localStorage.setItem('Name',name);
       localStorage.setItem('Email',email);
       localStorage.setItem('User',user);
       localStorage.setItem('Tel',tel);
       localStorage.setItem('Pass',pass);
       window.location.href = "../Pages/Login.html" 
    }
}


       