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

var data = localStorage.getItem("imagePairs");
var json = JSON.parse(data);


if(data){
    json.forEach(imagePair => {
        var index1 = imagePair.imageOne;
        var index2 = imagePair.imageTwo;

        var panel = document.getElementById('panel1');

        var gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container2';
        gridContainer.id = 'gridContainer';

        var container1 = document.createElement('div');
        container1.className = 'grid-item2';

        var image1 = document.createElement('img');
        image1.id = 'comb1';
        image1.src = images[index1];

        container1.appendChild(image1);
        gridContainer.appendChild(container1);

        var container3 = document.createElement('div');
        container3.className = 'grid-item2';

        gridContainer.appendChild(container3);

        var container2 = document.createElement('div');
        container2.className = 'grid-item2';

        var image2 = document.createElement('img');
        image2.id = 'comb2';
        image2.src = images[index2];

        container2.appendChild(image2);
        gridContainer.appendChild(container2);

        panel.appendChild(gridContainer);

        var gridContainer2 = document.createElement('div');
        gridContainer2.className = 'grid-container2';

        panel.appendChild(gridContainer2);
    });
}

var backToHome = document.getElementById('backHome');

backToHome.addEventListener('click', function() {
    window.location.href = "home.html";
});

var deleteAll = document.getElementById('delete');

deleteAll.addEventListener('click', function() {
    localStorage.removeItem("imagePairs");
    window.location.reload();
});
