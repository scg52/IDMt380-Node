function Flower (note, user) {

  this.id = 'fId' + user.id + user.flowerCount;
  var lotusColor;
  this.note = note;
  this.user = user;

  //set flower color and audio src based on Note variable
  if(note == 'A-Note'){
    lotusColor = 'pink';
    this.audio = "../sounds/guitar_A2_very-long_forte_normal.mp3";
  }else if(note == 'B-Note'){
    lotusColor = 'red';
    this.audio = "../sounds/guitar_B2_very-long_forte_normal.mp3";
  }else if(note == 'C-Note'){
    lotusColor = 'orange';
    this.audio = "../sounds/guitar_C3_very-long_forte_normal.mp3";
  }else if(note == 'D-Note'){
    lotusColor = 'yellow';
    this.audio = "../sounds/guitar_D3_very-long_forte_normal.mp3";
  }else if(note == 'E-Note'){
    lotusColor = 'green';
    this.audio = "../sounds/guitar_E3_very-long_forte_normal.mp3";
  }else if(note == 'F-Note'){
    lotusColor = 'blue';
    this.audio = "../sounds/guitar_F3_very-long_forte_normal.mp3";
  }else{
    lotusColor = 'purple';
    this.audio = "../sounds/guitar_G3_very-long_forte_normal.mp3";
  }

  var $flower = $('<div />', {
      'class': 'Flower ' + note + ' drag',
      'id': this.id,
      'html': '<img src="imgs/lotus-' + lotusColor + '.png" alt="A-Note Flower" /> <audio id="a' + this.id + '" src="' + this.audio + '"> Your browser does not support the audio element. </audio>',
      'data-note': note
  }).draggable();


  //if there are any gaps in the flower count flower will prevent multiple items with the same id
  for (var i = 1; i < user.flowerCount; i++) {
    if(!$('#fId' + user.id + i).length){
        flower.id = 'fId' + user.id + i;

        $flower = $('<div />', {
            'class': 'Flower ' + note + ' drag',
            'id': this.id,
            'html': '<img src="imgs/lotus-' + lotusColor + '.png" alt="A-Note Flower" /> <audio id="a' + this.id + '" src=' + this.audio + '> Your browser does not support the audio element. </audio>',
            'data-note': note
        }).draggable();

        break;
    }
  }

 
  $flower.appendTo('.Fcontainer');
}

//create flowers based on a previously created one
function registerFlower (flower) {

  var id = flower.id;
  var audio = flower.audio;
  var lotusColor;
  var note = flower.note;
  
  //set flower color and audio src based on Note variable
  if(note == 'A-Note'){
    lotusColor = 'pink';
  }else if(note == 'B-Note'){
    lotusColor = 'red';
  }else if(note == 'C-Note'){
    lotusColor = 'orange';
  }else if(note == 'D-Note'){
    lotusColor = 'yellow';
  }else if(note == 'E-Note'){
    lotusColor = 'green';
  }else if(note == 'F-Note'){
    lotusColor = 'blue';
  }else{
    lotusColor = 'purple';
  }

  var $flower = $('<div />', {
      'class': 'Flower ' + note + ' drag',
      'id': id,
      'html': '<img src="imgs/lotus-' + lotusColor + '.png" alt="A-Note Flower" /> <audio id="a' + id + '" src="' + audio + '"> Your browser does not support the audio element. </audio>',
      'data-note': note
  }).draggable();
 
  $flower.appendTo('.Fcontainer');
  
}