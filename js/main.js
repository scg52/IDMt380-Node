var fish = $('.fish');  // box
var flower = $('.flower'); //drop
var audio = document.createElement('audio');
audio.src = 'sounds/Zombie Long Death-SoundBible.com-554299929.mp3';
var fishButtonEl = $('#GenFish');
var flowerButtonEl = $('#GenFlower');
// var user = new User;
// var userId = '#id-' + user.id;


//detectCollision();

// function detectCollision(){
// 	var collides = $('.flower').overlaps('#fish');
//     collides.hits.length ? audio.play() : console.log('no sound'); //audio.play()    console.log('sound')   http://theremin.music.uiowa.edu/MISpiano.html
//     setInterval(detectCollision, 500);
// }


var drag = $('.drag');

           drag.on('mousedown', function(e) {
                var elem = $(this),
                    start = {
                        top: parseFloat(elem.css('marginTop').replace(/px/, '')),
                        left: parseFloat(elem.css('marginLeft').replace(/px/, ''))
                    },
                    mouse = {
                        top: e.clientY,
                        left: e.clientX
                    };

                $(document).on('mousemove', function(e) {
                    var end = {
                        Y: start.top + e.clientY - mouse.top,
                        X: start.left + e.clientX - mouse.left
                    };
                    elem.css({
                        marginTop: end.Y + 'px',
                        marginLeft: end.X + 'px'
                    });

                }).on('mouseup', function() {
                    $(this).off('mousemove');
                });

                e.preventDefault();
            });

var display = true;
$( "#GenFish" ).click(function() {
    if(display == true){
        console.log('display is true');
        display = false;
    }
    else{
        console.log('display is false');
        display = true;
    }
});

var x; //random number to create note flowers
var note = ''; //note of the flower 
$( "#GenFlower" ).click(function() {
    x = Math.floor((Math.random() * 10) + 1);

    if(x == 1 || x == 2){
        note = 'A';
    }
    else if(x == 3 || x == 4){
        note = 'B';
    }
    else if(x == 5 || x == 6){
        note = 'C';
    }
    else if(x == 7){
        note = 'D';
    }
    else if(x == 8){
        note = 'E';
    }
    else if(x == 9){
        note = 'F';
    }
    else{
        note = 'G';
    }
    generateFlower(note);
});


function generateFlower(note) {
    switch (note) { 
      case 'A': 
        $("#container").append('<div class="flower-A drag"><p>A flower</p></div>');
        console.log('A Flower Created');
        break;
      case 'B': 
        $("#container").append('<div class="flower-B drag"><p>B flower</p></div>');
        console.log('B Flower Created');
        break;
      case 'C': 
        $("#container").append('<div class="flower-C drag"><p>C flower</p></div>');
        console.log('C Flower Created');
        break;      
      case 'D': 
        $("#container").append('<div class="flower-D drag"><p>D flower</p></div>');
        console.log('D Flower Created');
        break;
      case 'E': 
        $("#container").append('<div class="flower-E drag"><p>E flower</p></div>');
        console.log('E Flower Created');
        break;
      case 'F': 
        $("#container").append('<div class="flower-F drag"><p>F flower</p></div>');
        console.log('F Flower Created');
        break;      
      case 'G': 
        $("#container").append('<div class="flower-G drag"><p>G flower</p></div>');
        console.log('G Flower Created');
        break;
      default:
        $("#container").append('<div class="flower-A drag"><p>A flower</p></div>');
        console.log('A Flower Created');
    }
    
}