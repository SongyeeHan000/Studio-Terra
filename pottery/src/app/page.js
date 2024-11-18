'use client'
import Image from 'next/image'
import butterDish from '../../public/butterSpread.jpeg' 
import { useRouter } from 'next/navigation'

export default async function Home() {
  const router = useRouter()
  
  async function onClick() {
    router.push('/products')
  }

  return (
    <div>
      <div className='imageContainer'>
        <Image 
          src={butterDish}
          alt='homepage'
          className='backgroundPicture'
          priority='true'
          layout='responsive'
          objectFit= 'cover'
        />


      </div>
      <div className='title'>
        <h2>Modern Rustic Ceramics</h2>
        <p>Timeless Design, Handmade with Love.</p>
        <div className='shopNowButtonContainer'>
           <button id="shopNowButton" onClick={onClick} >Shop Now</button>
        </div>
      </div>
    </div>
  )
}
