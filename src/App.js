import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ContactUsButton from "./ContactUsButton";
import ContactFormPopup from "./ContactFormPopup";
import WhatWeDo from "./WhatWeDo";
import OurProject from "./OurProject";

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <Router>
      <div className=" ">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <ContactUsButton onClick={handleButtonClick} />
              <ContactFormPopup
                isVisible={isPopupVisible}
                onClose={handleClosePopup}
              />
            </div>
            }
          />
          
          <Route path="/what-we-do" element={<WhatWeDo />} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
