
import Item from "./shopItem.jsx";
import { useSelector } from "react-redux";
import axios from "axios";
import {NavLink} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Modal from './modal.jsx'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
const Cart = (props) => {
    const [cartArray,setCartArray] = useState(JSON.parse(localStorage.getItem('cartArray')) || [])
    const [isinCart,setCart] = useState(true);
    const [modalOpenFirst,setModalOpen] = useState(false);
    const modalOpen = useSelector(state => state.modalOpen.modalOpen.payload)
    const openFirstModal = () => {
        setModalOpen(false)
      }
     
     const deleteFromCart = () => {
        if (isinCart){
            const cartArrayNew = JSON.parse(localStorage.getItem('cartArray')) || []
            setCart(true);
            cartArrayNew.push(props.article)
              localStorage.setItem('cartArray', JSON.stringify(cartArrayNew))
              openFirstModal()
        }  
      }    
useEffect(() => {
 if (JSON.parse(localStorage.getItem('cartArray'))?.includes(props.article)){
          setCart(true)
      }
else {
          setCart(false)
      }
         },[])
    const [posts,setPosts]=useState([]);
         useEffect(() => {
             axios.get('./index.json')
             .then(res => {
                 console.log(res);
                 setPosts(res.data)
             })
         },[])
     let array = posts.filter(post =>  JSON.parse(localStorage.getItem('cartArray'))?.includes(post.article))
     console.log(array);

     const LoginSchema = Yup.object({
        name: Yup.string().required('Required'),
       surname: Yup.string().required('Required'),
       age: Yup.number().required('Required'),
address: Yup.string().min(6, 'Must be at leaset 6 characters').required('Required'),
phone: Yup.number().required('Required'),
    })

    
const handleFormSubmit =(values) => {
    console.log(`Checkout Info`,{UserInfo:values},{ItemsList:array});
}
    return(
        <>
        <NavLink to='/appbody'>Main</NavLink>
        <ul className="posts-list">
        {array.map(post =>  < Item imgUrl={post.imgUrl}  name={post.name} price={post.price} key={post.article} article={post.article} handleClick={props.handleClick} isFavorited={false} ></Item>)}
            </ul>
            <Formik
            initialValues={{name: '', surname: '',age:'',address:'',phone:''}}
            validationSchema={LoginSchema} onSubmit={handleFormSubmit}>
            {({isSubmitting}) => (
                <Form style={{padding: '40px 20px'}}>
                    <div style={{padding: '8px'}}>
                <Field name="name" type="text" placeholder="Your name"/>
                <ErrorMessage component="div" style={{color: 'red'}} name="name"/>
                    </div>
                    <div style={{padding: '8px'}}>
                <Field name="surname" type="text" placeholder="Your surname"/>
                <ErrorMessage component="div" style={{color: 'red'}} name="surname"/>
                    </div>
                    <div style={{padding: '8px'}}>
                <Field name="age" type="number" placeholder="Your age"/>
                <ErrorMessage component="div" style={{color: 'red'}} name="age"/>
                    </div>
                    <div style={{padding: '8px'}}>
                <Field name="address" type="text" placeholder="Your delivery address"/>
                <ErrorMessage component="div" style={{color: 'red'}} name="address"/>
                    </div>
                    <div style={{padding: '8px'}}>
                <Field name="phone" type="number" placeholder="Your phone number"/>
                <ErrorMessage component="div" style={{color: 'red'}} name="phone"/>
                    </div>
                   
                    <button >Checkout</button>
                </Form>
            )}
        </Formik>
         { <Modal mainBackgroundColor='rgba(255, 17, 0, 0.705)'  headerBackgroundColor='red' modalTitle='Delete from cart?'  onclose={openFirstModal}  isOpen={modalOpenFirst} closeButton={true} 
               action={<div className="modal-buttons-container"><button   className='button' onClick={deleteFromCart}>Ok</button>
               <button  className='button' >Cancel</button></div>}
               />}
        </>
    )
}
export default Cart