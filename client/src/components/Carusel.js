import React from 'react'
import cadet from '../assets/cadets.png'


export  const Carusel = () =>{

    window.M.addEventListener('DOMContentLoaded', function() {
        //find wich slide is the middle one
        var carousel_items = document.querySelectorAll('.carousel-item').length;
        var middle_slide = Math.round(carousel_items / 2)

        console.log('The slide in the middle is the ' + middle_slide + ' out of ' + carousel_items)

        //Carousel initialization
        var options = {};
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, options);

        //Set the carousel to show the middle slide first
        var elem = document.querySelector('.carousel');
        var instance = M.Carousel.getInstance(elem);
        instance.set(middle_slide);
    })

    return(
        <div>
            <div className="carousel">
                <a className="carousel-item" style="height: 350px; width: 500px" href="#one!"><img
                    src="https://agrostory.com/upload/resize_cache/iblock/db8/300_300_1/db842560981b0626ff30dc457e46af8a.jpg"/></a>
                <a className="carousel-item" style="height: 350px; width: 500px" href="#two!"><img
                    src="https://o-prirode.ru/wp-content/uploads/2019/03/loshad-1024x640.jpg"/></a>
                <a className="carousel-item" style="height: 350px; width: 500px" href="#three!"><img
                    src="https://bipbap.ru/wp-content/uploads/2017/05/foto_krasivyx_loshadej_05.jpg"/></a>
                <a className="carousel-item" style="height: 350px; width: 500px" href="#four!"><img
                    src="https://most-beauty.ru/wp-content/uploads/2016/09/TOP-samyh-krasivyh-loshadej.jpg"/></a>
                <a className="carousel-item" style="height: 350px; width: 500px" href="#five!"><img
                    src="https://мтв.онлайн/files/2019/31676-119814-7869-f9c1yi.ww155.jpg"/></a>
            </div>
        </div>
    )
}