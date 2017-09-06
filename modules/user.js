function User() {
  //Random # if under 10,000
  //https://gist.github.com/gordonbrander/2230317
  this.id = Math.random().toString(36).substr(2, 9);
  this.color = "#"+Math.floor(Math.random()*16777215).toString(16);
  this.mobile = mobilecheck();
  this.flowerCount = 0;

  $('.id').html(this.id);

  if (this.mobile){
    $('body').attr('data-mobile-users', true);
  }
}

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function generateFish(user) {
  if (user.mobile){
    console.log('fish created');
    $('.Fcontainer').append('<div class="fish drag circle" id="id-' + user.id + '">' + koiCreate(user) + '</div>'); // <svg id="koi" viewBox="0 0 100 100"><use xlink:href="../imgs/koi.svg"></use></svg> 
    $('#id-' + user.id).draggable();
  }
}

function addUser(user) {
  if (user.mobile){
    users.push(user);
    console.log(users);
  }
}

function koiCreate(user){
  var koi =  '<?xml version="1.0" encoding="utf-8"?>';
  koi += '<!-- Generator: Adobe Illustrator 21.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->';
  koi += '<svg version="1.1" id="koi" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"';
  koi +=    'viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">';
  koi += '<style type="text/css">';
  koi +=   '.st0{fill:' + user.color + ';}';
  koi +=   '.st1{fill:url(#body_1_);}';
  koi +=   '.st2{fill:url(#dorsal_1_);}';
  koi +=   '.st3{fill:url(#frontLeft_1_);}';
  koi +=   '.st4{fill:url(#frontRight_1_);}';
  koi +=   '.st5{fill:url(#backRight_1_);}';
  koi +=   '.st6{fill:url(#backLeft_1_);}';
  koi += '</style>';
  koi += '<path id="backgroundFish" class="st0" d="M60.3,4c0,0,0,3-2.5,4s-3.8,6-3.8,6s-1.3,2,0,2s-5-3-8.8,0s-1.3,1-1.3,1s5-1,6.3,3';
  koi +=   'c1.3,4,2.5,6,2.5,6s-2.5,10-3.8,10c-1.3,0-3.8-2-3.8-2c-1.4,0.5-2.5,7,0,9c0,0-1.3,8-1.3,10s-3.8,10-3.8,10s-6.3-3-6.3-4';
  koi +=   's-1.3,12,5,15c0.1,0,1.1,8.9,2.5,12c1.9,4.2,10.9,13.5,18.8,4c5-6,2.5-18,2.5-18s6.3-3,5-12c0,0-7.5,3-7.5,2s-6.3-16-5-19';
  koi +=   'c0,0,5-4,5-8l-3.8,1c0,0,1.3-10,0-11C56.6,25,67.8,9,60.3,4z"/>';
  koi += '<radialGradient id="body_1_" cx="48.5276" cy="45" r="30.5463" gradientTransform="matrix(-1.0832 -0.5 1.8761 -2.5981 19.1205 186.1772)" gradientUnits="userSpaceOnUse">';
  koi +=   '<stop  offset="0" style="stop-color:#FFFFFF"/>';
  koi +=   '<stop  offset="1" style="stop-color:#FFECD4"/>';
  koi += '</radialGradient>';
  koi += '<path id="body" class="st1" d="M60.3,4c0,0,1.3,5-1.3,6c-2.5,1-3.8,6-3.8,6s-1.3,2,0,2c1.3,0-5-4-10-2c-4.7,1.9-1.3,1-1.3,1';
  koi +=   's5-1,6.3,3c1.3,4,2.5,6,2.5,6s-2.5,10-3.8,10c-1.3,0-3.8-2-3.8-2c-1.4,0.5-2.5,7,0,9c0,0,3.8,10,2.5,17c-0.6,3.1-7.5,3-7.5,3';
  koi +=   's-6.3-3-6.3-4s-1.3,12,5,15c0.2,4.6,1,8.7,2.5,12c7.5-2,12.5-4.5,21.3-1c0.8-4.2,0.8-8.5,0-13c0,0,6.3-3,5-12c0,0-7.5,3-7.5,2';
  koi +=   's-6.3-16-5-19c0,0,5-4,5-8l-3.8,1c0,0,1.3-10,0-11C56.6,25,67.8,9,60.3,4z"/>';
  koi += '<radialGradient id="dorsal_1_" cx="49.6286" cy="53" r="19.87" gradientTransform="matrix(-1.0832 -0.5 1.8761 -2.5981 6.6813 215.5124)" gradientUnits="userSpaceOnUse">';
  koi +=   '<stop  offset="0" style="stop-color:#FFE2C0"/>';
  koi +=   '<stop  offset="0.2909" style="stop-color:#FFE3C3"/>';
  koi +=   '<stop  offset="0.5234" style="stop-color:#FFE8CD"/>';
  koi +=   '<stop  offset="0.7358" style="stop-color:#FFF0DE"/>';
  koi +=   '<stop  offset="0.935" style="stop-color:#FFFBF6"/>';
  koi +=   '<stop  offset="1" style="stop-color:#FFFFFF"/>';
  koi += '</radialGradient>';
  koi += '<path id="dorsal" class="st2" d="M52.8,81c0,0,0-12,1.3-13s-1.1-8.9-1.3-13c-0.1-3.5,1.5-26.6,2.5-30c0,0-8.8,18-5,27';
  koi +=   'S47.8,65,52.8,81z"/>';
  koi += '<linearGradient id="frontLeft_1_" gradientUnits="userSpaceOnUse" x1="31.4148" y1="63.59" x2="41.6622" y2="69.5063">';
  koi +=   '<stop  offset="0" style="stop-color:#FFE2C0"/>';
  koi +=   '<stop  offset="0.402" style="stop-color:#FFF1E0"/>';
  koi +=   '<stop  offset="0.7677" style="stop-color:#FFFBF7"/>';
  koi +=   '<stop  offset="1" style="stop-color:#FFFFFF"/>';
  koi += '</linearGradient>';
  koi += '<path id="frontLeft" class="st3" d="M40.3,63c-0.3,0.2-5-4-6.3-4c-1.4,4.3,2.3,15.7,5,15L40.3,63z"/>';
  koi += '<linearGradient id="frontRight_1_" gradientUnits="userSpaceOnUse" x1="66.7773" y1="59.3896" x2="60.3304" y2="70.5559">';
  koi +=   '<stop  offset="0" style="stop-color:#FFE2C0"/>';
  koi +=   '<stop  offset="0.402" style="stop-color:#FFF1E0"/>';
  koi +=   '<stop  offset="0.7677" style="stop-color:#FFFBF7"/>';
  koi +=   '<stop  offset="1" style="stop-color:#FFFFFF"/>';
  koi += '</linearGradient>';
  koi += '<path id="frontRight" class="st4" d="M60.3,62c1.3,2.6,2,6.1,2.5,10c4.1-2.4,5.7-6.5,5-12C64.1,61.5,61.7,62.3,60.3,62z"/>';
  koi += '<linearGradient id="backRight_1_" gradientUnits="userSpaceOnUse" x1="60.412" y1="35.0818" x2="53.9106" y2="41.5833">';
  koi +=   '<stop  offset="0" style="stop-color:#FFE2C0"/>';
  koi +=   '<stop  offset="0.402" style="stop-color:#FFF1E0"/>';
  koi +=   '<stop  offset="0.7677" style="stop-color:#FFFBF7"/>';
  koi +=   '<stop  offset="1" style="stop-color:#FFFFFF"/>';
  koi += '</linearGradient>';
  koi += '<path id="backRight" class="st5" d="M55.3,43c2.7-2.4,4.8-4.9,5-8c-0.9,0.2-1.8,0.5-3.8,1C56.7,37.4,56,40.2,55.3,43z"/>';
  koi += '<linearGradient id="backLeft_1_" gradientUnits="userSpaceOnUse" x1="43.4934" y1="35.7959" x2="48.0095" y2="40.312">';
  koi +=   '<stop  offset="0" style="stop-color:#FFE2C0"/>';
  koi +=   '<stop  offset="0.402" style="stop-color:#FFF1E0"/>';
  koi +=   '<stop  offset="0.7677" style="stop-color:#FFFBF7"/>';
  koi +=   '<stop  offset="1" style="stop-color:#FFFFFF"/>';
  koi += '</linearGradient>';
  koi += '<path id="backLeft" class="st6" d="M49.1,36c-0.9,0-2.2-0.8-3.8-2c-2.7,2.3-2.5,5.9,0,9C46.2,40.2,47.6,38,49.1,36z"/>';
  koi += '</svg>';

  return koi;
}