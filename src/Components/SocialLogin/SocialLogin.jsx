import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
const SocialLogin = () => {


    const navigate = useNavigate();
    const location = useLocation()
    const form = location?.state || '/';


    const { googleLogin, githubLogin,facebookLogin } = useContext(AuthContext);

    // const handleLogin = (socialLogin) => {
    //     socialLogin()
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(form)
                }
            })
    }
    return (
        <div className=" -mt-4  mb-6">

            <div className="flex text-center items-center justify-center mb-1 gap-5">

                <div onClick={() => handleSocialLogin(googleLogin)}>
                    <img className="w-[34px]" src="https://i.ibb.co/2319kKS/google.png" alt="" />

                </div>
               <div  onClick={() => handleSocialLogin(githubLogin)}>
               <FaGithub className="text-3xl" />
               </div>
               <div  onClick={() => handleSocialLogin(facebookLogin)}>
               <FaFacebook className="text-3xl" />
               </div>

            </div>
        </div>
    );
};

export default SocialLogin;