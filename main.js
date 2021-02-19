var btnTop = document.getElementById('btn-top');
window.onscroll = () =>{
    scrollToTop();
}
btnTop.addEventListener('click', backToTop);
function scrollToTop(){
    if(document.documentElement.scrollTop > 50){
        btnTop.style.display = "block"
    }else{
        btnTop.style.display = "none"
    }
}

function backToTop(){
    document.documentElement.scrollTop = 0;
}