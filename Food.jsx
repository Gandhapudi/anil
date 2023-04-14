import React from 'react'

const Food = () => {
    let f=[]
    const details=()=>{
        const a=document.getElementById("foodname").value;
        const b=document.getElementById("foodtype").value;
        const c=document.getElementById("quantity").value;
        const d={foodname:a,foodtype:b,quantity:c}
        
        f.push(d)
        localStorage.setItem("items",JSON.stringify(f))
    }
  return (
    <div className='food h-[100vh] w-[100%] bg-slate-400 flex justify-center items-center'>
        <div className="foodie flex flex-col h-[50vh] w-[30%] bg-red-400 gap-4 pt-8 shadow-2xl bg-slate-200 rounded-xl ">

            <div className='  text-3xl text-center pb-6'>Food</div>
            <div className='flex justify-center  '>
                <div className='pr-3 w-[30%]'>Food Name:</div>
                <input id="foodname" placeholder='Eg:Biryani ' type="text"></input>
            </div>
            
            <div className='flex justify-center  '>
            <div className=' w-[30%]'>Food Type:</div>
            <select className='w-[40%]' name="food" id="foodtype">
           <option value="Delicious food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="beverages">Beverages</option>
          <option value="Desserts">Deserts</option>
</select>
                
            </div>
            <div className='flex justify-center  '>
                <div className='pr-3 w-[30%]'>Maximum Delivery Time</div>
                <input id="quantity" className='mt-2 h-[50%]' type="number"></input>
            </div>
            <div className='flex justify-center'>
            <button onClick={details}  className=' w-[50%] p-[1.3%] rounded-xl  bg-green-500'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Food