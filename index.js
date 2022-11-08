console.log("welcome");
document.querySelector('.cross').style.display='none';
document.querySelector('.ham').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if( document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham1').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.ham1').style.display='none';
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline'; 
        }, 300);
    }
})