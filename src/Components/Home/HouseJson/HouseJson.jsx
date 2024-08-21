import { useLoaderData} from "react-router-dom"

const HouseJson = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {

            }
        </div>
    );
};

export default HouseJson;