// write your CatList component here
import React from 'react'

function CatList({catPics=[]}) {
    // console.log(catPics)
    return (
        <div>
            {catPics.map((image=><img src={image.url} key={image.id} alt="cat"></img>))}
        </div>
    )
}

export default CatList
