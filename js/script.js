$(document).ready(function(){
  //Customização do cursor
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
  // Scroll para seções
  let navBtn = $('.nav-item');

  let homeSection = $('.home');
  let portfolioSection = $('#portfolio-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';
  $(navBtn).click(function(){
    let btnId = $(this).attr('id');
    if(btnId == 'portfolio-menu'){
      scrollTo = portfolioSection;
    } else if(btnId == 'contact-menu'){
      scrollTo = contactSection;
    } else{
      scrollTo = homeSection;
    }
    $([document.documentElement, document.body]).animate({
      scrollTop: $(scrollTo).offset().top - 70
    }, 350);
  }); 
  //Pop up das imagens quando clicadas
  var modalEle = document.querySelector(".modal");
  var modalImage = document.querySelector(".modalImage");
  Array.from(document.querySelectorAll(".img-fluid")).forEach(item => {
    item.addEventListener("click", event => {
        modalEle.style.display = "block";
        modalImage.src = event.target.src;
    });
  });
  document.querySelector(".close").addEventListener("click", () => {
    modalEle.style.display = "none";
  });
});
