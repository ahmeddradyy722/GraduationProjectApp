import { Link } from "react-router-dom";
import HomeImg from "../assets/image/home.png";
import Pops from "./Pops";
const Cont = () => {
  return (
    <>
    <div className="content">
      <div className="text" data-aos="fade-down">
        <h2>
          <span> Welcome </span>to the Diabetes Predictor! <br /> Know your risk{" "}
        </h2>
        <p>
          Discover Diabetes' advanced diabetes prediction system, which
          integrates seamlessly with your existing systems or as a standalone
          solution.
        </p>
        <button><a href="https://diabetic-prediction-system.streamlit.app/">Get Started</a></button>
      </div>
      <div className="image" data-aos="fade-up">
        <img src={HomeImg} alt=""/>
      </div>
    </div>  
      <Pops/>
      <span className="scroll">Scroll Down</span>
      <a className="arrow" href="#How"><i class="fa-solid fa-play"></i></a>
    </>
  );
};

export default Cont;

