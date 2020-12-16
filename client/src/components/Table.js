import React from 'react'
import src1 from "../assets/src1.jpg";
import src2 from "../assets/src2.jpg";
import src4 from "../assets/src4.jpg"

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
                        <td><a href="http://www.viti.edu.ua/">ВІТІ</a></td>
                        <td className="center">1919</td>
                        <td className="center rating">8.1</td>
                    </tr>
                    <tr>
                        <td className="center"><img src={src2}/></td>
                        <td><a href="http://www.hups.mil.gov.ua//">ХНУПС</a></td>
                        <td className="center">2003</td>
                        <td className="center rating">8.0</td>
                    </tr>
                    <tr>
                        <td className="center"><img src={src4}/></td>
                        <td><a href="https://mil.univ.kiev.ua/">ВІКНУ</a></td>
                        <td className="center">1998</td>
                        <td className="center rating">7.8</td>
                    </tr>
                </table>



            </div>
        </div>
    )
}