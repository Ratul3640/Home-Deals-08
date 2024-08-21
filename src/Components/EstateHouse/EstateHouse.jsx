import { useLoaderData, useParams } from 'react-router-dom';

const EstateHouse = () => {

    const newDiv = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id);

    const property = newDiv.find(property => property.id === idInt)
    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = property


    return (
        <div className="grid md:grid-cols-2 grid-cols-1 mt-20 gap-24">
            <div>
                <figure>
                    <img className="rounded-lg  bg-base-100 shadow-xl" src={image} alt="Shoes" />
                </figure>
            </div>

            <div className="card border card-compact bg-base-100 shadow-xl p-5  mb-20">
                <div>
                    <div className="card-body">

                        <h2 className="card-title md:                                            text-3xl font-bold">{estate_title}</h2>
                        <h2 className="card-title text-sm">BY:{segment_name}</h2>
                        <p className="w-2/9">{description}</p>
                        <div className="flex gap-10 mt-2  ">
                        </div>
                        <hr />
                        <div className="flex gap-20">
                            <div className="text-base">
                                <h2>Room Price:</h2>
                                <h2>Area:</h2>
                                <h2>Room:</h2>
                                <h2>Location:</h2>

                            </div>
                            <div className="text-base">
                                <h2>{price}</h2>
                                <h2>{area}</h2>
                                <h2>{status}</h2>
                                <h2>{location}</h2>
                            </div>
                        </div>
                        <div className="flex md:gap-52 mt-10">
                            <h2>{facilities}</h2>
                            <div className="flex gap-2">
                                <h2>{segment_name}</h2>
                                <div className="w-4 ">
                                    <img src="/img/Vector.png" alt="" />
                                </div>

                            </div>
                        </div>
                        <div>

                            <div className="flex gap-5 mt-5">
                                <button className="btn bg-[#5BC0EB] text-white">Booking Room</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default EstateHouse;