"use client"
import React, { useState } from "react";
import "./Demo.css";
import { SearchBar } from "./searchbar";
import { DemoApiManager } from "./DemoApiManager";
import { IncomingCallMockup } from "./IncomingCallMockup";
import { RingCentralMockup } from "./RingCentralMockup";

type ViewState = 'initial' | 'incomingCall' | 'inCall';

/**
 * Composant principal de la version démo.
 * Simule un onglet Teams qui s'ouvre lors d'un appel entrant.
 */
export default function DemoApp() {
  const [view, setView] = useState<ViewState>('initial');
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeCallPhoneNumber, setActiveCallPhoneNumber] = useState(""); // New state for active call

  // Le numéro qui sera utilisé pour la simulation d'appel
  const MOCK_INCOMING_NUMBER = "0612345678";

  const handleSimulateCall = () => {
    setSearchTerm(MOCK_INCOMING_NUMBER); // Fill Teams tab with incoming number
    setView('incomingCall');
  };

  const handleAcceptCall = () => {
    // searchTerm is already set by handleSimulateCall
    setActiveCallPhoneNumber(MOCK_INCOMING_NUMBER); // Set active call number
    setView('inCall');
  };

  const handleDeclineCall = () => {
    setSearchTerm(""); // Clear search term on decline
    setView('initial');
  };
  
  const handleEndCall = () => { // Function to end the active call
    setActiveCallPhoneNumber("");
    setSearchTerm("");
    setView('initial');
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setActiveCallPhoneNumber(""); 
    setView('initial');
  }

  const renderTeamsTabContent = () => (
    <>
      <SearchBar 
        searchTerm={searchTerm}
        onSearch={(val) => setSearchTerm(val)} 
        isLoading={loading}
        onClear={handleClearSearch}
      />
      <DemoApiManager
        searchTerm={searchTerm}
        onLoading={setLoading}
      />
    </>
  );

  return (
    <div className="DemoApp">
      <header className="App-header">
        <h1>Démonstration - Fiche Contact</h1>
      </header>

      <main className="content-body">
        {view === 'initial' && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button className="submit-btn" onClick={handleSimulateCall}>
              Simuler un Appel Entrant
            </button>
          </div>
        )}

        {(view === 'incomingCall' || view === 'inCall') && renderTeamsTabContent()}

        {view === 'incomingCall' && (
          <IncomingCallMockup
            phoneNumber={MOCK_INCOMING_NUMBER}
            onAccept={handleAcceptCall}
            onDecline={handleDeclineCall}
          />
        )}

        {activeCallPhoneNumber && (
          <RingCentralMockup
            phoneNumber={activeCallPhoneNumber}
            onClose={handleEndCall}
          />
        )}
      </main>

      <footer>
        {/* Pied de page si nécessaire */}
      </footer>
    </div>
  );
}