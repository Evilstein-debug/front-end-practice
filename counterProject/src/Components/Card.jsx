import card from 'daisyui/components/card'
import React from 'react'

function Card( { title , cardTxt="Shoes" } ){
  
    return(
        <>
        <div className="card bg-gray-700 w-96 shadow-sm">
    <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{cardTxt}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </>
    )
}

export default Card
