import { useEffect, useReducer, useState } from "react";
import noteContext from "./noteContext";
import { json } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const NoteState = ({children})=>{
  const {isAuthenticated,loginWithRedirect,logout,user,isLoading}=useAuth0();
  useEffect(()=>{
    if(isAuthenticated){
      setUser(user);
    }else{
      setUser(false);
    }
  },[isAuthenticated])

    const [sidebaropen,setsidebar]=useState(false);
    const [main,setMain]=useState('all');
    const [universalData,setUniversalData]=useState([]);
    const [tempData,setTempData]=useState([]);
    const [grid,setGrid]=useState(true);
    const [User,setUser]=useState(null);
    var storedCart = JSON.parse(localStorage.getItem('mycart')) || [];
    const [cart,setcart]=useState(storedCart);
    const [sort,setSort]=useState("sorting");
    const [text,setText]=useState('');
    const [on,setON]=useState(false);
    const url="https://course-api.com/react-store-products";
    var tempcart=[];
    let tmpdata;
    const myfetchProducts=async()=>{
        try{
        const response = await fetch(url);
        const mydata=await response.json();
        setcart([]);
        setUniversalData(mydata);
        setTempData(mydata);
        }
 catch(e){
 }
}

const clearCart=()=>{
  localStorage.setItem('mycart', JSON.stringify([]));
  setcart([]);
}

const deletefromCart=(name)=>{
  const data=JSON.parse(localStorage.getItem('mycart'));
  const filterData=data.filter((product)=>product.name!==name)
  setcart(filterData);
  localStorage.setItem('mycart', JSON.stringify(filterData));
}

const AddToCart=(e)=>{
  let  updatedCart;
  setON(true);
 const itemName= e.target.value
 var [name,price,num,image]=itemName.split(",");
 
 
  storedCart = JSON.parse(localStorage.getItem('mycart')) ||[];
  const checkPreExist=storedCart.filter((prod)=>prod.name===name);

  if(checkPreExist.length>0){
    var preNum=checkPreExist && checkPreExist[0].num;
    deletefromCart(name);
    storedCart = JSON.parse(localStorage.getItem('mycart')) ||[];
    num=Number(num)+Number(preNum);
     updatedCart = [...storedCart,{name,price,num,image}] ;
  }else{
    updatedCart = [...storedCart,{name,price,num,image}]} ;// Create a new array with the updated items
    setcart(updatedCart); // Update the cart state
    localStorage.setItem('mycart', JSON.stringify(updatedCart)); // Store the cart in localStorage
   
  };



const getmycart=()=>{
  storedCart = JSON.parse(localStorage.getItem('mycart'));
  return storedCart;

}

const searchBar=(e)=>{
    setText(e.target.value);
 
    if(main==='all'){
     tmpdata =tempData.filter((product)=>{
      return product.name.toLowerCase().startsWith(e.target.value);
    });
    setUniversalData(tmpdata);
  
  }else{
    const newtmpdata=tempData.filter((product)=>product.category===main);
    tmpdata =newtmpdata.filter((product)=>{
      return product.name.toLowerCase().startsWith(e.target.value);
  });
  setUniversalData(tmpdata);
 
  }
}

  const filterout=()=>{
    return universalData;
  }

  const clearFilter=()=>{
    setMain('all');
    setText('');
    setUniversalData(tempData);
  }

  const updataSort=(e)=>{
    setSort(e.target.value);
   if(sort==="ascending"){
    const data =filterout();
       setUniversalData(data.sort((a,b)=>b.price-a.price));   
   }

   else if(sort==="descending"){
    const data =filterout();
    setUniversalData(data.sort((a,b)=>a.price-b.price));  
}

else if(sort==="desorting"){
  const data =filterout();
  setUniversalData(data.sort((a,b)=>a.name.localeCompare(b.name))); 
}

else {
  const data =filterout();
  setUniversalData(data.sort((a,b)=>{
   return b.name.localeCompare(a.name);
}));
}
}

const categoryFilter=(e)=>{
  setMain(e.target.value);
  setText('');
const data=tempData;
if(e.target.value!=='all'){
const newtmpdata=data.filter((product)=>product.category===e.target.value);
setUniversalData(newtmpdata);}
else{
  setUniversalData(data);
}
}

 useEffect(()=>{ 
    myfetchProducts();
    },[]);

    return(
    <noteContext.Provider value={{deletefromCart,cart,setcart,clearCart,on,User,loginWithRedirect,logout,getmycart,AddToCart,tempcart,cart,text,main,setMain,clearFilter,categoryFilter,updataSort,grid,setGrid,filterout,text,setText,searchBar,sidebaropen,setsidebar,universalData,setUniversalData,tempData,setTempData}}>
        {children} 
    </noteContext.Provider>
    );
}

export default NoteState;