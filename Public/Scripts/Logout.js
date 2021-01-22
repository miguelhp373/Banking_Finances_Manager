
function logout(){
    localStorage.setItem('User','');
    localStorage.setItem('Pass','');
    window.location.href = '../../index.html';
    
}