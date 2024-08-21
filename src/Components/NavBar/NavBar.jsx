import { Link, NavLink } from "react-router-dom";
import 'animate.css';
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";



const NavBar = () => {
    const { logout, user } = useContext(AuthContext)
    const links = <>

        <li><NavLink to="/" className={({ isActive }) => isActive ?
            'border-2 border-[#5BC0EB] rounded-lg font-bold' : 'font-bold'}>Home</NavLink></li>
        {/* <li><NavLink to="/real" className={({ isActive }) => isActive ?
            'border-2 border-[#5BC0EB]  rounded-lg font-bold' : 'font-bold'}>Real Estate</NavLink></li> */}
        <li><NavLink to="/update" className={({ isActive }) => isActive ?
            'border-2 border-[#5BC0EB]  rounded-lg font-bold' : 'font-bold'}>Update Profile</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ?
            'border-2 border-[#5BC0EB]  rounded-lg font-bold' : 'font-bold'}>Contact</NavLink></li>

    </>
    return (

        <div className="navbar bg-base-100  mt-10  justify-between  ">


            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52  ">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-5">
                    <Link to="/"> <img className="w-[35px]" src="https://i.ibb.co/34WPnbx/logo.jpg" alt="" /></Link>

                </div>
            </div>
            <div className=" hidden lg:flex md:-ml-48">
                <ul className="menu menu-horizontal px-1 gap-4 ">
                    {links}
                </ul>
            </div>

            <div className="dropdown dropdown-end ">

                {user ?
                    <div>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                            <div className="w-10 rounded-full ">
                            <img  className=""  src={user.photoURL || 'https://i.ibb.co/k8Y2Zds/blank-profile-picture-973460-1280.png' }  title={(user?.displayName || user.email) } alt="User avater" /> 

                            </div>


                        </div>
                        <ul tabIndex={0} className="mt-3 z-[10]  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <button>{user.name || 'Name not found'}</button>
                            </li>


                            <li>
                                <button onClick={logout} >Logout</button>
                            </li>

                        </ul>
                    </div> :

                    <NavLink to="/signIn">
                        <a className="btn bg-[#5BC0EB] text-white">LOGIN</a>
                    </NavLink>
                }

            </div>







        </div>

    );
};

export default NavBar;




<NavLink to="/signIn">
    <a className="btn bg-[#5BC0EB] text-white">LOGIN</a>
</NavLink>






























