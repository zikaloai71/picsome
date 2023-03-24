import React, { useContext } from 'react'
import {getClass} from "../utils"
import Image from "../components/Image"
import { AppContext } from '../AppContext'


export default function Photos() {

const{allPhotos} = useContext(AppContext)

const photoElements = allPhotos.map((photo,i)=>(
  <Image key={photo.id} img={photo} className={getClass(i)}></Image>
  ))

  return (
    <main  className="photos">
       {photoElements}
    </main>
  )
}
