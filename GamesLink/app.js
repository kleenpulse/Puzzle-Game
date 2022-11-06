function random(min, max) {
    return Math.random() * (max - min) + min;
}

(function ($) {
    var x1 = Math.floor(Math.random() * 50),
        y1 = Math.floor(Math.random() * 50),
        x2 = Math.floor(Math.random() * 2000) + 500,
        y2 = Math.floor(Math.random() * 2000) + 500;
    var paths = {
        1: "M344.46,410.84c-23.21-3-50.42,5.56-74.12,23.35-23.36,17.83-43.22,44.88-43.59,80,.18,4.86-.36,23.91,10.36,49.57,10.59,25.32,32.43,57.25,74.23,80,35.05,18.72,62.17,20.25,91.33,19.79,29.4-.93,60.84-3.84,110.12-4.65,56.37-2,93.25-.35,125.49-.08,31.94-.21,59.24-1.84,89.19-21.35,50.19-32.36,65.29-89.58,57.06-131-7.66-42.59-38.64-69.33-67.65-68.42-20.72.69-33.54,14.2-57.12,32.46-23.18,17.63-57.12,40-110.87,43.67-71,3.19-112.81-27.95-139-53C382.9,434.78,371.58,414.48,344.46,410.84Z",
        2: "M541.87,590.3c8.22-36.93,39-65.51,53.51-89.87,8.23-14.57,6.81-29.15,2.44-47.15-4.39-17.49-11.75-38.4-15.85-54-2.24-6.26-8-33.43-18.6-65.42-11.28-30.63-27.38-66.07-66.62-57.72-23,5.61-38.87,25-53.84,50.27-14.81,25.69-28.69,57.19-44.33,97.5-21.55,61.69-31.95,95.47-40.71,122.26-7.38,26.88-13.13,46.78,6.61,83,21.11,40.7,68.28,73.58,105.35,87,38,14.25,65.92,9.06,70.51-7.28,4.61-14.65-1.33-38.32-2.51-61.1C535.84,624.89,538.61,602.93,541.87,590.3Z",
        3: "M594.34,582.38C649.48,532,697,504.77,698.18,470.28c-.42-23.24-24.53-32.88-49.09-39.19-25.18-5.67-50.82-8-68.47-1.89-14.33,5.27-19.28,16-28.58,30.43-9.33,13.93-23,31.48-55.46,39.78-37.53,8.81-68.28-4.29-90.55-17.72-23-13.87-37.55-28.09-59.82-31.71-38.13-7.94-72.75,23.51-68.38,69.07,2.56,35.07,35.86,82.24,84.08,109.85,47.3,28.89,109.52,38.21,148.48,27.09,26-6.85,33-16.34,41.57-27.54C560.21,616.93,570,603.71,594.34,582.38Z",
        4: "M630.08,580.83c13.28-2.61,17-13.29,20-27.43,3.38-14,6.1-31.38,25.4-43.36,26.92-16.54,55.07,3.16,72.31-15.07,12.4-12.76,15.67-46.45-13.87-75.07-21-20-45-24.18-71.72-25.92-27-1.51-56.61-.56-95.8-5-53.55-5-95.21-17.53-139.39-23.51-43.2-5.65-88.93-4.72-128,24.86-33.48,25.82-41.57,55.9-41,77.94.56,22.44,9.72,36.85,11.57,40.76,20.55,33.77,71.28,53.37,108.27,41.93,28.78-7.6,33.43-37.75,78.07-42.23,43.26-.31,46.43,26.24,83.43,43.68C568.22,566.49,604.57,584.74,630.08,580.83Z"
    };
    $.each(paths, function (i) {
        var svg = function ($path) {
            return "<svg id='blob_" + i + "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' class='blob'>" +
                "<defs>" +
                "<linearGradient id='gd_" + i + "' x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' gradientUnits='userSpaceOnUse'>" +
                "<stop offset='0' stop-color='hsla(" + Math.floor(random(180, 250)) + ",100%,30%," + [(random(0.05, 0.2)).toFixed(2)] + ")'/>" +
                "<stop offset='1' stop-color='hsla(" + Math.floor(random(12, 49)) + ",100%,70%," + [(random(0.2, 0.6)).toFixed(2)] + ")'/>" +
                "</linearGradient>" +
                "</defs>" +
                "<path fill='url(#gd_" + i + ")' d='" + $path + "'/>" +
                "</svg>"
        };
        $('body').append(svg(paths[i]));
    });
    var w = $(window).width(),
        h = $(window).height();
    $('.blob').wrapAll('<div id="blobs"></div>');
    $('.blob').each(function () {
        $(this).css({
            top: [Math.floor(Math.random() * h) - 1000] + 'px',
            left: [Math.floor(Math.random() * w) - 1000] + 'px',
        });
    });
    $(window).on('resize', function () {
        $('.blob').each(function () {
            $(this).css({
                top: [Math.floor(Math.random() * h) - 1000] + 'px',
                left: [Math.floor(Math.random() * w) - 1000] + 'px'
            });
        });
    }).on('mousemove', function (e) {
        var i = 2;
        $('#blobs .blob').each(function () {
            var x = e.clientX / $(window).width() * i++,
                y = e.clientY / $(window).height() * i++;
            $(this).css({ transform: 'translate3d(-' + x + 'rem, -' + y + 'rem, 0)' });
            $.globalCompositeOperation = 'lighter';
        });

    });
}(jQuery));

