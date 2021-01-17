const OnloadPage = () =>{
    var showSaldo = document.querySelector('.saldo-show');
     showSaldo.innerHTML = localStorage.getItem('balance') ;
}
OnloadPage();


if(!localStorage.getItem('balance')){
    const balanceCreate = () => {
            localStorage.setItem('balance',0);
            var showSaldo = document.querySelector('.saldo-show');
            showSaldo.innerHTML = localStorage.getItem('balance') ;
    }
    
    balanceCreate();
}else{
   function newMoney(){
    var NewAddMoney = $('#receita-money-input').val();
    var saldo = localStorage.getItem('balance');
    saldo = Number(saldo) + Number(NewAddMoney);
    localStorage.setItem('balance',saldo);
    var showSaldo = document.querySelector('.saldo-show');
    showSaldo.innerHTML = localStorage.getItem('balance',saldo);
    window.location.href = '../Pages/App.html';
            
   }
}

/* var showSaldo = document.querySelector('.saldo-show');
        showSaldo.innerHTML = localStorage.getItem('SaldoUpdate');
    // const Description = $('#descriction-receita').val();
    //const Categoria = $('#add-money-categorias').val();
const NewAddMoney = $('#receita-money-input').val();
window.location.href = '../Pages/App.html'; */