import Image from 'next/image'
import butterDish from '../../public/butterSpread.jpeg' 
import minimalistic from '../../public/minimalistic.jpg'
import Link from 'next/link'
import NavBar from './components/navbar/page'

export default async function Home() {

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
        <div className='buttonContainer'>
           <button id="shopNowButton">Shop Now</button>
        </div>
      </div>
    </div>
  )
}
