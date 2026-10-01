import React from 'react';
import { Phone, PhoneOff, User } from 'lucide-react';

interface IncomingCallMockupProps {
  phoneNumber: string;
  onAccept: () => void;
  onDecline: () => void;
}

export const IncomingCallMockup: React.FC<IncomingCallMockupProps> = ({ phoneNumber, onAccept, onDecline }) => {
  return (
    <div className="ring-central-mockup">
      <div className="rc-header">
        <span>Appel entrant</span>
      </div>
      <div className="rc-body">
        <div className="rc-contact-info">
          <User size={48} />
          <span className="rc-phone-number">{phoneNumber}</span>
          <span className="rc-call-status">Sonnerie...</span>
        </div>
        <div className="rc-actions">
          <button className="rc-action-btn accept" onClick={onAccept}>
            <Phone size={24} />
          </button>
          <button className="rc-action-btn hang-up" onClick={onDecline}>
            <PhoneOff size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
