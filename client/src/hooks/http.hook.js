import {useState, useCallback} from 'react'

//позволяет вщаимодействовать с сервером
//useCallback  - react не входит в рекурсию

export const useHttp = () =>{
    const [loading, setLoading] = useState(false) //грузит сервер или нет
    const [error , setError] = useState(null)

    const request =useCallback( async (url, method = "GET", body = null, headers ={}) =>{ ///useCallback для того чтобы реакт не входил в рекурсию
        setLoading(true)
        try{  //try для оператора async  await
            if(body){
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json'

            }
            const response = await fetch(url, {method, body, headers})//браузерный метод, после того как дождались ответа с сервера
            const data = await response.json() ///распарсить данные полученые с сервера

            if (!response.ok) {
                throw new Error(data.message || "Что-то пошло не так")
            }

            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e   //для тогот чтоб отработать ошибку в компонентах
        }
    }, [])//набор зависимостей

    const clearError = () => setError(null)
    return{
        loading, request, error, clearError
    }
}