import React from 'react'
import './css/sample-wallpaper.css'

function Wrapper(props) {
    return (
        <article class="wallpaper">
            <img src={props.pic} alt="wallpaper #1" class="wallpaper" />
        </article>
    )
}

export default Wrapper;