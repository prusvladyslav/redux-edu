import React from "react";
import Item from "./shopItem.jsx";
import {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from "axios";
import {NavLink} from 'react-router-dom';
import {fetchData} from '../store/reducer'
const List = props => {
    const dispatch = useDispatch()
    
 
 
        const [posts,setPosts]=useState([]);
         useEffect(() => {
             axios.get('./index.json')
             .then(res => {
                 setPosts(res.data)
             })
         },[])
         useEffect(() => {
            dispatch(fetchData())
          }, [])
          const data = useSelector(state=>state.allReducer.data[0])
  console.log(data);
  console.log(posts);
    return(
        
        <>
        <div className="body">
            <h2 style={{
                textAlign: 'center',
                fontSize: '30px',
            }}>Latest Arrival</h2>
            <NavLink to='/favorites'>Favorites</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <ul className="posts-list">
                {data?.map(post => <Item imgUrl={post.imgUrl}  name={post.name} price={post.price} key={post.article} article={post.article} handleClick={props.handleClick} isFavorited={false} ></Item>)}
            </ul>
        </div>

        </>
    )
}

export default List;