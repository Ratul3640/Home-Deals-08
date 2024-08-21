import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HouseCard = ({book}) => {
    console.log(book);
    const { id, bookName, author, image, rating, category, tags,  } = book;
    

    return (
        <Link to={`/container/${id}`}>
        <div className="card border card-compact bg-base-100 shadow-xl p-5 h-[500px] mb-10 ">
          <figure className="bg-zinc-300 rounded-lg ">
            <img className="mt-10 w-28  mb-4  p-2" src={image} alt="Shoes" />
           
          </figure>
          <div className="card-body">
            <div className="flex gap-5">
              <h2 className="bg-gray-200 text-[#23BE0A] rounded-lg p-2">{tags}</h2>
              <h2 className="bg-gray-200 text-[#23BE0A] rounded-lg p-2">{category}</h2>
  
            </div>
            <h2 className="card-title text-2xl mt-5">{bookName}</h2>
            <div className="flex gap-2 text-center ">
              <h2 className="text-base">BY:</h2>
              <h2 className="card-title text-base font-bold -mt-0.1">{author}</h2>
            </div>
           
            <p className="mb-2 ">{author}</p>
            <hr />
            <div className="flex gap-52 mt-2">
              <h2>{category}</h2>
              <div className="flex gap-2">
                <h2>{rating}</h2>
                <div className="w-4 ">
                  <img src="/img/Vector.png" alt="" />
                </div>
  
              </div>
            </div>
            <div>
  
            </div>
  
          </div>
        </div>
      </Link>
    );
};
HouseCard.propTypes ={
    book: PropTypes
}

export default HouseCard;