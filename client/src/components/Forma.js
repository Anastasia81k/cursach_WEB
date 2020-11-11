/*import React, {useEffect} from 'react';*/
import React, { useState } from "react";
import axios from "axios";

export const Forma = () =>{

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "POST",
            url: "https://formspree.io/f/mbjpkjlk",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message"></textarea>
                <button type="submit" disabled={serverState.submitting}>
                    Submit
                </button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                )}
            </form>
        </div>
    );

/*
    return(
        <div>
            <div className="row">
                <form className="col s12" action="https://formspree.io/nastya81k@gmail.com"
                      method="POST">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate"/>
                                <label htmlFor="icon_prefix">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="icon_telephone" type="email" className="validate"/>
                                <label htmlFor="icon_telephone">Email Id</label>
                        </div>
                    </div>
                    <div className="row">
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea id="textarea" className="materialize-textarea"></textarea>
                                    <label htmlFor="textarea">Textarea</label>
                                </div>
                            </div>
                    </div>
                    <input onClick={}/>

                </form>
            </div>
        </div>
    )

 */
}






