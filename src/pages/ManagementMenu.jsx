import "./pagesStyles/ManagementMenu.css";
import ProductsManagement from "../assets/products-management.svg";
import OfertsManagement from "../assets/oferts-management.svg";
import SecurityManagement from "../assets/security-management.svg";
import ContactsManagement from "../assets/contacts-management.svg";
import BackArrow from '../assets/products-management-back-icon.svg';
import useWindowSize from "../hooks/useWindowSize";
import IconPage from "../assets/productsIcon.svg"
import { useNavigate } from "react-router-dom";

function ManagementMenu (){
    const responsive = useWindowSize("max",400)
    const navigate = useNavigate()

    return(
        <section className="management-container"> 
            <div className = "managment-menu-title-container">
                <button
                    className="products-management-go-back-button btn-general-styles"
                    onClick={() => history.back()}
                    >
                    <img src={BackArrow} />
                </button>
                <h2>Menú de Gestión</h2>
            </div>
            <main className={responsive?"management-menu-container management-menu-container-reponsive":"management-menu-container"}>
                        <div title="products-secction" className="management-menu-section" onClick={()=>navigate("/management/products")}> 
                                <h4>Productos</h4>
                                <div className="icon-management-section">
                                    <img src={ProductsManagement} alt="products" width="55px"/>
                                </div>
                        </div>
                        <div title="oferts-section" className="management-menu-section" onClick={()=>navigate("/management/oferts")}>
                            <h4>Ofertas</h4>
                            <div className="icon-management-section">
                                <img src={OfertsManagement} alt="oferts" width="55px"/> 
                            </div>
                        </div>
                        <div title="security-section" className="management-menu-section" onClick={()=>navigate("/management/security")}>
                            <h4>Seguridad</h4>
                            <div className="icon-management-section">
                                <img src={SecurityManagement} alt="security" width="55px"/>
                            </div>
                        </div>
                        <div title="contac-section" className="management-menu-section">
                            <h4>Contacto</h4>
                            <div className="icon-management-section" onClick={()=>navigate("/management/contact")}>
                                <img src={ContactsManagement} alt="contacts" width="48px"/>
                            </div>
                        </div>        
            </main>

        </section>
    )
}

export default ManagementMenu;
