import React from 'react'
import {Switch, Link, Route} from 'react-router-dom';
import OrderMade from './FormSubmit'

export default function Form(props) {
    const {values, submit, change, disabled, errors, details} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div>
        <Link to={'/'}>
        <button id="test">Home</button>
        </Link>
        <form id = 'pizza-form' onSubmit={onSubmit}>
            <label>Name
                <input
                id = 'name-input'
                value={values.name}
                onChange={onChange}
                name='name'
                type='text'
                />
            </label>
            <label>Special Instructions
                <input
                id = 'special-text'
                value={values.specialInstructions}
                onChange={onChange}
                name='specialInstructions'
                type='text'
                />
            </label>
            <label>Size
                <select name ="size" id='size-dropdown' value={values.size} onChange={onChange}>
                    <option value="">-Select Size-</option>
                    <option value="Small">small</option>
                    <option value="Medium">medium</option>
                    <option value="Large">large</option>
                </select>
            </label>
            <label>Cheese 
                <input 
                type='checkbox'
                name='cheese'
                id='cheese'
                onChange={onChange}
                checked={values.cheese}
                />
            </label>
            <label>Pepperoni 
                <input 
                type='checkbox'
                name='pepperoni'
                id='pepperoni'
                onChange={onChange}
                checked={values.pepperoni}
                />
            </label>
            <label>Sausage 
                <input 
                type='checkbox'
                name='sausage'
                id='sausage'
                onChange={onChange}
                checked={values.sausage}
                />
            </label>
            <label>Bacon 
                <input 
                type='checkbox'
                name='bacon'
                id='bacon'
                onChange={onChange}
                checked={values.bacon}
                />
            </label>
            <label>Ham 
                <input 
                type='checkbox'
                name='ham'
                id='ham'
                onChange={onChange}
                checked={values.ham}
                />
            </label>
            <div className = 'form-group submit'>
            <button disabled={disabled} id="order-button">Submit Order</button>
                <div className = 'errors'>
                    <div>{errors.name}</div>
                </div>
            </div>
            <div>
                <OrderMade details={details}/>
            </div>
        
        </form>
        </div>
    )
}