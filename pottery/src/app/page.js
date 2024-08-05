import Image from 'next/image'
// import ceramicItems from '../../public/ceramicItems.jpg'
import minimalistic from '../../public/coffeebackground.jpg'
import Link from 'next/link'
import NavBar from './components/navbar/page'

export default async function Home() {

  return (
    <div>
      <Image 
        src={minimalistic}
        alt='homepage'
        className='backgroundPicture'
        priority='true'
        layout='fill'
        objectFit= 'cover'
      />
      <div className='title'>
        <h5>Discover the World,</h5>
        <h5>One Bean at a Time.</h5>
      </div>
    </div>
  )
}
