import "../Styles/cards.scss"
import Card from "./Card"
import React, { useState } from "react"

function Cards() {
    
    const [items, setItems] = useState([
        {id:1, img: '/Img/angular.png', stat: ""}, 
        {id:1, img: '/Img/angular.png', stat: ""}, 
        {id:2, img: '/Img/css.png', stat: ""}, 
        {id:2, img: '/Img/css.png', stat: ""}, 
        {id:3, img: '/Img/html.png', stat: ""}, 
        {id:3, img: '/Img/html.png', stat: ""}, 
        {id:4, img: '/Img/js.png', stat: ""}, 
        {id:4, img: '/Img/js.png', stat: ""}, 
        {id:5, img: '/Img/nodejs.png', stat: ""}, 
        {id:5, img: '/Img/nodejs.png', stat: ""}, 
        {id:6, img: '/Img/react.png', stat: ""}, 
        {id:6, img: '/Img/react.png', stat: ""}, 
        {id:7, img: '/Img/scss.png', stat: ""}, 
        {id:7, img: '/Img/scss.png', stat: ""}, 
        {id:8, img: '/Img/vue.png', stat: ""}, 
        {id:8, img: '/Img/vue.png', stat: ""}, 
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check (current){
        const updatedItems =[...items]
        if(updatedItems[current].id == updatedItems[prev].id){
            updatedItems[current].stat = 'current'
            updatedItems[prev].stat = 'current'
            setItems(updatedItems)
            setPrev(-1)
        } else {
            updatedItems[current].stat = 'wrong'
            updatedItems[prev].stat = 'wrong'
            setItems(updatedItems)
            setTimeout(() => {
                updatedItems[current].stat = ""
                updatedItems[prev].stat = ""
                setItems(updatedItems)
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id) {
        if(prev === -1){
            const updatedItems = [...items]
            updatedItems[id].stat = 'active'
            setItems(updatedItems)
            setPrev(id) 
        } else {
            check(id)
        }
    }
    return (
        <>
            <h1>Memory Game</h1>
            <div className="container">
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick}/>
                ))}
            </div>
        </>
    )
}

export default Cards