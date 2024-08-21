import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../FirebaseProvider/FirebaseProvider";





const UpdateProfile = () => {
  const { updateUser, user } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [photoURL, setPhotoURL] = useState('')

  const handleNameChange = (e) => {

    setName(e.target.value)
  }


  const handlePhotoURLChange = (e) => {

    setPhotoURL(e.target.value)
  }
  useEffect(() => {

    if (user) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(name, photoURL)
      .then(result => {

        console.log(result)
        setPhotoURL()
        // setReload(true)
        location.reload()
        // Navi("/");
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    //   <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row-reverse">

    //     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //       <form className="card-body" onSubmit={}>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Name</span>
    //           </label>
    //           <input type="text" placeholder="Type Your Name"  className="input input-bordered" required />
    //         </div>
    //         <div className="form-control">
    //           <label className="label">
    //             <span className="label-text">Photo URL</span>
    //           </label>
    //           <input type="password" placeholder="Photo URL" className="input input-bordered" required />

    //         </div>
    //         <div className="form-control mt-6">
    //           <button className="btn bg-[#5BC0EB] text-white">Update Profile</button>
    //         </div>
    //       </form>

    //     </div>
    //   </div>
    // </div>

    // <div className=" text-center  dark:divide-gray-300 flex justify-center items-center mt-10 mb-20 bg-sky-200 rounded-lg ">
    //   <div className="my-2 mb-20" data-aos="fade-right" >
    //     <form onSubmit={handleSubmit} className='space-y-3'>

    //       <h2 className="text-3xl font-bold text-center mb-4 text-black">My Profile</h2>
    //       {user.photoURL && (
    //         <img src={user.photoURL} alt="Profile" className="w-24 h-24 mx-auto rounded-full aspect-square ring-2 ring-offset-4 ring-green-500 mb-4" />
    //       )}
    //       <h2 className='text-center text-2xl my-5 border-b-2 py-3 border-white'>{user?.email}</h2>
    //       <img src={user} alt="" />
    //       <div className='flex flex-col justify-center'>
    //         <label className='text-left text-lg mb-1 font-semibold '>Name:</label>
    //         <input type="text" className="input input-bordered border-2 w-full" placeholder="Name" value={name} onChange={handleNameChange} />
    //       </div>
    //       <div className='flex flex-col justify-center'>
    //         <label className='text-left text-lg mb-1 font-semibold '>Photo URL:</label>
    //         <input type="text" className="input input-bordered w-full border-2" placeholder="Photo url" value={photoURL} onChange={handlePhotoURLChange} />
    //       </div>
    //       <button type="submit" className="btn bg-[#5BC0EB] border-none text-white mt-5 mb-10">Save Changes</button>
    //     </form>
    //   </div>
    // </div>
    <div data-aos="fade-down" className='flex  mt-6 flex-col bg-gradient-to-br from-orange-100 to-blue-300 
    justify-center bg-opacity-5 shadow-md items-center mb-12 rounded-lg'>
      <div data-aos="fade-down" className="flex flex-col justify-center  p-10 mt-3 w-3/6   sm:px-12  mb-6 ">
        <h2 className="md:text-3xl text-xl font-bold text-center mb-4 text-black">My Profile</h2>
        {photoURL && (
          <img src={photoURL} alt="Profile" className="w-24 h-24 mx-auto rounded-full aspect-square ring-2 ring-offset-4 bg-[#5BC0EB] mb-4" />
        )}
        <div className=" w-full text-center ">
          <div className="">
            <form onSubmit={handleSubmit} className=''>
              <h2 className='text-center text-xs ml-30 md:text-2xl mb-4 '>{user?.email}</h2>
              <div className='flex md:flex-col gap-4 justify-center'>
                <label className='text-left md:text-lg mb-1 font-semibold text-white'>Name:</label>
                <input type="text" className="input input-bordered border-2 mb-4 " placeholder="Name" value={name} onChange={handleNameChange} />
              </div>
              <div className='flex md:flex-col gap-4 justify-center mb-2'>
                <label className='text-left md:text-lg  font-semibold text-white'>Photo URL:</label>
                <input type="text" className="input input-bordered  border-2 mb-4" placeholder="Photo url" value={photoURL} onChange={handlePhotoURLChange} />
              </div>
              <button type="submit" className=" btn font-medium text-white w-full text-xs md:text-xl py-2 rounded-lg bg-[#5BC0EB] border-none">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>


  );
};

export default UpdateProfile;