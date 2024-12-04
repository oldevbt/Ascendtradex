"use client";

import React, { useEffect } from "react";

const VoiceflowWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");

    // Set the script source
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";

    // Define the onLoad function
    script.onload = () => {
      // Initialize the Voiceflow widget
      window.voiceflow.chat.load({
        verify: { projectID: "674ff7d3f8ed29bcbd9e1f74" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Chat container for the Voiceflow widget */}
      <div
        id="voiceflow-chat"
        style={{
          width: "100%",
          height: "500px",
          position: "fixed",
          bottom: 0,
          right: 0,
        }}
      >
        {/* This container is where the widget will render */}
      </div>
    </div>
  );
};

export default VoiceflowWidget;
