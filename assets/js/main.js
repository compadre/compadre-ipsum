;(function ( $, window, undefined ) {
  var Compadre = Compadre || {};

  Compadre._data = null;

  Compadre.init = function() {
    Compadre.loadData();

  };

  Compadre.loadData = function() {
    $.getJSON("assets/js/ipsum.json", function(result) {
      Compadre._data = result;
      Compadre.setClick();
    });
  };

  Compadre.setClick = function() {
    
    $('.tutupa-generators a').click(function(e){
      var times;
      e.preventDefault();
      times = $(this).data('times');

      if (Compadre._data.ipsum && Compadre._data.ipsum.length > 0)  {
  
            $('textarea').html('');
            for ( var i = 0; i < Compadre._data.ipsum.length ; i++ ) {
              
              if (Compadre._data.ipsum[i].times <= times) {
                $('textarea').append(Compadre._data.ipsum[i].text);
                $('textarea').append('\n \n');
              }

            }
        }
    });
  };

  

$(document).ready(function(){
  Compadre.init();

});

}(jQuery, window));