import Banner from "../Bannar/Banner";
import Achievement from "../Survice/Achievement/Achievement";
import Service from "../Survice/Survice";
import AllProperty from "./AllProperty/AllProperty";
import Team from "./Team/Team";
import {useLoaderData} from "react-router-dom";


const Home = () => {
    const properties = useLoaderData() 
    console.log(properties);
   
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <AllProperty properties={properties}></AllProperty>
            <Team></Team>
            <Achievement></Achievement>
            

        </div>
    );
};

export default Home;