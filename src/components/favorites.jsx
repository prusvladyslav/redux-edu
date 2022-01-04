import React from "react";
import Item from "./shopItem.jsx";
import {useState,useEffect} from 'react'
import axios from "axios";
import {NavLink} from 'react-router-dom';
const Favorites = (props) => {
    const [posts,setPosts]=useState([]);
         useEffect(() => {
             axios.get('./index.json')
             .then(res => {
                 console.log(res);
                 setPosts(res.data)
             })
         },[])
     let array = posts.filter(post =>  JSON.parse(localStorage.getItem('favoritesArray'))?.includes(post.article))
     console.log(array);
    return(
        <>
        <NavLink to='/appbody'>Main</NavLink>
        <ul className="posts-list">
        {array.map(post => <Item imgUrl={post.imgUrl}  name={post.name} price={post.price} key={post.article} article={post.article} handleClick={props.handleClick} isFavorited={false} ></Item>)}

            </ul>
        </>
    )
}
export default Favorites