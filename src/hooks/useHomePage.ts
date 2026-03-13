// IMPORT
import { useState } from "react"
import { useInputStore } from "../stores/zustand"
import getLocalData from "../functions/getLocalData"

// TYPES
type items = {
  id:number,
  price:string,
  quantity:string
}

type friendsType = {
  id:number,
  name:string,
  items:items[],
  createdAt:string
}

type productsType = {
  id:number,
  name:string,
  price:number,
  createdAt:string
}

// MY-CODE
const useHomePage = () => {
  // STATES
  const {input,setInput} = useInputStore()

  const [friends,setFriends] = useState<friendsType[]>(()=> {
    return getLocalData("friends" , [])
  });

  const [products,setProducts] = useState<productsType[]>(()=> {
    return getLocalData("products" , []);
  })

  // HANDLE CHANGES
  const handleChange = (key:string,value:string) => {
    setInput(key,value);
  }

  // HANDLE CLICKS
  const handleClick = (key:string) => {
    if(key == "friends") {
      if(!input.friendsName.trim()) return;
      setFriends(prev=> ([...prev,
      {
        id:Date.now(),
        name:input.friendsName,
        items:[],
        createdAt:new Date().toISOString().split("T")[0]}]));
        setInput("friendsName", "");
    } else {
      if(!input.productsName.trim() || !input.productsPrice.trim() || input.productsPrice === "0") return;
       setProducts(prev=> ([...prev,
      {
        id:Date.now(),
        name:input.productsName,
        price:Number(input.productsPrice),
        createdAt:new Date().toISOString().split("T")[0]}]));
        setInput("productsName" , "");
        setInput("productsPrice" , "");
    }
  }

  const handleEdit = (key:string) => {
    if(key == "friends"){
      if(!input.friendsName.trim()) return;
      setFriends(prev=> prev.map((v) => v.id === Number(input.friendsId) ? {...v,name:input.friendsName} : v));
    }else {
      if(!input.productsName.trim() || input.productsPrice == "0") return;
      setProducts(prev=> prev.map((v)=> v.id === Number(input.productsId) ? {...v,name:input.productsName , price:Number(input.productsPrice)} : v));
    }
  }

  const handleDelete = (key:string) => {
     if(key == "friends") {
        setFriends(prev=> prev.filter(value => value.id !== Number(input.friendsId)))
     } else {
        setProducts(prev=> prev.filter(value => value.id !== Number(input.productsId)))
     }
  }

  // RETURN
  return {input, setInput, products, friends, handleChange,handleClick,handleEdit,handleDelete}
}

// EXPORT
export default useHomePage;