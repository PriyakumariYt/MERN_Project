import React from 'react'
import { useState } from "react";
import { useAuth } from '../ContextApi/TokenApi';

const defaultData = {
  username: "",
  email: "",
  message: "",
};
const Contact = () => {
    const [contact, setContact] = useState(defaultData);

    const { user } = useAuth();

    // console.log("frontend user ", user.email);
  
    const [userData, setUserData] = useState(true);

    if (userData && user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
      // lets tackle our handleInput
      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setContact({
          ...contact,
          [name]: value,
        });
      };
    
      // handle fomr getFormSubmissionInfo
      const handleSubmit =async(e) => {
        e.preventDefault();
    
        console.log(contact);

        try {
          const response = await fetch("http://localhost:5000/api/form/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });
    
          console.log("response: ", response);
          // alert(response);
    
          if (response.ok) {
            setContact(defaultData);
            const responseData = await response.json();
            // alert(responseData);
            alert("contact messgae sent succesfully")
            console.log(responseData);
          } else {
            // Handle API error here
            console.error("API Error:", response.status, response.statusText);
          }
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <>
       <section>
        <main className="main-container">
          <div className="section-registration">
            <div className="container-second">
              <div className="registration-image reg-img">
                <img
                  src="https://mycolor.space/img/color-scheme-right.svg"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading ">Contact Us!</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      value={contact.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                
                  <div>
                    <label htmlFor="email">email</label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      value={contact.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                 
                  <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                   Submit 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
        <div className="container">
      <div className="col">
        <div className="icons">
          <i className="fa-solid fa-location-dot"></i>

          <h1>Our main office</h1>
          <p>brivally, mumbai south</p>
        </div>
      </div>
      <div className="col">
        <div className="icons">
          <i className="fa-solid fa-phone"></i>

          <h1>Phone number</h1>
          <p>+91-9668654864</p>
        </div>
      </div>
      <div className="col">
        <div className="icons">
          <i className="fa-solid fa-envelope"></i>

          <h1>Email</h1>
          <p>coder12@gmail.com</p>
        </div>
      </div>
      <div className="col">
        <div className="icons">
          <i className="fa-solid fa-fax"></i>

          <h1>Fax</h1>
          <p>www.coderWebsite.com</p>
        </div>
      </div>
    </div>
      </section>
    </>
  )
}

export default Contact


// yaha se

// import React from 'react'
// import { useState } from "react";
// import { useAuth } from '../ContextApi/TokenApi';

// const Contact = () => {

// const [contact, setContact] = useState({
//   username: "",
//     email: "",
//     message: "",
// });

// const {user}  = useAuth();
// // console.log("User Object:", user);
// console.log("frontend se ", user.email);
// const [userData, setUserData] = useState(true);
// if (userData && user) {
//   setContact({
//     username: user.username,
//     email: user.email,
//     message: "",
//   });
//   setUserData(false);
// }
//   // lets tackle our handleInput
//   const handleInput = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setContact({
//       ...contact,
//       [name]: value,
//     });
//   };

//   // handle fomr getFormSubmissionInfo
//   const handleSubmit = async(e) => {
//     e.preventDefault();

//     console.log(contact);
//     // CONTACT DATA SEND IN DATABASE 
//     try {
//       const response = await fetch("http://localhost:5000/api/form/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(contact),
//       });
//       console.log("response data : ", response);

//       if (response.ok) {
//         const responseData = await response.json();
//         setContact
//         alert("contact form submit succesfully");
//        navigate("/")
//         console.log(responseData);
//       } else {
//         console.log("error inside response ", "error");
//       }
//     } catch (error) {
//       console.error("Error", error);
//     }



//   };





//   return (
//     <>
//      <section>
     
//      <div className="LoginContainer">
//        <div className="SmallContainer"> 
//        <div className="registration-image reg-img">
//              <img
//                src="https://mycolor.space/img/color-scheme-right.svg"
//                alt="a nurse with a cute look"
//                width="400"
//                height="500"
//              />
//            </div>
//        </div>

//        <div className="SmallContainer">
//        <div className="registration-form">
//              <h1 className="main-heading ">Contact US!</h1>
//              <br />
//              <form onSubmit={handleSubmit}>
//                <div>
//                  <label htmlFor="username">username</label>
//                  <input
//                    type="text"
//                    name="username"
//                    value={contact.username}
//                    onChange={handleInput}
//                    placeholder="username"
//                  />
//                </div>
//                <div>
//                  <label htmlFor="email">email</label>
//                  <input
//                    type="text"
//                    name="email"
//                    value={contact.email}
//                    onChange={handleInput}
//                    placeholder="email"
//                  />
//                </div>
//                <div>
//                 <label htmlFor="message">message</label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   autoComplete="off"
//                   value={contact.message}
//                   onChange={handleInput}
//                   required
//                   cols="30"
//                   rows="6"
//                 ></textarea>
//               </div>

              
             
//                <br />
//                <button type="submit" className="btn btn-submit">
//                 Submit Now
//                </button>
//              </form>
//            </div>
//        </div>
      
//        </div>
//    </section>
//     </>
   
    
//   )
// }