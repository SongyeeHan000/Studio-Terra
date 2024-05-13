import Image from 'next/image'
// import ceramicItems from '../../public/ceramicItems.jpg'
import minimalistic from '../../public/minimalistic.jpg'
import Link from 'next/link'
import NavBar from './components/navbar/page'

export default async function Home() {

  return (
    <div>
      <Image 
        src={minimalistic}
        alt='homepage'
        className='backgroundPic'
        fill='true'
        priority='true'
      />
      <NavBar />
      <div className='title'>
        {/* <h1>Studio Terra</h1> */}
        <h5>Rooted in Tradition, Inspired by Innovation</h5>
        <h6>Our practice draws inspiration from time-tested techniques, 
            yet we embrace experimentation to create unique and contemporary pieces.  
            We source high-quality, natural clays and glazes, ensuring each piece is 
            not only beautiful but also durable and functional.
        </h6>
      </div>
    </div>
  )
}
