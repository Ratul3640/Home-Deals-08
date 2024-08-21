
import Property from "../Property/Property";
import PropTypes from 'prop-types';

const AllProperty = ({properties}) => {
    console.log(properties);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mb-28">
           {
            properties.map(property => <Property key={property.id} property={property}></Property>)
           }
        </div>
    );
};
AllProperty.propTypes ={
    properties:PropTypes.object
}
export default AllProperty;