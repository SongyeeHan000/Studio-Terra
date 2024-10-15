import Image from 'next/image'
import butterDish from '../../public/butterSpread.jpeg' 
import minimalistic from '../../public/minimalistic.jpg'
import Link from 'next/link'
import NavBar from './components/navbar/page'

export default async function Home() {

  return (
    <div>
      <Image 
        src={butterDish}
        alt='homepage'
        className='backgroundPicture'
        priority='true'
        layout='responsive'
        objectFit= 'cover'
      />
      <div className='title'>
        
      </div>
    </div>
  )
}
