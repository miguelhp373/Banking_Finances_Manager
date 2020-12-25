document.querySelector('#signin').onclick = function(){
    const userSignin = document.querySelector('#user-form').value
    const passSignin = document.querySelector('#pass-form').value

    if((userSignin == '')||(passSignin == '')){
        alert('Os Campos Estão Vazios! Verifique e Tente Novamente')
    }else if((userSignin == localStorage.getItem('User'))&&(passSignin == localStorage.getItem('Pass'))){
        window.location.href = '../Pages/App.html'
    }else{
        alert('Dados Incorretos, ou Não Existentes!')
    }
}