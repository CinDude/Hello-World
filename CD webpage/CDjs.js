$(document).ready (function () {
  $('#switch').on ('mouseover', function() {
   $('#switch').fadeOut(1500, function() {
     $('#newPortrait').fadeIn(1500, function () {
        $('.portrait img').css('background-color','#363130')
        })
      })
    })
  })