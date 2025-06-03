import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import PrivacyPolicy from "./Screens/PrivacyPolicy";
import Homepage from "./Screens/HomePage";
import RefundPolicy from "./Screens/RefundPolicy";
import TermsAndConditions from "./Screens/TermsAndConditions";
import TermsDialog from "./Components/TermsDialog";
import ContactUs from "./Screens/ContactUsPage";
import LimitedAccess from "./Screens/LimitedAccess";


const AppWrapper = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [hasRejected, setHasRejected] = useState(false);  // tracks rejection during session
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const response = Cookies.get("termsAccepted");
    const rejectedInSession = sessionStorage.getItem("termsRejected") === "true";

    if (response === "true") {
      setTermsAccepted(true);
      setShowDialog(false);
    } else if (!rejectedInSession) {
      // Show dialog only if NOT rejected during this session
      setTermsAccepted(false);
      setShowDialog(true);
      setHasRejected(false);
    } else {
      // User rejected previously in this session
      setHasRejected(true);
      setShowDialog(false);
    }
  }, [location]);

  const handleAccept = () => {
    Cookies.set("termsAccepted", "true", { expires: 7 });
    sessionStorage.removeItem("termsRejected"); // clear rejection if accepted now
    setTermsAccepted(true);
    setShowDialog(false);
    navigate(location.pathname);
  };

  const handleReject = () => {
    sessionStorage.setItem("termsRejected", "true");  // persist rejection in sessionStorage
    setHasRejected(true);
    setShowDialog(false);
    navigate("/limited");
  };

  return (
    <>
      <div className={`relative ${showDialog ? "blur-sm overflow-hidden" : ""}`}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/limited" element={<LimitedAccess />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>

      {showDialog && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <TermsDialog onAccept={handleAccept} onReject={handleReject} />
        </div>
      )}
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
