import React from 'react'

const Food2 = () => {
    let d=JSON.parse(localStorage.getItem("items"))
    console.log(d)
  return (
   
    <div className='flex flex-col '>
        <div className=' text-center pb-7'>Food App</div>
        <div >Results : {d.length} </div>
        
        <br>
        </br>
        <br>
        </br>
        <div className='w-[100%] flex gap-4 flex-wrap  '>
            {d.map((e)=><div className=' w-[30%] h-[30%] bg-slate-400 ' >
            <div>Food Name :{e.foodname}</div>
            <div>Food Type :{e.foodtype}</div>
            <div>Time :{e.quantity}</div>
        </div>)}
        </div>

    </div>
  )
}

export default Food2;