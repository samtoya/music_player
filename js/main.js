const toggleOptions = (ref) => {
    const optionsWrapper = $(ref).next();
    if (optionsWrapper.hasClass('hide')) {
        optionsWrapper.removeClass('hide');
    }
}

! function($, jQuery) {
    "use strict";
    
    const audio = new Audio;
    
    const play        = $('#play');
    const pause       = $('#pause');
    const rewind      = $('#rewind');
    const shuffle     = $('#shuffle');
    const forward     = $('#forward');
    const repeat      = $('#repeat');
    const playlist    = $('#playlist-toggler');
    const playlistContainer    = $('#playlist-container');
    const remaining   = $('#remaining');
    const total       = $('#total');
    const songTitle   = $('#title');
    const artistName  = $('#name');
    const artwork     = $('#artwork');
    const volumeBar   = $('#volume-bar');

    play.css('display', 'none');

    // Playlist
    playlist.on('click', function(e) {
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('#playlist-container').animate({
                right: '-5000px',
                duration: 5000,
                easing: 'ease'
            });
        } else {
            $(this).addClass('active');
            $('#playlist-container').animate({
                right: '0px',
                duration: 5000,
                easing: 'ease'
            });
        }
    });
    
    const media = {
        artist: {
            name: 'Chidinma',
        },
        // filename: './files/live_and_die.mp3',
        title: 'Live and Die',
        artwork: './images/ebony_sponsor.jpg'
    };

    if (audio.src === "") {
        setMedia(media);
        // audio.play();
    }

    function setMedia(media) {
        audio.src = media.filename;
        artwork.attr('src', media.artwork);
        songTitle.text(media.title);
        remaining.text(audio.currentTime);
        total.text(calcTotalTime(audio.duration));
        artistName.text(media.artist.name);
        volumeBar.css('width', `${75}%`);
    }

    function calcTotalTime(time) {
        return Math.round(parseFloat(time) / 60);
    }

    // audio.src = "./files/live_and_die.mp3";
    // audio.src = "http://streams.aftownmusic.com/151550845515155084555a54d2e79a774.mp3";
    audio.play();
}($, jQuery);