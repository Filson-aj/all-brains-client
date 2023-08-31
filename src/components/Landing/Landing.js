import SlideShow from '../UIs/SlideShow/SlideShow'
import Hero from '../UIs/Hero/Hero'
import Testionial from '../UIs/Testimonials/Testionial'
import Banner from './Banner'

const Landing = () => {
  return (
    <article className='flex flex-col w-full bg-gray-200 text-gray-800'>
      <SlideShow />
      <Hero />
      <Banner />
      <Testionial />
    </article>
  )
}

export default Landing