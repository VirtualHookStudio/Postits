import React, { useState, useEffect, useRef } from "react"
import axios from 'axios'

import {Title, FrameDiv, ButtonCreate} from '.././styles/styles';

import baseApiUrl from '../global'
import Postit from "./Postit";

const App = () => {
    const [listPostits, setListPostits] = useState([])
    const constrainRef = useRef(null)

    useEffect(() => reset(), [])

    const reset = () => {
        axios.get(`${baseApiUrl}/postit`).then(res => setListPostits(res.data))
    }
    
    const createPostit = () => {
        axios.post(`${baseApiUrl}/postit`).then(async () => reset())
    }

    const deletePostit = (id) => {
        axios.delete(`${baseApiUrl}/postit`, { data: { id } }).then(async () => reset())
    }

    const updatePostit = (postitUpdated) => {
        axios.put(`${baseApiUrl}/postit`, { data: { postitUpdated } }).then(async () => reset())
    }

    return(
        <>
            <Title>POST-ITS</Title>
            <ButtonCreate onClick={() => createPostit()} className="material-icons">add</ButtonCreate>
            <FrameDiv ref={constrainRef}>
                {listPostits.map(postit => (
                    <Postit key={postit.id} p={postit} c={constrainRef} d={deletePostit} u={updatePostit}/>
                ))}
            </FrameDiv>
        </>
    )
}

export default App;