let icons = document.querySelectorAll('.icon_acordeon');
for(icon of icons){
    icon.addEventListener('click',function(){  
        let info = this.parentElement.querySelector('.description');
        if(info.clientHeight == 0){
            info.classList.add('show');
            this.style.transform = 'rotate(-90deg)';
        }else{
            info.classList.remove('show');
            this.style.transform = 'rotate(90deg)';
        }
    })
}


