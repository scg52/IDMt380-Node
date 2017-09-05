window.onload = function () {

 //socket io functions-------------------------------------------------------------------------------------------------------

 var socket = io.connect(location.origin.replace(/^http/, 'ws'));

 var user = new User();


 socket.on('connect', function(){

  socket.emit('loadAll', user);

 });

 socket.on('loadAll', function(users, flowers){
   console.log(users);

   if(!user.mobile){
    users.forEach(function(user, index) {
      generateFish(user);
    });
   }

   if(flowers.length > 0){
    flowers.forEach(function(flower, index) {
      registerFlower(flower);
    });
   }
 });

 socket.on('register', function(newuser){
  if(!user.mobile && newuser.id != user.id){
   generateFish(newuser);
  }else if(newuser.id == user.id){
    generateFish(newuser);
  }
 });

 socket.on('logOff', function(user){
   var selectorId = '#id-' + user.id;

   $(selectorId).remove();
 });

 //flower creation and destruction
 socket.on('genFlower', function(flower){
     registerFlower(flower);
 });

 socket.on('destroyFlower', function(fId, user){
   console.log('destroyFlower ' + fId);
   $('#' + fId).remove(); //remove div
   $('#a' + fId).remove(); //remove audio element
 });

 socket.on('flowerMove', function(fId, x, y) {
  $('#' + fId).css({ "left": x, "top": y });
 });

 //Keep fish on desktop in sync with phone
 socket.on('fishMove', function(id, x, y) {
  $('#' + id).css({ "left": x, "top": y });
 });

 //update when a user changes their fish animation
 socket.on('circleAnim', function(user){
      if($('#id-' + user.id).hasClass('zigzag')){
        $('#id-' + user.id).removeClass('zigzag');
        $('#id-' + user.id).addClass('circle');
      }else if($('#id-' + user.id).hasClass('fig8')){
        $('#id-' + user.id).removeClass('fig8');
        $('#id-' + user.id).addClass('circle');
      }else {
        $('#id-' + user.id).addClass('circle');
      }
 });

 socket.on('zigzagAnim', function(user){
      if($('#id-' + user.id).hasClass('circle')){
        $('#id-' + user.id).removeClass('circle');
        $('#id-' + user.id).addClass('zigzag');
      }else if($('#id-' + user.id).hasClass('fig8')){
        $('#id-' + user.id).removeClass('fig8');
        $('#id-' + user.id).addClass('zigzag');
      }
 });

 socket.on('fig8Anim', function(user){
      if($('#id-' + user.id).hasClass('zigzag')){
        $('#id-' + user.id).removeClass('zigzag');
        $('#id-' + user.id).addClass('fig8');
        socket.emit('fishAnim', user, 'fig8');
      }else if($('#id-' + user.id).hasClass('circle')){
        $('#id-' + user.id).removeClass('circle');
        $('#id-' + user.id).addClass('fig8');
        socket.emit('fishAnim', user, 'fig8');
      }
 });


//------------------------------------------------------------Main------------------------------------------------------------

var fish = $('.fish');  // box
var Flower = $('.Flower'); //drop
    var trash = $('.trash');

var fishButtonEl = $('#GenFish');
var flowerButtonEl = $('#GenFlower');
var userId = '#id-' + user.id;

//button to toggle animation of that user's fish------------------------------------------------------------------

//toggle diplay of menu
$( "#fishMenu" ).click(function() {
    if($('#fishList').hasClass('display')){
        $('#fishList').removeClass('display');
        detectcollision();
    }
    else{
        $('#fishList').addClass('display');
    }
});

//add circle class
$( "#circle-button" ).click(function() {
    if($(userId).hasClass('zigzag')){
        $(userId).removeClass('zigzag');
        $(userId).addClass('circle');
        socket.emit('fishAnim', user, 'circle');
    }else if($(userId).hasClass('fig8')){
        $(userId).removeClass('fig8');
        $(userId).addClass('circle');
        socket.emit('fishAnim', user, 'circle');
    }
});

//add zigzag class
$( "#zigzag-button" ).click(function() {
    if($(userId).hasClass('circle')){
        $(userId).removeClass('circle');
        $(userId).addClass('zigzag');
        socket.emit('fishAnim', user, 'zigzag');
    }else if($(userId).hasClass('fig8')){
        $(userId).removeClass('fig8');
        $(userId).addClass('zigzag');
        socket.emit('fishAnim', user, 'zigzag');
    }
});

//add figure 8 class
$( "#fig8-button" ).click(function() {
    if($(userId).hasClass('zigzag')){
        $(userId).removeClass('zigzag');
        $(userId).addClass('fig8');
        socket.emit('fishAnim', user, 'fig8');
    }else if($(userId).hasClass('circle')){
        $(userId).removeClass('circle');
        $(userId).addClass('fig8');
        socket.emit('fishAnim', user, 'fig8');
    }
});

//keep fish synced on mobile and desktop
// function fishMove(){
//   var offsetFish = $(userId).offset();
  
//   socket.emit('fishMove', userId, offsetFish.left, offsetFish.top);
// }

//   setInterval(function(){
//      fishMove();
//   }, 2000);

//button to create flowers----------------------------------------------------------------------------------------

//show or hide the menu
$( "#flowerMenu" ).click(function() {
    if($('#flowerList').hasClass('display')){
        $('#flowerList').removeClass('display');
    }
    else{
        $('#flowerList').addClass('display');
    }
});

//generate flower by which menu item was clicked
var newFlower;
$( "#genA" ).click(function() {
    user.flowerCount++;
    console.log(user);
    newFlower = generateFlower('A-Note', user);
    socket.emit('genFlower', newFlower, user);
});

$( "#genB" ).click(function() {
    user.flowerCount++;
    newFlower = generateFlower('B-Note', user);
    socket.emit('genFlower', newFlower, user);
});

$( "#genC" ).click(function() {
    user.flowerCount++;
    newFlower = generateFlower('C-Note', user);
    socket.emit('genFlower', newFlower, user);
});

$( "#genD" ).click(function() {
    user.flowerCount++;
    newFlower = generateFlower('D-Note', user);
    socket.emit('genFlower', newFlower, user);
});

$( "#genE" ).click(function() {
    user.flowerCount++;
    newFlower = generateFlower('E-Note', user);
    socket.emit('genFlower', newFlower, user);
});

$( "#genF" ).click(function() {
    user.flowerCount++;
    newFlower = generateFlower('F-Note', user);
    socket.emit('genFlower', newFlower, user);
});

$( "#genG" ).click(function() {
    user.flowerCount++;
    newFlower = generateFlower('G-Note', user);
    socket.emit('genFlower', newFlower, user);
});

//Drag and Drop code-----------------------------------------------------------------------------------------------------------

//flower
$( ".Fcontainer" ).on( "mousedown", "div", function( event ) {
    event.preventDefault();

    $('.Flower').draggable({
      drag: function( event, ui ) {
        var fId = $(this).attr('id');
        socket.emit('flowerMove', fId, ui.position.left, ui.position.top);
        // console.log(ui.dataset.note);
      }
   });

});

//fish
$( ".Fcontainer" ).on( "mousedown", "div", function( event ) {
    event.preventDefault();
    $('.fish').draggable({
      drag: function( event, ui ) {
        var id = $(this).attr('id');
        socket.emit('fishMove', id, ui.position.left, ui.position.top);
      }
   });
});



//destroy flower if dropped on trash
$('.trash').droppable({
  //only accept elements with .flower class
  accept: '.Flower',
  drop: function(event, ui){
    //remove the item that was dragged and dropped
    var fId = $(ui.draggable).attr('id');
    $(ui.draggable).remove();
    socket.emit('destroyFlower', fId, user);
    user.flowerCount--;
  }
});


//overlap code-----------------------------------------------------------------------------------------------------------------


  //Guitar Samples courtesy of the Philharmonia Orchestra Sound Samples

  function detectcollision(){
    var collides = $('.Flower').overlaps($('.fish'));
    if(collides.hits.length){
        var aId = '#a' + $(collides.targets).attr('id');
        var audio = $(aId);
        console.log(audio);
        console.log(aId);
        //window.audio.pause();
        window.audio.play();
    }
  } //detect collision


  setInterval(function(){
     detectcollision();
    }, 1000);


 }//onload