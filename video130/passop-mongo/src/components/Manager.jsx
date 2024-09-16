import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { v4 as uuids4 } from "uuid";

import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const getPasswords = async () =>{
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    // console.log(passwords);
    setPasswordArray(passwords);
  }

  useEffect(() => {
    getPasswords()
    
  }, []);

  const copyText = (text) => {
    toast("Copy to clipboard", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    navigator.clipboard.writeText(text);
  };

  // const showPassword = () => {
  //   passwordRef.current.type = "password";
  //   // alert("Show the Password");
  //   console.log(ref.current.src);
  //   if (ref.current.src.includes("/public/logo/eyeclose.svg")) {
  //     ref.current.src = "/public/logo/eyeopen.svg";
  //     passwordRef.current.type = "password"
      
  //   } else {
  //     passwordRef.current.type = "text"
  //     ref.current.src = "/public/logo/eyeclose.svg";
      
  //   }
  // };



  const showPassword = () => {
    if (passwordRef.current.type === "password") {
      // Change password field to text to show password
      passwordRef.current.type = "text";
      // Change the eye-close icon to eye-open
      ref.current.src = "/public/logo/eyeopen.svg";
    } else {
      // Change password field back to password to hide password
      passwordRef.current.type = "password";
      // Change the eye-open icon to eye-close
      ref.current.src = "/public/logo/eyeclose.svg";
    }
  };
  




  const savaPassword = async () => {
    if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

      await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({id: form.id })})

      setPasswordArray([...passwordArray, { ...form, id: uuids4() }]);
      await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ ...form, id: uuids4() })})

      // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuids4() }]));
      // console.log([...passwordArray, form]);
      setform({ site: "", username: "", password: "" });
      toast("Password saved successfully!.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else{
      toast.error('Error: Password is not saved!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    }
  };

  const deletePassword = async (id) => {
    console.log("Deleting password with id", id);
    let c = confirm("Do you realy want to delete this password?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      await fetch("http://localhost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify({ id })})
      // localStorage.setItem(
      //   "passwords",
      //   JSON.stringify(passwordArray.filter((item) => item.id != id))
      // );
      // console.log([...passwordArray, form]);
      toast("Password Deleted!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    
  };

  const editPassword = (id) => {
    // console.log("Editing password with id", id);
    // setform(passwordArray.filter(i => i.id === id)[0])
    setform({...passwordArray.filter(i => i.id === id)[0], id: id});
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
    // localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    // console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="p-3 md:mycontainer min-h-[80.5vh]">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-green-500"> &lt;</span>

          <span>Pass</span>
          <span className="text-green-500">OP/ &gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your own Password Manager
        </p>
        <div className="text-black flex flex-col p-4 gap-5 items-center">
          <input
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full p-4 py-[3px]"
            type="text"
            name="site"
            id="site"
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full p-4 py-[3px]"
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                ref={passwordRef}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full p-4 py-[3px]"
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-[3px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={30}
                  src="/public/logo/eyeopen.svg"
                  alt=""
                />
              </span>
            </div>
          </div>

          <button
            onClick={savaPassword}
            className="flex justify-center items-center bg-green-400 hover:bg-green-300 rounded-full px-6 py-2 w-fit gap-2 border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="click"
            ></lord-icon>
            Save Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Password</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-3">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Passwords</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" text-center py-2 border border-white">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="copy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="click"
                              colors="primary:#000000"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" text-center py-2 border border-white">
                        <div className="flex items-center justify-center">
                          <span>{item.username}</span>
                          <div
                            className="copy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="click"
                              colors="primary:#000000"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" text-center py-2 border border-white">
                        <div className="flex items-center justify-center">
                          <span>{"*".repeat(item.password.length)}</span>
                          <div
                            className="copy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="click"
                              colors="primary:#000000"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" text-center py-2 border border-white">
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            editPassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/wuvorxbv.json"
                            trigger="click"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span
                          className="cursor-pointer mx-1"
                          onClick={() => {
                            deletePassword(item.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/drxwpfop.json"
                            trigger="click"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
