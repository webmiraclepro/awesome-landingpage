$(() => {
    const size = $('.about-slideshow div').width();
    let count = 1;
    setInterval(() => {
        $('.about-slideshow div').css('transform','translateX('+(-size *count )+'px')
        count++;

        if(count == 3) {
            count = 0;
        }
        

    }, 4000);

})