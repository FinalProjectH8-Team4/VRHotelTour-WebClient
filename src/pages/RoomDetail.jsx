import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function RoomDetail() {
  const { roomType } = useParams()
  // const [vrURL, setURL] = useState("")
  // const [roomTitle, setRoomName] = useState("")

  // useEffect(()=>{
  //   if (roomType === 'superior') {
  //     setURL("https://hotelimage.s3-ap-southeast-1.amazonaws.com/index.html")
  //     setRoomName('Superior Room')
  //   }
  // },[roomType])
  

  return (
    <Container className='full-height text-center'>
      <h1 className='text-capitalize'>{`${roomType} Room`}</h1>
      <hr />
      <iframe src={`https://hotelimage.s3-ap-southeast-1.amazonaws.com/${roomType}/room.html`} width='100%' height='80%' frameborder="0"></iframe>
      
      <Link to={`/bookroom/${roomType}`} className="btn btn-primary">Book This Room</Link>
    </Container>
  )
}