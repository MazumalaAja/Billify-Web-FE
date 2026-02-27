// =====> IMPORTS
import { useState } from "react"

// =====> MY-SETUP
const useHomePage = () => {
  // =====> GET LOCALSTORAGE
  const getLocalData = (key, defaultValue) => {
    const data = localStorage.getItem(key);
    if (data == undefined) return defaultValue;
    try {
      return data.length > 0 ? JSON.parse(data) : defaultValue;
    } catch (err) {
      console.log(err);
      return defaultValue;
    }
  }

  // =====> STATES
  const [input, setInput] = useState({
    idTeman: null,
    idItem: null,
    title: JSON.parse(localStorage.getItem("title")) ?? "",
    namaTeman: "",
    namaItem: "",
    hargaItem: "",
    jumlahItem: "",
    pajak: JSON.parse(localStorage.getItem("pajak")) ?? ""
  })
  const [listTeman, setListTeman] = useState(() => {
    return getLocalData("listTeman", []);
  });
  const [listItem, setListItem] = useState(() => {
    return getLocalData("listItem", []);
  })

  // =====> HANDLE CLICK
  const handleClickTeman = (action, id) => {
    if (input.namaTeman == "") return;

    if (action == "add") {
      if (listTeman.find(data => data.namaTeman == input.namaTeman.toLowerCase())) return alert("Nama telah digunakan")
      setListTeman(prev => (
        [...prev,
        {
          id: Date.now(),
          namaTeman: input.namaTeman,
          items: [],
          createdAt: new Date().toISOString().split("T")[0],
          status: "tidak ada"
        }]
      ));
    } else if (action == "edit") {
      setListTeman(prev => prev.map(data => data.id == id ? { ...data, namaTeman: input.namaTeman } : data));
    } else {
      setListTeman(prev => prev.filter(data => data.id !== id))
    }
    setInput(prev => ({ ...prev, id: null, namaTeman: "" }));
  }

  const handleClickItem = (action, id) => {
    if (action == "add") {
      if (input.namaItem == "" || input.hargaItem == 0 || input.jumlahItem == 0) return;
      setListItem(prev => {
        const exist = prev.find(data => data.namaItem == input.namaItem.toLocaleLowerCase().trim());
        if (exist) {
          return prev.map(item => item.namaItem == input.namaItem.toLocaleLowerCase() ? { ...item, jumlahItem: parseInt(item.jumlahItem) + parseInt(input.jumlahItem) } : item)
        } else {
          return [...prev, {
            id: Date.now(),
            namaItem: input.namaItem,
            hargaItem: input.hargaItem,
            jumlahItem: input.jumlahItem,
            createdAt: new Date().toISOString().split("T")[0]
          }]
        }
      })
    }
    else if (action == "edit") {
      setListItem(prev => prev.map(data => data.id == id ? { ...data, namaItem: input.namaItem, hargaItem: input.hargaItem, jumlahItem: input.jumlahItem } : data))
    }
    else {
      setListItem(prev => prev.filter(item => item.id !== id));
    }
    setInput(prev => ({ ...prev, idItem: null, namaItem: "", hargaItem: "", jumlahItem: "" }))
  }

  // HANDLE CHECKBOX
  const handleCheckbox = (idTeman, idItem, checked) => {
    if (!checked) {
      if (listTeman.find(data => data.id == idTeman)) {
        setListTeman(prev => prev.map(data => data.id == idTeman ? { ...data, items: [...data.items, { idItem, jumlahItem: 1 }] } : data))
      }
    } else {
      setListTeman(prev => prev.map(data => data.id == idTeman ? { ...data, items: data.items.filter(dataItem => dataItem.idItem !== idItem) } : data))
    }
  }

  // =====> HANDLE CHANGE
  const handleChange = (key, value) => {
    setInput(prev => ({ ...prev, [key]: value }));
  }

  // GET TOTAL BELANJA
  const getTotal = (data) => {
    return data.reduce((acc, curr) => {
      return Number(acc) + (Number(curr.hargaItem) * Number(curr.jumlahItem)) + Number(input.pajak ?? 0);
    }, 0)
  }

  // TOTAL
  const total = getTotal(listItem);

  // RETURN
  return { handleClickTeman, handleChange, handleClickItem, input, setInput, listTeman, listItem, total, handleCheckbox };
}

// =====> EXPORTS
export default useHomePage;