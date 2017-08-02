window.onload = function () {

  var host = location.origin.replace(/^http/, 'ws');
  var ws = new WebSocket(host);

  //var id;
  var user = new User();


  ws.onopen = function() {

    console.log(user);

    var msg = {
      type: 'loadAll',
      sendToAll: false,
      user: user
    };

    ws.send(JSON.stringify(msg));
    
    msg = {
      'type': 'register',
      'sendToAll': true,
      'user': user
    };

    ws.send(JSON.stringify(msg));
  }

  ws.onmessage = function(e) {
    
    var data = JSON.parse(e.data);
    console.log(data);

    user[data.type](data);

    }

//------------------------------------------------------------Main------------------------------------------------------------

var fish = $('.fish');  // box
var Flower = $('.Flower'); //drop
var audio = document.createElement('audio');
audio.src = 'sounds/Zombie Long Death-SoundBible.com-554299929.mp3';
var fishButtonEl = $('#GenFish');
var flowerButtonEl = $('#GenFlower');
var userId = '#id-' + user.id;

//button to toggle fish visibility of that users fish
$( "#GenFish" ).click(function() {
    if($(userId).hasClass('display')){
        console.log('See Fish');
        $(userId).removeClass('display');
    }
    else{
        console.log('Hide Fish');
        $(userId).addClass('display');
    }
});

//button to create flowers
var x; //random number to create note flowers
var note = ''; //note of the flower 
$( "#GenFlower" ).click(function() {
    x = Math.floor((Math.random() * 10) + 1);

    if(x == 1 || x == 2){
        note = 'A-Note';
    }
    else if(x == 3 || x == 4){
        note = 'B-Note';
    }
    else if(x == 5 || x == 6){
        note = 'C-Note';
    }
    else if(x == 7){
        note = 'D-Note';
    }
    else if(x == 8){
        note = 'E-Note';
    }
    else if(x == 9){
        note = 'F-Note';
    }
    else{
        note = 'G-Note';
    }

    generateFlower(note, user);
});


function flower(notes, user) {
    switch (notes) { 
      case 'A-Note': 
        user.generateFlower('A-Note', user);
        console.log('A Flower Created');
        break;
      case 'B-Note': 
        user.generateFlower('B-Note', user);
        console.log('B Flower Created');
        break;
      case 'C-Note': 
        user.generateFlower('C-Note', user);
        console.log('C Flower Created');
        break;      
      case 'D-Note': 
        user.generateFlower('D-Note', user);
        console.log('D Flower Created');
        break;
      case 'E-Note': 
        user.generateFlower('E-Note', user);
        console.log('E Flower Created');
        break;
      case 'F-Note': 
        user.generateFlower('F-Note', user);
        console.log('F Flower Created');
        break;      
      case 'G-Note': 
        user.generateFlower('G-Note', user);
        console.log('G Flower Created');
        break;
      default:
        user.generateFlower('A-Note', user);
        console.log('A Flower Created');
    }
    
}// generate flower

//user.generateFlower('A-Note', user);

//---------------------Desperate attempt to hardcode the drag and drop that I found online---------------------------------------
            fish.on('mousedown', function(e) {
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

                  });

                }); //fish on mousedown

                Flower.on('mousedown', function(e) {
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

                    /*** :plugin specific code ***/

                    var collides = Flower.overlaps(fish);
                    if(collides.hits.length){
                         audio.play(); 
                         console.log('sound'); 
                    }else{
                       console.log('no sound'); 
                    } //   http://theremin.music.uiowa.edu/MISpiano.html
                    /*** plugin specific code: ***/

                }).on('mouseup', function() {
                    $(this).off('mousemove');
                });

                e.preventDefault();
            });//--------------------------------------------------------------------------------------------------------

}//onload