import React, {useState, useEffect, useContext} from 'react'
import {useHttp} from "../hooks/http.hook";

import 'react-hooks-lib'
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";


export const AuthPage = () =>{
    const auth = useContext(AuthContext)
    const message = useMessage()
 const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({ ///создание хука с объектом
        email: "", password: ""
    })

    useEffect(() =>{
        message(error)
       clearError()
    }, [error, message, clearError])

    useEffect(() =>{
        window.M.updateTextFields() ///позволяет сделать активными inputs
    }, [])

    //для обрабатывания формы
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})  ///опратор spred  event.target.name - динамический     onChange in input -update form
    }


//осуществление запроса на сервер
    const registerHandler = async  () =>{
        try{
            const data = await request("/api/auth/register", "POST", {...form})
            message(data.message)
        }catch(e){}
    }


    const loginHandler = async  () =>{
        try{
            const data = await request("/api/auth/login", "POST", {...form})
            auth.login(data.token,data.userId )
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

                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизація</span>

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
                        <button className="btn yellow darken-4" onClick={loginHandler} disabled={loading} >Вхід</button>
                        <button className="btn grey lighten-1 black-text" onClick={registerHandler} disabled={loading} >Реєстрація</button>
                    </div>
                </div>
            </div>
        </div>
    )
}