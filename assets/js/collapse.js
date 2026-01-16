$(".header").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $header.text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Collapse" : "Expand";
        });
    });

});

// Enhanced abstract accordion functionality
$(".abstract-header").click(function () {
    var $header = $(this);
    var $content = $header.next('.abstract-content');

    // Toggle the content
    $content.slideToggle(400, function () {
        // Toggle active class for arrow rotation
        if ($content.is(":visible")) {
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }
    });
});

// Image scroller navigation
$(".scroller-arrow").click(function () {
    var $arrow = $(this);
    var $container = $arrow.siblings('.image-scroller');
    var scrollAmount = 420; // Image width (400px) + gap (15px) + some padding

    if ($arrow.hasClass('left')) {
        $container.animate({ scrollLeft: $container.scrollLeft() - scrollAmount }, 300);
    } else if ($arrow.hasClass('right')) {
        $container.animate({ scrollLeft: $container.scrollLeft() + scrollAmount }, 300);
    }
});

// Lightbox functionality for images
$(document).ready(function() {
    // Create lightbox modal if it doesn't exist
    if ($('.lightbox-modal').length === 0) {
        $('body').append('<div class="lightbox-modal"><button class="lightbox-close">&times;</button><img class="lightbox-content" src="" alt=""></div>');
    }

    // Click on image to open lightbox
    $('.image-tile img').click(function() {
        var imgSrc = $(this).attr('src');
        var imgAlt = $(this).attr('alt');
        $('.lightbox-content').attr('src', imgSrc).attr('alt', imgAlt);
        $('.lightbox-modal').addClass('active');
    });

    // Click X or background to close
    $('.lightbox-close, .lightbox-modal').click(function(e) {
        if (e.target === this) {
            $('.lightbox-modal').removeClass('active');
        }
    });

    // ESC key to close
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('.lightbox-modal').removeClass('active');
        }
    });
});
