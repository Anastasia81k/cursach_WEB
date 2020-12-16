import React from 'react'

export  const BlockNews = () => {
    return(
        <div>
                    <div className="sidebar">
                        <h2>Пошук</h2>
                        <form method="post" action="#" id="search_form">
                            <input type="search" name="search_field" placeholder="ваш запрос"/>
                            <input type="submit" className="btn" value="найти"/>
                        </form>
                    </div>
                    <div className="sidebar">
                        <h2>Новини</h2>
                        <span>13.11.2020</span>
                        <p>Особливості вступної кампанії до закладів військової освіти у 2020 році</p>
                        <a href="#">читать</a>
                    </div>
                    <div className="sidebar">
                        <h2>Рейтинг ВВНЗ</h2>
                        <ul>
                            <li><a href="#">ВІТІ</a><span className="rating-sidebar">8.1</span></li>
                            <li><a href="#">ХНУПС</a><span className="rating-sidebar">8.0</span></li>
                            <li><a href="#">ВІКНУ</a><span className="rating-sidebar">7.8</span></li>
                            <li><a href="#">ЖВІ</a><span className="rating-sidebar">7.2</span></li>
                        </ul>
                    </div>
        </div>
    )
}