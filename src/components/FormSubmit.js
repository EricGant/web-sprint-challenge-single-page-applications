import React from 'react'

export default function orderSubmitted(props) {
    const {details} = props

    return(
        <div>
            <h2>Pizza for {details.name}</h2>
            <h3>Size: {details.size}</h3>
            Toppings:
            {details.cheese && details.cheese ? <h4>Cheese</h4>: null}
            {details.pepperoni && details.pepperoni ? <h4>Pepperoni</h4>: null}
            {details.sausage && details.sausage ? <h4>Sausage</h4>: null}
            {details.bacon && details.bacon ? <h4>Bacon</h4>: null}
            {details.ham && details.ham ? <h4>Ham</h4>: null}
            Special Instructions: {details.specialInstructions}
        </div>
    )

}