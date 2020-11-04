import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import 'react-hooks-lib'



export const AuthPage = () =>{
 const {loading, request} = useHttp()
    const [form, setForm] = useState({ ///создание хука с объектом
        email: "", password: ""
    })

    //для обрабатывания формы
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})  ///опратор spred  event.target.name - динамический     onChange in input -update form
    }


//осуществление запроса на сервер
    const registerHandler = async  () =>{
        try{
            const data = await request("/api/auth/register", "POST", {...form})
            console.log("data ", data)
        }catch(e){}
    }



/*
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }

 */


    return(
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>

                        <div className="input-field">
                            <input placeholder="Введите email" id="email" type="text" name="email" className="yellow-input" onChange={changeHandler}/>
                                <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field">
                            <input placeholder="Введите пароль" id="password" type="password" name="password"  className="yellow-input" onChange={changeHandler} />
                            <label htmlFor="email">Пароль</label>
                        </div>

                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" disabled={loading} >Войти</button>
                        <button className="btn grey lighten-1 black-text" onClick={registerHandler} disabled={loading} >Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    )
}