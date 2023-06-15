import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery if it's not already included in your project

function ScrollComponent() {
    useEffect(() => {
        $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.fixed-top').addClass('actives');
        } else {
            $('.fixed-top').removeClass('actives');
        }
        });
}, []);

    // return <div className="fixed-top">Scroll Component</div>;
}

export default ScrollComponent;