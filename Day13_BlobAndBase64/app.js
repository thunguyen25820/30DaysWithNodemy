var upload = document.querySelector('#myimage');
var image = document.querySelector('.preview');
var error = document.querySelector('.error');

upload.addEventListener('change', function(e){
    console.log('ahihi', e.target.files[0]);
    var file = upload.files[0];
    if(!file){
        return;
    }

    if(!file.name.endsWith('.png')){
        error.innerHTML = 'Định dạng hình ảnh phải (.png,.jpg,.jpeg)!';
    }else if(!file.name.endsWith('.jpg')){
        error.innerHTML = 'Định dạng hình ảnh phải (.png,.jpg,.jpeg)!';
    }else{
        error.innerHTML='';
    }

    if(!file.size/(1024*1024) > 5 ){
            error.innerHTML = 'Kích thước ảnh vượt quá 5MB!';
    }else{
        error.innerHTML=''
    }
    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    image.appendChild(img);
})