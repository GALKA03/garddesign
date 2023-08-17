
const imgConteiner = document.querySelector('ul');
const galleryMarcup = createGalaryMarcup(galleryItems);
imgConteiner.insertAdjacentHTML('beforeend',galleryMarcup)
let lightbox = new SimpleLightbox('.gallery a', {captionDelay:250 });
    console.log(lightbox)

imgConteiner.addEventListener('click', onPicturesClick)

function onPicturesClick(event){
  event.preventDefault();

 const noEventGallary = event.target.nodeName;
    
  if (noEventGallary !== 'IMG'){
        return;
    }
 const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
   `, { onShow: () => { document.addEventListener('keydown',onInstanceclik)},
   onClose:()=> {document.removeEventListener('keydown',onInstanceclik)}   }
   )
   instance.show()
      function onInstanceclik(event){
if(event.code === "Escape"){
instance.close()
}
}}

function onPicturesClick(event){
  event.preventDefault();

 const noEventGallary = event.target.nodeName;
     //если действие происходит не в нашем диве == ничего не происходит 
  if (noEventGallary !== 'IMG'){
        return;
    }
}