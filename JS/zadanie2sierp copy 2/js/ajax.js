
$( "button" ).click( function() {
    $( "li" ).each( function() {
    console.log( $( this ).text() );
    } );
    } );