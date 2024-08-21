import { IoMdContacts } from "react-icons/io";
import { BsBuildings } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { SiProcessingfoundation } from "react-icons/si";




const Achievement = () => {
    return (
        <div className="mt-10 mb-28 " >
            <div className="text-center mb-10 " data-aos="fade-right" >
                <h1 className="text-3xl font-bold mb-5">Achievement</h1>
                <p className="w-2/3 text-center mx-auto mb-20">Time-Walker Extraordinaire: Navigated the corridors of time with precision and wisdom, shaping destinies and unraveling the mysteries of the ages, earning the esteemed title of temporal sage.</p>
            </div>
            <div className=" items-center justify-around grid lg:grid-cols-4 
            md:grid-cols-2 md:gap-5 sm:mb-5 grid-cols-1  " data-aos="fade-right">
                <div className="flex flex-col justify-center items-center">
                    <SiProcessingfoundation className="text-6xl text-[#5BC0EB] mb-7"></SiProcessingfoundation>
                    <h2 className="lg:text-4xl text-2xl font-bold">20400+</h2>
                    <p>Completed Property</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <GiFamilyHouse className="text-6xl text-[#5BC0EB] mb-7"></GiFamilyHouse>
                    <h2 className="lg:text-4xl text-2xl font-bold">7700+</h2>
                    <p>Property Sales</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BsBuildings className="text-6xl text-[#5BC0EB] mb-7"></BsBuildings >
                    <h2 className="lg:text-4xl text-2xl font-bold">12300+</h2>
                    <p>Appartment Rent</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <IoMdContacts className="text-6xl text-[#5BC0EB] mb-6"></IoMdContacts>
                    <h2 className="lg:text-4xl text-2xl font-bold">14500+</h2>
                    <p>Happy Clients</p>
                </div>

            </div>
        </div>
    );
};

export default Achievement;





