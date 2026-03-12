// MY-CODE
const Rupiah = (data:number) => {
  let result = new Intl.NumberFormat("id-ID" ,{
    style:"currency",
    currency:"IDR",
    maximumFractionDigits:0,
  }).format(data)
  return result;
}

// EXPORT
export default Rupiah;