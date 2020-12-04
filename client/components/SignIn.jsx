import React, { useState } from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'
import { GridForm, ColOne, ColTwo, Button } from './Styled'

function SignIn (props) {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleClick = () => {
    const { email, password } = form
    signIn({ email, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }

  return (
    <>
      <h2>Sign in</h2>
      <GridForm>
        <ColOne htmlFor='username'>Email:</ColOne>
        <ColTwo type='text'
          id='email'
          name='email'
          value={form.email}
          onChange={handleChange} />

        <ColOne htmlFor='password'>Password:</ColOne>
        <ColTwo type='password'
          id='password'
          name='password'
          value={form.password}
          onChange={handleChange} />

        <Button type='button' onClick={handleClick}>Sign in</Button>
      </GridForm>
    </>
  )
}
export default SignIn
