import React from 'react'
import {Form,Input,Button} from 'semantic-ui-react'
import { useState } from 'react'
import { url } from './Api'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {} from 'semantic-ui-react'

const Create = () => {
  const navigate=useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
 
  const postData=async()=>{
    await axios.post(url,{
      name,email,image
    })
    navigate('/read')
  }

  return (
    <div>
      <Form>
        <Form.Field width='8'>
          <Input type='text' placeholder ='Enter your name' value={name} onChange={event=>setName(event.target.value)}/>
        </Form.Field>
        <Form.Field width='8'>
          <Input type='text' placeholder ='Enter your Email' value={email} onChange={event=>setEmail(event.target.value)}/>
        </Form.Field>
        <Form.Field>
          <Input type='text' placeholder ='paste image link'value={image} onChange={event=>setImage(event.target.value)}/>
        </Form.Field>
        <Button onClick={postData} color='green'>Submit</Button>
      </Form>
    </div>
  )
}

export default Create