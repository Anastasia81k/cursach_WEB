import React, {useState} from "react";
import axios from "axios"; // For making client request.

export const FeedbackForm = () => {
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

    return(
        <div>
            <h1>Задайте нам питання</h1>
            <form onSubmit={handleOnSubmit}>

                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"  />
                </div>
                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" name="surname"  />
                </div>

                <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                     <label htmlFor="email">Email:</label>
                    <input id="email" type="email" name="email" required />
                </div>


                <div className="input-field col s6">
                    <i className="material-icons prefix">attach_file</i>
                    <textarea id="message" className="materialize-textarea" name="message"></textarea>
                    <label htmlFor="message">Message:</label>
                </div>

                <button  className="waves-effect waves-light btn" type="submit" name="action" disabled={serverState.submitting}>
                    Submit
                    <i className="material-icons right">send</i>
                </button>
                {serverState.status && (
                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                    </p>
                )}
            </form>
        </div>
    )
}