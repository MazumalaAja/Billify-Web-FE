// IMPORT
import { create } from "zustand";
import getLocalData from "../functions/getLocalData";

// TYPE
interface UIState {
  openToggle: boolean;
  setOpenToggle: (value: boolean) => void;
}

interface InputState {
 input:{
  friendsId:string,
  productsId:string,
  friendsName:string,
  productsName:string,
  productsPrice:string,
  event:string,
  tax:string,
 }
  setInput:(field:string,value:string) => void,
}

// STORE
const useUIStore = create<UIState>((set) => ({
  openToggle: false,
  setOpenToggle: (value) => set({ openToggle: value }),
}));

const useInputStore = create<InputState>((set) => ({
  input:{
    friendsId:"",
    productsId:"",
    friendsName:"",
    productsName:"",
    productsPrice:"",
    event:getLocalData("event",""),
    tax:getLocalData("tax","")
 },
  setInput:(field,value) => set((state) => ({
    input:{...state.input,[field]:value}
  }))
}))

// EXPORT
export { useUIStore , useInputStore};