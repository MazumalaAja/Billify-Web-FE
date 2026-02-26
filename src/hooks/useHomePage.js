// =====> IMPORTS
import { useState } from "react"

// =====> MY-SETUP
const useHomePage = () => {
  // =====> GET LOCALSTORAGE
  const getLocalData = (key, defaultValue) => {
    const data = localStorage.getItem(key);
    if (data == undefined) return defaultValue;
    try {
      return data ? JSON.parse(data) : defaultValue;
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }

  // =====> STATES
  const [input, setInput] = useState({
    idTeman: null,
    idItem: null,
    title: "",
    namaTeman: "",
    namaItem: "",
    hargaItem: 0,
    jumlahItem: 0
  })
  const [listTeman, setListTeman] = useState(() => {
    return getLocalData("listTeman", [])
  });

  // =====> HANDLE CLICK
  const handleClickTeman = (action, id) => {
    if (!input.namaTeman.trim() || input.namaTeman == "") return;

    if (action == "add") {
      setListTeman(prev => [...prev,
      {
        id: Date.now(),
        namaTeman: input.namaTeman,
        items: [],
        createdAt: new Date().toISOString().split("T")[0],
        status: "tidak ada"
      }]);
    } else if (action == "edit") {
      setListTeman(prev => prev.map(data => data.id == id ? { ...data, namaTeman: input.namaTeman } : data));
    } else {
      setListTeman(prev => prev.filter(data => data.id !== id))
    }
    setInput(prev => ({ ...prev, id: null, namaTeman: "" }));
  }

  // =====> HANDLE CHANGE
  const handleChange = (key, value) => {
    setInput(prev => ({ ...prev, [key]: value }));
  }

  // RETURN
  return { handleClickTeman, handleChange, input, setInput, listTeman };
}

// =====> EXPORTS
export default useHomePage;