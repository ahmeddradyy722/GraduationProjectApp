// Import necessary hooks and modules
import { Link ,useNavigate } from "react-router-dom"; // For navigation and linking between pages
import { register } from "../../Services/authService"; // Import the register function to call the backend API
import React, { useState } from 'react'; // Import React and useState hook
import { GoogleLogin } from '@react-oauth/google'; // Import Google Login component
import { ToastContainer, toast } from 'react-toastify'; // Import toast notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const Sign = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection

  // Define local state variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle user registration
  const handleRegister = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match'); // Show error toast if not matched
      return; // Stop execution
    }

    try {
      // Call register API function to send data to backend
      const response = await register(email, password, confirmPassword);
      console.log('Registration Response:', response); // Log backend response

      toast.success('Registration Successful'); // Show success message

      // After 2 seconds, redirect user to login page
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } 
    catch (error) {
      toast.error("Registration Failed!"); // Show error if backend returns failure
    }
  };

  // Handle successful Google login
  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log('Google Login Success:', credentialResponse); // Log Google credential response
    toast.success('Login Successful with Google!'); // Show success toast

    // After 2 seconds, redirect user to login page
    setTimeout(() => {
      navigate('/login');
    }, 2000);

    // Note: you can send the Google token (credentialResponse) to your backend if needed
  };

  // Handle Google login error
  const handleGoogleLoginError = () => {
    console.log('Google Login Failed'); // Log failure
    toast.error('Google Login Failed'); // Show error toast
  };
  
  return (
    <div style={{overflow:"auto"}}> 
      <div className="sign">
        <div className="card">
          <h2>Join Us</h2>
          <p>Sign up now and start your journey with us!</p>

          {/* Email input */}
          <i className="fa-solid fa-envelope"></i>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />

          {/* Password input */}
          <i className="fa-solid fa-unlock"></i>
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Password instructions */}
          <p className="rep">Use 8 or more characters with a mix of letters, numbers & symbols.</p>

          {/* Confirm password input */}
          <i className="fa-solid fa-repeat"></i>
          <input 
            className="repeate" 
            type="password" 
            placeholder="Repeat Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        
          <h4>Or with</h4>

          {/* Google login button */}
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess} // Call this when Google login succeeds
            onError={handleGoogleLoginError} // Call this when Google login fails
            useOneTap
          > 
        
          </GoogleLogin>

          {/* Submit button for regular registration */}
          <button onClick={handleRegister}>Sign up</button>

          {/* Link to login page if user already has an account */}
          <p className="last">
            Already have an account? <Link to="/login">Sign in</Link> 
          </p>
        </div>
      </div>

      {/* Container to display toast messages */}
      <ToastContainer />
    </div>
  );
}

export default Sign;
