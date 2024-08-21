import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Property = ({ property }) => {
    console.log('This is property', property);
    const { id, image, estate_title, description, status } = property

    return (
        <div className='' data-aos="fade-right" >
            <div className="card w-full  bg-base-100 shadow-xl"  data-aos="fade-right" >
                <figure className="px-10 pt-10 ">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center" >
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>

                    <div className="card-actions flex">
                       
                        <div className='flex gap-5'>
                            <Link to={`/real/${id}`}> <button className="btn bg-[#5BC0EB] text-white mt-5 animate__lightSpeedInLeft">View Details </button></Link>
                            <button className="btn bg-[#5BC0EB] text-white mt-5 animate__lightSpeedInLeft">{status}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Property.propTypes = {
    property: PropTypes.object
}
export default Property;