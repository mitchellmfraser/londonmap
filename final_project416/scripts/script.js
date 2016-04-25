$(function() {
  $('a[href*="#"]').on('click', function(e) {
    console.log('firing');
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'easeOutQuint');
  });
});

$( ".box" ).click(function() {
  $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
  
});

$("#submit").click(function() {
  
  var n1 = $(".a.selected").length;
  
  var n2 = $(".b.selected").length;
 
  var n3 = $(".c.selected").length;
 
  var n4 = $(".d.selected").length;
  
  var n5 = $(".e.selected").length;
  
  var n6 = $(".f.selected").length;
  
  
  
  if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)&&(n1 >= n5)&&(n1 >=n6)) {
    $( "#quizanswer" ).html("You should go to Notting Hill! With it's pastel flats and picturesque photo ops - Notting Hill provides the best backdrop for any potential photo ops. While you're there, check out the Museum of Brands which examines the history of consumer culture from Victorian times to the present day.");
  }
  
  if ((n2 > n1)&(n2 >= n3)&(n2 >= n4)&(n2 >= n5)&(n2 >=n6)) {
    $( "#quizanswer" ).html("You should go to Brixton Market! An indoor/outdoor market dotted with cafes, bars and live music - Brixton Market offers one of the most colorful and diverse experiences in the city. While you're there check out some of the local art vendors and pick up some unique prints for your dormroom.") ;
  }
    
  if ((n3 > n1)&(n3 > n2)&(n3 >= n4)&(n3 >= n5)&(n3 >=n6)) {
    $( "#quizanswer" ).html("You should go to the Gherkin! Located in the heart of London's primary financial district, the Gherkin represents some of London's more avant garde architecture. While you're in the neighborhood, check out Duck & Waffle - a 24 hour brunch spot with 40th floor views of the city");
  }
    
  if ((n4 > n1)&(n4 > n2)&(n4 > n3)&(n4 >= n5)&(n4 >=n6)) {
    $( "#quizanswer" ).html("You should go to Buckingham Palace! Check out how royalty lives at the Queen's humble abode. While you're there, check out some of London's nicest (and priciest) hotels. You'll be within walking distance of The Dorchester, The Ritz, and the Mandarin Oriental - all known for their excellent tea times.");
  }
  
  if ((n5 > n1)&(n5 > n2)&(n5 > n3)&(n5 > n4)&(n5 >=n6)) {
    $( "#quizanswer" ).html("You should go Big Ben! London's most famous landmark is also home to the British parliament and is the birthplace of modern government. While you're there take a ride on the London Eye for one of the most Instagram-able opportunities in the city.");
  }
  
  if ((n6 > n1)&(n6 > n2)&(n6 > n3)&(n6 > n4)&(n6 > n5)) {
    $( "#quizanswer" ).html("You should go to Tate Modern! It is Britain's national gallery of international modern art and forms part of the Tate group. Situated right on the Thames, the museum also offers great views of the City of London and is right next to Shakespeare's Globe Theater. It also currently has a visiting exhibit of preforming art pieces through the summer!");
  }
    
});