$(document).ready(function(){
  new fairyDustCursor({colors: ["#ffa500"]});
  //Filtro do portfólio
  $('.filter-btn').on('click', function(){
    let type=$(this).attr('id');
    let boxes=$('.project-box');
    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'trad-btn')
      eachBoxes('trad', boxes);
    else if(type == 'dig-btn')
      eachBoxes('dig', boxes);
    else if(type == 'street-btn')
      eachBoxes('street', boxes);
    else
      eachBoxes('all', boxes);
  });
  function eachBoxes(type, boxes){
    if(type=='all')
      $(boxes).fadeIn();
    else{
      $(boxes).each(function(){
        if(!$(this).hasClass(type))
          $(this).fadeOut('slow');
        else
          $(this).fadeIn();
      });
    }
  }
});