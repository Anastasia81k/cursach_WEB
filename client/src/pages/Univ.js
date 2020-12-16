import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'

import {UnivList} from "../components/UnivList";
import {BlockNews} from "../components/BlockNews";
import {Loader} from "../components/Loader";





import {Table} from "../components/Table";

import {AuthContext} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'




export const Univ = () => {
    const [universitys, setUniversity] = useState([])
    const {loading, request} = useHttp()
    const history = useHistory()
    const auth = useContext(AuthContext)
    //const {request} = useHttp()
    const [link, setLink] = useState('')



    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/university', 'GET', null, {
            })
            setUniversity(fetched)
        } catch (e) {}
    }, [ request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])


    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/detail/${data.link._id}`)
            } catch (e) {}
        }
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            <div className="site_content">
                <div className="row">
                    <div className="col s8 " style={{paddingTop: '2rem'}}>
                        <div className="input-field">
                            <input
                                placeholder="Вставьте ссылку"
                                id="link"
                                type="text"
                                value={link}
                                onChange={e => setLink(e.target.value)}
                                onKeyPress={pressHandler}
                            />
                            <label htmlFor="link">Введите ссылку</label>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {!loading && <UnivList universitys={universitys} />}

                </div>
                <div className="sidebar_container"><BlockNews/></div>
            </div>
        </>
    )
}
