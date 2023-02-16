import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Authcontext } from '../../Context/UserContext';

const UpdateProfile = ({ setEdit, users }) => {
    const { myPro, myProUpdate } = useContext(Authcontext)
    const { email, displayName, photoURL } = myPro;
    const [field, setField] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);
    const usersUpdatedData = (event) => {
        event.preventDefault();
        const field = event.target;
        const facebook = field.facebook.value;
        const linkedin = field.linkedin.value;
        const updateProfileInfo = { displayName, email, socialMedia: [facebook, linkedin], photoURL: previewImage };
        console.log(updateProfileInfo, displayName, email, facebook, linkedin, previewImage);
        fetch(`http://localhost:5000/update-users/${myPro._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfileInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    myProUpdate();
                    setEdit(true);
                    toast.success(
                        `Updated Your Profile`
                    );
                }
                console.log(data);
            })
    }


    useEffect(() => {
        if (field?.target?.files) {
            const photo = field?.target?.files[0];
            const imageKey = "024d2a09e27feff54122f51afddbdfaf";
            const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
            const formData = new FormData();
            formData.append("image", photo);
            fetch(url, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then(data => {
                    const img = data?.data?.url;
                    setPreviewImage(img);
                })

        }
        else {
            setPreviewImage(photoURL);
        }

    }, [field?.target?.files, photoURL])
    return (
        <>
            <section className="pt-10 dark:bg-[#2C2048] bg-white sm:py-16 lg:py-24">
                <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8 shadow-md shadow-[#FF3F4A]  pb-24 px-5">
                    <div className="flex justify-between items-center px-3 pt-5">
                        <p className="text-2xl font-bold">Update Profile</p>
                        <p onClick={() => setEdit(true)} className="hover:cursor-pointer hover:cursor-pointer  mr-4 py-2 px-4
                hover:cursor-pointer  mr-4 bg-red-200 hover:bg-red-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-3 py-2 font-semibold text-red-900 leading-tight    ">
                            Cancel Edit
                        </p>
                    </div>
                    <hr className="mt-2 mb-6  px-3 border border-[#FF3F4A] "></hr>
                    <form onSubmit={usersUpdatedData}>
                        <div className="md:flex md:items-center md:space-x-14">
                            <div className="relative justify-center flex-shrink-0 mx-auto w-48 h-48">
                                <div className="absolute w-48 h-48 rounded-full shadow-[#FF3F4A] rounded-full -bottom-1 -right-2 shadow-xl scale-90"></div>

                                <img
                                    className="relative object-cover w-48 h-48 rounded-full"
                                    src={previewImage ? previewImage : photoURL}
                                    alt=""
                                />


                                <div className="md:mb-5 mb-5 flex justify-center mb-3">
                                    <label htmlFor="img-btn" className="hover:cursor-pointer mt-5 mb-5 py-2 px-4
                rounded-full border-0
                text-sm font-semibold
                bg-orange-50 text-orange-700
                hover:bg-orange-100">Edit Profile</label>
                                    <input type='file' id="img-btn" name='fileUpload'
                                        onChange={setField}
                                        className="d-none" />
                                </div>
                            </div>

                            <div className="mt-[75px] md:mt-10">
                                <label className="font-bold text-slate-900 pl-3.5 dark:text-gray-100 " htmlFor="Name">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="rounded-full my-2.5 w-full py-1.5 pl-3.5  pr-1 text-black placeholder-gray-500 transition-all duration-200 bg-white border focus:border focus:outline-none focus:border-orange-600 caret-orange-600"
                                />
                                <label className="font-bold text-slate-900 pl-3.5 dark:text-gray-100" htmlFor="Name">
                                    Email Address {`(Email is not editable)`}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="rounded-full my-2.5 w-full py-1.5 pl-3.5  pr-1 text-black placeholder-gray-500 transition-all duration-200 bg-white border focus:border focus:outline-none focus:border-orange-600 caret-orange-600"
                                    defaultValue={`${email}`}
                                    disabled
                                />
                                <label className="font-bold text-slate-900 pl-3.5 dark:text-gray-100" htmlFor="facebook">
                                    FaceBook
                                </label>
                                <input
                                    type="text"
                                    name="facebook"
                                    id="facebook"
                                    placeholder="Enter your FaceBook Url"
                                    className="block rounded-full my-2.5 w-full py-1.5 pl-3.5  pr-1 text-black placeholder-gray-500 transition-all duration-200 bg-white border focus:border focus:outline-none focus:border-orange-600 caret-orange-600"
                                />
                                <label className="font-bold text-slate-900 pl-3.5 dark:text-gray-100" htmlFor="linkedin">
                                    Linkedin
                                </label>
                                <input
                                    type="text"
                                    name="linkedin"
                                    id="linkedin"
                                    placeholder="Enter your linkedin Url"
                                    className="rounded-full my-2.5 w-full py-1.5 pl-3.5  pr-1 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 focus:outline-none focus:border-orange-600 caret-orange-600"
                                />
                            </div>
                        </div>
                        <div className="flex justify-start mt-[15px] md:justify-end items-center">
                            <button type="submit" className="max-[768px]:w-full hover:cursor-pointer py-[10px] px-[16px]
                rounded-lg border-0
                text-sm font-semibold
                bg-orange-50 text-orange-700
                hover:bg-orange-100">Save Changes</button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    );
};

export default UpdateProfile;