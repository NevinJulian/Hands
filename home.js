// create an array of image URLs
var images = ['Bilder/1.jpg', 'Bilder/2.jpg', 'Bilder/3.jpg', 
'Bilder/4.jpg', 'Bilder/5.jpg','Bilder/6.jpg','Bilder/7.jpg',
'Bilder/8.jpg','Bilder/9.jpg','Bilder/10.jpg','Bilder/11.jpg',
'Bilder/12.jpg','Bilder/13.jpg','Bilder/14.jpg','Bilder/15.jpg',
'Bilder/16.jpg','Bilder/17.jpg','Bilder/18.jpg','Bilder/19.jpg',
'Bilder/20.jpg','Bilder/21.jpg','Bilder/22.jpg','Bilder/23.jpg',
'Bilder/24.jpg','Bilder/25.jpg','Bilder/26.jpg','Bilder/27.jpg',
'Bilder/28.jpg','Bilder/29.jpg','Bilder/30.jpg','Bilder/31.jpg',
'Bilder/32.jpg','Bilder/33.jpg','Bilder/34.jpg','Bilder/35.jpg',
'Bilder/36.jpg','Bilder/37.jpg','Bilder/38.jpg','Bilder/39.jpg',
'Bilder/40.jpg','Bilder/41.jpg','Bilder/42.jpg','Bilder/43.jpg',
'Bilder/44.jpg','Bilder/45.jpg','Bilder/46.jpg','Bilder/47.jpg',
'Bilder/48.jpg','Bilder/49.jpg','Bilder/50.jpg','Bilder/51.jpg',
'Bilder/52.jpg','Bilder/53.jpg','Bilder/54.jpg','Bilder/55.jpg',
'Bilder/56.jpg','Bilder/57.jpg'];

// get the image elements from the HTML
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');

var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

var interview = document.getElementById('interview');

var save = document.getElementById('save');
var show = document.getElementById('show');

// set the initial index to 0
var index = 0;
var clicks = 1;

var imageOne = index;
var imageTwo = index + 1;

// set the initial image sources
image1.src = images[index];
image2.src = images[index + 1];

// create an event listener for clicks on the images
container1.addEventListener('click', function() {
  // increment the index
  index = Math.floor(Math.random() * 57)

  // update the image sources
  image1.src = images[index];

  if(this.clicks == 3192){
    this.clicks = 0;
  }

  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;

  imageOne = index;
});

container2.addEventListener('click', function() {
  // increment the index
  index = Math.floor(Math.random() * 57)

  // update the image sources
  image2.src = images[index];

  if(this.clicks == 3192){
    this.clicks = 0;
  }

  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;

  imageTwo = index;
});

interview.addEventListener('click', function() {
    window.location.href = "interview.html";
});

save.addEventListener('click', function() {
    var imagePair = {
        imageOne: imageOne,
        imageTwo: imageTwo
    }

    var imagePairs = JSON.parse(localStorage.getItem('imagePairs')) || [];
    imagePairs.push(imagePair);
    localStorage.setItem('imagePairs', JSON.stringify(imagePairs)); 

    console.log(imagePairs);
    alert("Saved!");
});

show.addEventListener('click', function() {
    window.location.href = "combinations.html";
});