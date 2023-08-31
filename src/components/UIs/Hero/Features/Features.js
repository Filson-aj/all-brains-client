import { urls, images } from '../../../../assets/constants/data'
import FeaturesCard from './FeaturesCard'

const Features = () =>(
    <section className='dark:text-gray-800 mx-2 my-4'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-0'>
            {/* Featured Course Card */}
            <FeaturesCard img={images.photo1}
              title={`Sales of Admission`}
              link={urls.schools}
              text={`This is currently ongoing on a first-come, first-serve basis! Limited spaces available in each program.
              `} />
            <FeaturesCard img={images.photo2}
              title={`We Offer`}
              link={urls.programmes}
              text={`
              ABU Zaria Diploma in Accounting Civil Law Management/Business
              Administration Public Administration Sharia & Civil Law
              `} />
          </div>
        </div>
      </section>
)

export default Features