import axios from "axios";
import React, {useState, useEffect} from "react";
import {Switch, Link, Route} from 'react-router-dom';
import * as yup from 'yup'
import schema from './validation.js'
import Form from './components/Form'

const initialValues = {
name:'',
size:'',
pepperoni: false,
sausage: false,
bacon: false,
ham: false,
cheese: false,
specialInstructions: ''
}

const initialErrors = {
name:'',
size:'',
specialInstructions:'',
}

const initialOrders = []
const isDisabled = true


export default function App() {
  const [orders, setOrders] = useState(initialOrders)
  const [disabled, setDisabled] = useState(isDisabled)
  const [errors, setErrors] = useState(initialErrors)
  const [values, setValues] = useState(initialValues)

  const orderSubmitted = (newPizza) => {
    return setOrders(values)
  }

  // const getOrders = () => {
  //   axios.get('https://reqres.in/api/orders')
  //   .then(res => {
  //   setOrders(res.data.data);
  //   console.log(res.data.data)
  //   })
  //   .catch(err => {
  //   console.log(err)
  //   })
  // }

  const newOrder = (newOrders) => {
    axios.post('https://reqres.in/api/orders', newOrders)
    .then(res => {
    setOrders([res.data, ...orders])
    setValues(initialValues)
    })
    .catch(err => {
      console.log(err)
    })

  }



  useEffect(() => {
  schema.isValid(values)
  .then(valid=> {
    setDisabled(!valid)
  })
  },[values])

  const onSubmit = () => {
    const newOrders = {
      name: values.name.trim(),
      size: values.size.trim(),
      specialInstructions: values.specialInstructions.trim(),
      cheese: values.cheese,
      pepperoni: values.pepperoni,
      sausage: values.sausage,
      bacon: values.bacon,
      ham: values.ham
    }
    orderSubmitted(newOrders)
    setValues(initialValues)
    newOrder(newOrders)
  }

  const inputChange = ( name, value ) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [ name ] : "",
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name] : err.errors[0],
        })
      })
    
      setValues({ ...values, [name]:value })
  }

  return (
  <div className='Container'>
  <div>
    <h1>Lambda Pizza</h1>
    <Link to={'/pizza'}>
      <button id="order-pizza">Order Pizza</button>
    </Link>
  </div>
<Switch>
  <Route exact path ='/pizza'>
  <Form id='order-pizza'
  values={values}
  change={inputChange}
  submit={onSubmit}
  disabled={disabled}
  errors={errors}
  details={orders}
  />


  </Route>

  <Route path='/'>
    <div>homepage</div>
  </Route>
</Switch>
  </div>
  );
};
