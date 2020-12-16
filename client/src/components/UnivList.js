import React from 'react'
import {Link} from 'react-router-dom'

export const UnivList = ({ universitys }) => {


    return (
        <table>
            <thead>
            <tr>
                <th className="center">№</th>
                <th className="center">Город</th>
                <th className="center">Институт</th>
                <th className="center">Рейтинг</th>
                <th className="center">Посилання</th>
            </tr>
            </thead>

            <tbody>
            { universitys.map((university, index) => {
                return (
                    <tr className="center" key={university._id}>
                        <td className="center">{index + 1}</td>
                        <td className="center">{university.universCity}</td>
                        <td className="center">{university.university}</td>
                        <td className="center rating">{university.raiting}</td>
                        <td className="center">{university.link}</td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
