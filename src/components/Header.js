import {useLocation, useNavigate} from 'react-router-dom'; 

export default function Header(){
    
    const location = useLocation(); 
    const navigate = useNavigate(); 
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true; 
        }
    }
    return (
       <div className="bg-white border-b shadow-sm sticky top-0 z-50"> 
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto"> 
                <div> 
                    <img onClick={()=> navigate("/")} className="h-5 cursor-pointer" src="https://www.property24.com/Content/images/Optimized/Logos/property24_logo.svg?z=1E69C593EA30DC31F44A22DEC50BDDE8C610C243" alt="logo" /> 
                </div>
                <div> 
                    <ul className="flex space-x-10"> 
                        <li 
                        onClick={()=> navigate("/")}  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMatchRoute("/") && "text-black border-b-red-500"}`}>
                            Home
                        </li>
                        <li onClick={()=> navigate("/services")}  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMatchRoute("/services") && "text-black border-b-red-500"}`}>
                            Services
                        </li>
                        <li onClick={()=> navigate("/offers")}  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}>
                            Offers
                        </li>
                        <li onClick={()=> navigate("/about-us")}  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMatchRoute("/about-us") && "text-black border-b-red-500"}`}>
                            About Us
                        </li>
                        <li onClick={()=> navigate("/sign-in")}  className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent 
                        ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}>
                            Sign in
                        </li>
                    </ul>
                </div>
            </header>
       </div>
    )
}