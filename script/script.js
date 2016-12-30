jQuery( function( $ ) {
      $( '#get-another-quote-button' ).on( 'click', function ( e ) {
        e.preventDefault();
        $.ajax( {
          url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
          success: function ( data ) {
            var post = data.shift(); // The data is an array of posts. Grab the first one.
            $('#slide-down-animation').hide();
            $( '#quote-content' ).html(post.content );
            $( '#quote-title' ).text( post.title );
            $("#slide-down-animation").show( "slide");
          },
          cache: false
        } );
      } );
} );