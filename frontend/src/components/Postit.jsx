import {useState, useRef, useEffect} from 'react';
import {frame, motion} from 'framer-motion';

import {FrameDiv, PostitDiv, TitleNamePostit, SeparatorHr, TextAreaPostit, ButtonDelete, ButtonUpdate} from '.././styles/styles';

const Postit = ({p, c, d, u}) => {
    const [postit, setPostit] = useState(p)
    const [showUpdate, setShowUpdate] = useState(false)
    const [oldPostit] = useState(p)

    const locationRef = useRef(null)

    useEffect(() => {
        const storagePostit = JSON.parse(localStorage.getItem(`idpostit ${postit.id}`))
        if (storagePostit === 0 || storagePostit === null) return
        const location = JSON.parse(localStorage.getItem(`idpostit ${postit.id}`))
        
        locationRef.current.style.top = `${location[0]}px`;
        locationRef.current.style.left = `${location[1]}px`;
    }, [])

    useEffect(() => {
        if((postit.name === oldPostit.name) && (postit.text === oldPostit.text)) setShowUpdate(false)
        else setShowUpdate(true)
    }, [postit])

    const updatePostitStorage = () => {
        const frameDiv = c.current.getBoundingClientRect()
        const postitDiv = locationRef.current.getBoundingClientRect()
        
        if(postitDiv.left >= frameDiv.left && postitDiv.right <= frameDiv.right && postitDiv.top >= frameDiv.top && postitDiv.bottom <= frameDiv.bottom){
            localStorage.setItem(`idpostit ${postit.id}`, JSON.stringify([postitDiv.top, postitDiv.left]))
        }
    }

    const deletePostit = () => {
        event.preventDefault()
        d(p.id)
    }

    const updatePostit = () => {
        event.preventDefault()
        u(postit)
        setShowUpdate(false)
    }
    
    return(
        <PostitDiv
            style={{
                width: 250,
                height: 350,
                borderRadius: 3,
                background: '#f6ff66',
                border: '1px solid black',
                position: 'absolute',
                zIndex: 10,
                paddingLeft: 5,
                paddingRight: 5,
            }}
            onDrag={() => updatePostitStorage()}
            dragElastic={0}
            dragConstraints={c}
            drag
            dragMomentum={false}
            ref={locationRef}
        >
            <form action="">
                <ButtonDelete onClick={deletePostit} className="material-icons">delete</ButtonDelete>
                {showUpdate && (
                    <ButtonUpdate onClick={updatePostit} className="material-icons">update</ButtonUpdate>
                )}
                <TitleNamePostit type="text" value={postit.name} onChange={(e) => (setPostit({ ...postit, name: e.target.value }))} maxLength="25"></TitleNamePostit>
                <SeparatorHr />
                <TextAreaPostit maxLength="627" spellCheck="false" value={postit.text} onChange={(e) => (setPostit({ ...postit, text: e.target.value }))}/>
            </form>
        </PostitDiv>
    )
}

export default Postit;

