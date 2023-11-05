


var nextButton = document.querySelector(".button-right");
var prevButton = document.querySelector(".button-left");
var numSlide = document.querySelectorAll('.num-slide')


var imageIndex = 1;
var numSlideIndex = numSlide[0];
numSlide[0].style.color='red';

nextButton.addEventListener( 'click', function() {
  imageIndex++;
  if(imageIndex > 6) {
    imageIndex = 1;
   
  }
      
for(let j=0;j<numSlide.length;j++){

  if(parseInt(numSlide[j].innerHTML)!==imageIndex){
        numSlide[j].style.color='whitesmoke';
        } else{
          numSlide[j].style.color='red';
        }
  }
  document.getElementById('slide').src = "./images/image (" + imageIndex + ").jpg";

})
prevButton.addEventListener('click', () => {
  imageIndex--;
  if(imageIndex < 1){
    imageIndex = 6;
  }
       
for(let j=0;j<numSlide.length;j++){
  if(parseInt(numSlide[j].innerHTML)!==imageIndex){
        numSlide[j].style.color='whitesmoke';
        } else{
          numSlide[j].style.color='red';
        }
  }
  document.getElementById('slide').src = "./images/image (" + imageIndex + ").jpg";
})

