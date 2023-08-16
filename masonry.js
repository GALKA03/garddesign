var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  columnWidth: 1,
  stamp: '.stamp',
  gutter: 2
});

grid.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, '.grid-item' ) ) {
    return;
  }
  event.target.classList.toggle('grid-item--gigante');
  msnry.layout();
});





