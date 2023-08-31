import Features from './Features/Features'
import Events from './Events/Events'

const Hero = () => {
  return (
    <article className='flex flex-col md:flex-row'>
        <section className='md:flex-grow'>
          <Features />
        </section>
        <aside className='w-full md:w-[35%]'>
          <Events />
        </aside>
    </article>
  )
}

export default Hero