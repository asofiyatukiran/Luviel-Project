import React from "react";
import iphoneMockup from "../assets/iphone-mockup.png"; // Make sure path is correct
import qrCode from "../assets/qr-code.png";
import'./DiagnosticsSection.css';

function DiagnosticsSection() {
  return (
    <div className="diagnostics-container">
      {/* Left Side: Text Content */}
      <div className="diagnostics-content">
        <h1>Our most accurate diagnostics yet.</h1>
        <p>
          Get a quick no-touch diagnostic straight from your phone. Skin analysis
          based on 55+ years of dermatology research and 3+ million face scans.
        </p>
        <ul>
          <li><strong>1. Scan</strong> - Take a quick snap, scan for issues in seconds.</li>
          <li><strong>2. Get Skin Report</strong> - Get skin diagnostic results and product recommendations.</li>
          <li><strong>3. Find solutions for every concern</strong> - Get skin diagnostic results and product recommendations.</li>
        </ul>
        {/* QR Code Section */}
        <div className="qr-section">
          <img src={qrCode} alt="QR Code" />
          <p><strong>Scan the QR code</strong> with your mobile device to get started</p>
        </div>
      </div>

      {/* Right Side: iPhone Mockup */}
      <div className="diagnostics-image">
        <img src={iphoneMockup} alt="iPhone displaying skin scan" />
      </div>
    </div>
  );
}

export default DiagnosticsSection;
