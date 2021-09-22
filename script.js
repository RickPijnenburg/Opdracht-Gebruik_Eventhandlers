const alertBtn = document.querySelector('.btn-alert');

alertBtn.addEventListener('click', function(e){
    alert('button clicked');
})

const changeBackgroundColor = function(){
    backGroundColor.classList.toggle('red-background');
};

const backGroundColor = document.querySelector('body');
backGroundColor.addEventListener('click', changeBackgroundColor);