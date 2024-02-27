import React, { useEffect } from 'react'
import { useState } from 'react'
import { url } from './Api'
import axios from 'axios'
import {Card,Image,Button} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const Read = () => {
  const [user, setUser] = useState([])


  const nav = useNavigate();

  const getdata=async()=>{
    const dummy=await axios.get(url)
    setUser(dummy.data)
  }


 
  useEffect(()=>{
    getdata()
    console.log(user)
  },[])

  const deldata=async(id)=>{
    await axios.delete(`https://64b4d0dbf3dbab5a95c622b9.mockapi.io/data/${id}`)
  }

  const editpage=({id,name,email,image})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('image',image)
    nav('/update')
  }
  return (
    <div>
      <Card.Group>
        {user.map((data)=>(
          <Card key={data.id}>
              <Image src={data.image} size='medium'/>
              <Card.Header as='h4'>{data.name}</Card.Header>
              <Card.Content>{data.email}</Card.Content>
              <Button onClick={()=>deldata(data.id)}>delete</Button>
              <Button onClick={()=>editpage(data)}>Edit</Button>
          </Card>
        ))}
      </Card.Group>
    </div>
  )
}

export default Read