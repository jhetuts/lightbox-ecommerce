$(document).on('ready', function() {
    $('.learn-btn').on('click', function(e) {
        e.preventDefault();
        let clicked = $(this);
        let parentId = clicked.data('parentid');

        function lightbox() {
            $(`#${parentId}`).addClass('active');
            $(`#${parentId} .slider`).slick('refresh');
            if ($(window).width() > 768) {
                $(`#${parentId} figcaption`).height($(`#${parentId} .slick-list`).height() - 20);
            }
            clicked.text('Back');
            document.addEventListener('click', outsideClick);
            document.addEventListener('keyup', checkEscp);
        }

        function outsideClick(e) {
            if(e.target && e.target.classList.contains('figure-wrap')){
                e.target.classList.remove('active');
                $(`#${parentId} figcaption`).css('height', 'auto');
                $(`#${parentId} .slider`).slick('refresh');
                clicked.text('Learn more');
                document.removeEventListener('click', outsideClick);
            }
        }

        function checkEscp(e) {
            if(e.keyCode && e.keyCode === 27){
                $(`#${parentId}`).removeClass('active')
                $(`#${parentId} figcaption`).css('height', 'auto');
                clicked.text('Learn more');
                document.removeEventListener('click', checkEscp);
                return $(`#${parentId} .slider`).slick('refresh');
            }

        }

        if($(`#${parentId}`).hasClass('active')) {
            $(`#${parentId}`).removeClass('active')
            $(`#${parentId} figcaption`).css('height', 'auto');
            clicked.text('Learn more');
            return $(`#${parentId} .slider`).slick('refresh');
        }

        return lightbox();
    })
});