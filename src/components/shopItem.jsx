import React,{useState,useEffect} from 'react';
import Modal from './modal.jsx'
import {useSelector,useDispatch} from 'react-redux';


function Item(props ){
  const dispatch = useDispatch()
    const [modalOpenFirst,setModalOpen] = useState(false);
    const modalOpen = useSelector(state => state.modalOpen.modalOpen.payload)
   useEffect(()=>{
    dispatch({type:'OPEN_MODAL',payload:false});
   },[])
    const openFirstModal = () => {
      if(modalOpen){
     
        dispatch({type:'OPEN_MODAL',payload:false});
        setModalOpen(!modalOpen)
       
      }
      else {
        dispatch({type:'OPEN_MODAL',payload:true});
        setModalOpen(!modalOpen)
 
      
      }
     }
const [favoritesArray,setFavoritesArray] = useState(JSON.parse(localStorage.getItem('favoritesArray')) || [])

const [isFavorited,setFavorite] = useState(false);

const toggleFavorites = () => {

  if (isFavorited){
      const favoritesArrayNew = JSON.parse(localStorage.getItem('favoritesArray')) || []
    //   console.log(favoritesArrayNew);
    setFavorite(false)
     let index = favoritesArrayNew.indexOf(props.article)
    
     favoritesArrayNew.splice(index,1)

     localStorage.setItem('favoritesArray', JSON.stringify(favoritesArrayNew))
  }  
  else {
    const favoritesArrayNew = JSON.parse(localStorage.getItem('favoritesArray')) || []
    // console.log(favoritesArrayNew);
    setFavorite(true);
    
      favoritesArrayNew.push(props.article)

      localStorage.setItem('favoritesArray', JSON.stringify(favoritesArrayNew))
  }
}    
   useEffect(() => {
if (JSON.parse(localStorage.getItem('favoritesArray'))?.includes(props.article)){
    setFavorite(true)
}
else {
    setFavorite(false)
}
   },[])
   const [cartArray,setCartArray] = useState(JSON.parse(localStorage.getItem('cartArray')) || [])
   const [isinCart,setCart] = useState(false);
   const addToCart = () => {

    if (isinCart){
      const cartArrayNew = JSON.parse(localStorage.getItem('cartArray')) || []
      //   console.log(favoritesArrayNew);
      setCart(false)
       let index = cartArrayNew.indexOf(props.article)
      
       cartArrayNew.splice(index,1)
  
       localStorage.setItem('cartArray', JSON.stringify(cartArrayNew))
openFirstModal()
  return
    }  
    else {
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
   let {name,price,imgUrl} = props
        return(
  <>
            <div data-testid='item' className="item-body" style={{
                display: props.display
            }} >
<img src={imgUrl} className="item-img" alt="store item" />

{/* |||| localStorage.getItem(`isFavorited${props.article}`) == `true`   */}
 {isFavorited ?  <img  src='./img/heart-black.png' alt='is Favorited' onClick={toggleFavorites}className='item-favourite'/> :
  <img  src="./img/heart.svg" alt="favorite item" className="item-favourite" onClick={toggleFavorites} /> }


<h2 className="item-title" >{name}</h2>
<h2 className="item-price" >{price}</h2>
<img src='./img/addtocart.png' className='item-cart' alt='add to cart'  onClick={openFirstModal}/>
            </div>
            <Modal mainBackgroundColor='rgba(255, 17, 0, 0.705)'  headerBackgroundColor='red' modalTitle='Add to cart?'  onclose={openFirstModal}  isOpen={modalOpenFirst} closeButton={true} 
               action={<div className="modal-buttons-container"><button onClick={addToCart} className='button'>Ok</button>
               <button className='button' >Cancel</button></div>}
               />
  </>
                
        )
    }

export default Item 