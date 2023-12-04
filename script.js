var a=0;
document.querySelector('.button').addEventListener('click',function(e){
  
    if(a<5 && document.querySelector('.li-1').classList.contains('show'))
    {
      document.querySelector('.li-1').classList.remove('show');
      document.querySelector('.li-2').classList.add('show');
      a=10;
     
    }else if(a<15){
      document.querySelector('.li-2').classList.remove('show');
      document.querySelector('.li-3').classList.add('show');
      a=20;
    }else if(a<25){
      document.querySelector('.li-3').classList.remove('show');
      document.querySelector('.li-4').classList.add('show');
      a=30;
    }else if(a<35){
      document.querySelector('.li-4').classList.remove('show');
      document.querySelector('.li-5').classList.add('show');
      a=40;
    }else if(a<45){
      document.querySelector('.li-5').classList.remove('show');
      document.querySelector('.li-6').classList.add('show');
      a=50;
    }else if(a<55)
    {
      document.querySelector('.li-6').classList.remove('show');
      document.querySelector('.li-1').classList.add('show');
      a=0;
    }
    

})


