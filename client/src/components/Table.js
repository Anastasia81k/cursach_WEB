import React from 'react'
import src1 from "../assets/src1.jpg";

export  const Table = () => {
    return(
        <div>
            <div className="content">
                <table>
                    <tr>
                        <th></th>
                        <th>ВВНЗ</th>
                        <th className="center">Рік заснування</th>
                        <th className="center">Рейтинг</th>
                    </tr>
                    <tr>
                        <td className="center"><img src={src1}/></td>
                        <td>1.<a href="http://www.viti.edu.ua/">ВІТІ</a></td>
                        <td className="center">1919</td>
                        <td className="center rating">8.1</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}