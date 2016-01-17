var $w = $( window ).width();
var $dW = $('#bb8').width();
var $dPos = 0;
var $dSpeed = 1;
var $dMinSpeed = 1;
var $dMaxSpeed = 5;
var $dAccel = 1.05;
var $dRot = 0;
var $myPos = $w - $w/5;
var $slowOffset = 120;
var $movingRight = true;

var roll = function() {
  if($myPos > $dPos + ($dW/4)){
    // moving right
    if(!$movingRight){
      $movingRight = true;
      $('.antennaes').removeClass('left');
      $('.outer-eye').removeClass('left');
      $('.bulls-eye').removeClass('left');
    }
    if($myPos - $dPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($myPos-$dPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos + $dSpeed;
    $dRot = $dRot + $dSpeed;
  } else if($myPos < $dPos - ($dW/4)){
    // moving left
    if($movingRight){
      $movingRight = false;
      $('.antennaes').addClass('left');
      $('.outer-eye').addClass('left');
      $('.bulls-eye').addClass('left');
    }
    if($dPos - $myPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($dPos - $myPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos - $dSpeed;
    $dRot = $dRot - $dSpeed;
  }

  $('#bb8').css('left', $dPos);
  $('.body').css({ 'transform': 'rotate(' + $dRot + 'deg)'});
}

setInterval(roll, 10);

$( document ).on( "mousemove", function( event ) {
  $myPos = event.pageX;
});