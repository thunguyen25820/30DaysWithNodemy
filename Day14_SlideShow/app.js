var imgFeature = document.querySelector('.img-feature');
var listImage = document.querySelectorAll('.list_image img');
var prevbtn = document.querySelector('.control.prev');
var nextbtn = document.querySelector('.control.next');

var currentIndex = 0;
function updateImageByIndex(index){
    document.querySelectorAll('.list_image div').forEach(item=>{
        item.classList.remove('active');
    })

    currentIndex = index;
    console.log(currentIndex);
    imgFeature.src = listImage[index].getAttribute('src');
    
    listImage[index].parentElement.classList.add('active');
}

listImage.forEach((imgElement,index) =>{
    imgElement.addEventListener('click', e=>{
        imgFeature.style.opacity = '0';
        setTimeout(()=>{
            updateImageByIndex(index)
            imgFeature.style.opacity = '1';
        },500)
        //imgFeature.src = e.target.getAttribute('src');
        updateImageByIndex(index);
    })
})

prevbtn.addEventListener('click', function(){
    if(currentIndex == 0){
        currentIndex = listImage.length -1;
    }else{
        currentIndex--;
    }
    console.log(currentIndex);
    
    imgFeature.style.animation=''
    setTimeout(() => {
        updateImageByIndex(currentIndex);
        imgFeature.style.animation='slideLeft 1s easy-in-out forward';
    }, 300);
})

nextbtn.addEventListener('click', function(){
    if(currentIndex == listImage.length -1){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    console.log(currentIndex);
    imgFeature.style.animation=''
    setTimeout(() => {
        updateImageByIndex(currentIndex);
        imgFeature.style.animation='slideRight 1s easy-in-out forward';
    }, 300);
})