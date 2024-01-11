import { createContext, useContext,useEffect,useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [services, setService] = useState([])
 
 
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedin ", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
// User data backend
const userAuthentication = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();

      setUser(data.msg);
    } else {
      console.error("Error fetching user data");
    }
  } catch (error) {
    console.log(error);
  }
};
const getServiceData = async() =>{
  try {
    const response = await fetch ("http://localhost:5000/api/data/service",
    {
      method: "GET",
    })
    if(response.ok){
      const services = await response.json()
      setService(services.data)
      // console.log(services.data)

    }
    console.log("service", response)
  } catch (error) {
    console.log(error)
  }

}
function showMenu() {
  let menu = document.querySelector("#menu-bar");
  let navlink = document.querySelector("#navlinks");
  menu.classList.toggle("fa-times");
  navlink.classList.toggle("active");
}

useEffect(() => {
  userAuthentication();
  getServiceData()
}, [token]);






  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser,user,services,showMenu }}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
  