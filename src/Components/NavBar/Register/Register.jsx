
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";


const Register = () => {

  const { createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data
    // create auth user
    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      })
    console.log(data)
  }


  const [showPassword, setShowPassword] = useState('');


  return (
    <div className=" bg-sky-200 mt-10 rounded-lg " data-aos="fade-down">
      <h2 className="text-4xl text-center mb-9  pt-10"> Register Your account</h2>
      <div className="hero  bg-sky-200  mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 mb-20 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body md:w-[400px] " onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" id="name" placeholder="Type Your Name" name='text' className="input input-bordered" {...register("name", { required: true })} />
                {errors.name && <span className="text-red-500">This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" id="email" placeholder="Type Your Name" name='email' className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="image" placeholder="Type Your Name" name='image' className="input input-bordered" required />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative ">

                  <input type={showPassword ? "text" : "password"} id="password" placeholder="password" name="password" className="input input-bordered w-full" {...register("password", { required: true })} />
                  <span className="absolute top-5 right-3" onClick={() => setShowPassword(!showPassword)}>

                    {
                      showPassword ? <FaEyeSlash ></FaEyeSlash> : <FaEye></FaEye>
                    }

                  </span>
                  {errors.password && <span className="text-red-500">This field is required</span>}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>

              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#5BC0EB] text-white">REGISTER</button>
              </div>


              <div className="divider p-5">or</div>


            </form>

            <SocialLogin></SocialLogin>





            <p className="text-sm text-center  mb-10">Already have an account :<Link to="/signIn"> <a className="text-blue-600 font-bold">Login</a></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;