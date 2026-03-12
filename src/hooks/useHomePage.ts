// IMPORT
import { useState } from "react"

// TYPES
type inputType = {
    friendsName:string,
    productsName:string,
    productsPrice:string,
    event:string,
    tax:string,
}

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
  const [input,setInput] = useState<inputType>({
    friendsName:"",
    productsName:"",
    productsPrice:"",
    event:getLocalData("event" , ""),
    tax:getLocalData("tax" , ""),
  })

  const [friends,setFriends] = useState<friendsType[]>(()=> {
    return getLocalData("friends" , [])
  });

  const [products,setProducts] = useState<productsType[]>(()=> {
    return getLocalData("products" , []);
  })

  // GETLOCAL DATA
  function getLocalData (localKey:string,defaultValue:any) {
    try {
      const localData = localStorage.getItem(localKey);
      if(!localData) return defaultValue;
      const data = JSON.parse(localData);
      return data.length < 1 ? defaultValue : data;
    } catch(err) {
      console.log(err);
      return defaultValue;
    }
  }

  // HANDLE CHANGES
  const handleChange = (key:keyof inputType ,value:string) => {
    setInput(prev=> ({...prev,[key]:value}));
  }

  // HANDLE CLICKS
  const handleClick = (key:string) => {
    if(key == "friends") {
      setFriends(prev=> ([...prev,
      {
        id:Date.now(),
        name:input.friendsName,
        items:[],
        createdAt:new Date().toISOString().split("T")[0]}]));
        setInput(prev=> ({...prev,friendsName:""}))
    } else {
       setProducts(prev=> ([...prev,
      {
        id:Date.now(),
        name:input.productsName,
        price:Number(input.productsPrice),
        createdAt:new Date().toISOString().split("T")[0]}]));
        setInput(prev=> ({...prev,productsName:"" , productsPrice:""}))
    }
  }

  // RETURN
  return {input, products, friends, handleChange,handleClick}
}

// EXPORT
export default useHomePage;