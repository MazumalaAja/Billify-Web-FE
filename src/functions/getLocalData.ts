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

  // EXPORTS
  export default getLocalData;