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
    var trash = $('.trash');
var audio = window.audio = document.createElement('audio');
audio.className = 'E-Note';
audio.src = 'sounds/Zombie Long Death-SoundBible.com-554299929.mp3';

var fishButtonEl = $('#GenFish');
var flowerButtonEl = $('#GenFlower');
var userId = '#id-' + user.id;

//button to toggle fish visibility of that users fish
$( "#GenFish" ).click(function() {
    if($(userId).hasClass('display')){
        console.log('See Fish');
        $(userId).removeClass('display');
        detectcollision();
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

//Drag and Drop code-----------------------------------------------------------------------------------------------------------

$( ".Fcontainer" ).on( "mousedown", "div", function( event ) {
    event.preventDefault();
    //console.log( 'Flower Clicked' );
    $('.Flower').draggable();
});

$('.trash').droppable({
  //only accept elements with .flower class
  accept: '.Flower',
  drop: function(event, ui){
    //remove the item that was dragged and dropped
    $(ui.draggable).remove();
  }
});


//overlap code-----------------------------------------------------------------------------------------------------------------


  function detectcollision(){
    var collides = $('.Flower').overlaps($('.fish'));
      //console.log(collides);
    if(collides.hits.length){

        var note = $(collides.targets[0]).data('note');

        window.audio.play();
        //window.audio.play();
    }else{
      //console.log('no sound');
    } //   http://theremin.music.uiowa.edu/MISpiano.html



  }

  setInterval(function(){
     detectcollision();
    }, 1000);


 }//onload