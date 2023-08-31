import Slider from 'react-slick'

import { urls, images } from '../../../assets/constants/data'
import Slide from '../Slide/Slide'

const SlideShow = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    }
    return(
        <div className='w-full mb-8'>
            <Slider {...settings}>
                <div>
                    <Slide
                        imageUrl={images.photo1}
                        title='--- Welcome To All Brains Universal Join Admission College ---'
                        description={`We are legally incorporated tertiary education institution. We offer Sub-Degree Programes in Affiliation with 
                        intitute of Administration, Ahmadu Bello University Zaria.`}
                        buttonText='Learn More'
                        link={urls.root} />
                </div>
                <div>
                    <Slide
                        imageUrl={images.photo2}
                        title='--- Vission Statement ---'
                        description={`Our vision is to become a beacon of educational distinction, renowned for pioneering teaching methodologies, cutting-edge research, and transformative community engagement. We strive to be a hub of creativity and innovation, where students are inspired to explore their passions and embrace their potential. With a global perspective and a deep commitment to social responsibility, we aim to produce graduates who are not only leaders in their fields but also compassionate global citizens, dedicated to driving positive change in an ever-evolving world.`}
                        buttonText='Explore'
                        link={urls.root} />
                </div>
                <div>
                    <Slide
                        imageUrl={images.photo3}
                        title='--- Mission Statement ---'
                        description={`Our mission at Abuja College is to provide a dynamic and inclusive learning environment that nurtures the intellectual curiosity and personal growth of our students. Through innovative education and unwavering commitment, we aspire to cultivate well-rounded individuals who embrace critical thinking, cultural diversity, and ethical leadership. Our goal is to inspire lifelong learners, equipping them with the skills and knowledge to excel in their chosen fields and contribute positively to society.`}
                        buttonText='Explore'
                        link={urls.signin} />
                </div>
                <div>
                    <Slide
                        imageUrl={images.photo4}
                        title='--- About us ---'
                        description={`We are legally incorporated tertiary education institution. We offer Sub-Degree Programes in Affiliation with 
                        intitute of Administration, Ahmadu Bello University Zaria.`}
                        buttonText='Read More'
                        link={urls.mission} />
                </div>
            </Slider>
        </div>
    )
}

export default SlideShow