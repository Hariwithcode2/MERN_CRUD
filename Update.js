import React, { useEffect } from 'react'
import {Form,Input,Button} from 'semantic-ui-react'
import { useState } from 'react'
import { url } from './Api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Update = () => {
  const navigate=useNavigate()
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")

  useEffect(()=>{
    setId(localStorage.getItem('id',id))
    setName(localStorage.getItem('name',name))
    setEmail(localStorage.getItem('email',email))
    setImage(localStorage.getItem('image',image))
  },[])

  const updata=async()=>{
    await axios.put(`https://64b4d0dbf3dbab5a95c622b9.mockapi.io/data/${id}`,{
      name,email,image
    })
    navigate('/read')
  }
  return (
    <div>
       <Form>
        <Form.Field width='8'>
          <Input type='text' value={name} onChange={event=>setName(event.target.value)}/>
        </Form.Field>
        <Form.Field width='8'>
          <Input type='text' value={email} onChange={event=>setEmail(event.target.value)}/>
        </Form.Field>
        <Form.Field>
          <Input type='text' value={image} onChange={event=>setImage(event.target.value)}/>
        </Form.Field>
        <Button color='green' onClick={updata}>Submit</Button>
      </Form>
    </div>
  )
}

export default Update