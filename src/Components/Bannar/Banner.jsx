import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'animate.css';
import { Link } from 'react-router-dom';
import { BiArrowToRight } from 'react-icons/bi';


const Banner = () => {
    return (
        // <div className="carousel w-full">
        //     <div id="slide1" className="carousel-item relative w-full">
        //         <img src="../../../public/img/Home-one.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide4" className="btn btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img src="../../../public/img/Home-two.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src="../../../public/img/Home-three.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide2" className="btn btn-circle">❮</a>
        //             <a href="#slide4" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide4" className="carousel-item relative w-full">
        //         <img src="../../../public/img/Home-four.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide3" className="btn btn-circle bg-[#5BC0EB] border-none">❮</a>
        //             <a href="#slide1" className="btn btn-circle bg-[#5BC0EB] border-none">❯</a>
        //         </div>
        //     </div>
        // </div>
        <div className='mt-10 relative md:mb-28 mb-60'>
            <Swiper
                // install Swiper modules

                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide> <img src="https://i.ibb.co/HqCPqMF/Home-one.jpg" className="w-full rounded-lg " /></SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/kSp4tKT/Home-two.jpg" className="w-full rounded-lg" /></SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/6yxPjXs/Home-three.jpg" className="w-full rounded-lg" /></SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/WpyQNs7/Home-four.jpg" className="w-full rounded-lg" /></SwiperSlide>

            </Swiper>

            <div className="p-3 lg:p-6 top-[90%] left-1/2  space-y-6 w-3/4  md:w-2/3  sm:mx-12  bg-white absolute z-10 transform 
            -translate-x-1/2 -translate-y-1/2 drop-shadow-md flex flex-col items-center rounded-2xl border-y-4  border-[#5BC0EB] ">
                <h1 className="md:text-4xl text-xl font-bold animate__animated animate__backInDown ">Chose Your Home</h1>

                <p className="md:text-lg ">Welcome to our premier real estate platform! Whether you are looking good for a cozy apartment in the heart of the city, a spacious family home in the suburbs</p>
                <Link to='/contact' className="font-medium text-white text-3xl 
                 md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#5BC0EB] text-center flex gap-2 items-center justify-center">

                    <span >Contact Now</span>
                    <BiArrowToRight className='text-3xl font-bold ' /></Link>
            </div>
        </div>
    );
};

export default Banner;

