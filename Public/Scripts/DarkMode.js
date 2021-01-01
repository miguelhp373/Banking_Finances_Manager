//darkmode
function active(){

 var ative = document.querySelector('#switch-2')

 if(ative.checked){
   localStorage.setItem('active','enable')
   document.querySelector('.nav-bar-top').style.backgroundColor = '#2A2F32'
   document.querySelector('.content-cards').style.backgroundColor = '#131C21'
   document.querySelector('.exit-button-icon').style.backgroundColor ='#202e36'
   document.getElementsByTagName("footer").style.backgroundColor = '#131C21'
 }
 if(!ative.checked){
   localStorage.setItem('active','disabled')
   document.querySelector('.nav-bar-top').style.backgroundColor = '#27ae60'
   document.querySelector('.content-cards').style.backgroundColor = '#EFEFEF'
   document.querySelector('.exit-button-icon').style.backgroundColor ='#20914f'

 }

}


