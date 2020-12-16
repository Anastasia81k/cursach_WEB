import React from 'react'


export const MyComponent = ({ universitys }) => {
    if (!universitys.length) {
        return <p className="center">пока нет</p>
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Місто</th>
                <th>Заклад</th>
                <th>Рік</th>
                <th>Рейтинг</th>
            </tr>
            </thead>

            <tbody>
            { universitys.map((university, index) => {
                return (
                    <tr key={university._id}>
                        <td>{university.universCity}</td>
                        <td>{university.university}</td>
                        <td>{university.year}</td>
                        <td>{university.raiting}</td>
                    </tr>
                )
            }) }
            </tbody>
        </table>
    )
}
