document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('#content-box h2');
    console.log(h2Elements);

    h2Elements.forEach(function(h2) {
        h2.addEventListener('mouseenter', function() {
            const section = h2.closest('section');
            
            const hiddenElements = section.querySelectorAll('h3, p, article');
            hiddenElements.forEach(function(element) {
                element.style.display = 'block';
                element.style.visibility = 'visible';
                setTimeout(function() {
                    element.style.opacity = '1';
                }, 300);
            });

            // 顯示媒體元素 (iframe, img, video)
            const hiddenVideoImage = section.querySelectorAll('iframe, img, video');
            hiddenVideoImage.forEach(function(element) {
                element.style.display = 'block';
                element.style.visibility = 'visible';
                element.style.opacity = '1';
            });
        });
    });
});
