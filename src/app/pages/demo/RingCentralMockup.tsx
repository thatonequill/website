import React from 'react';
import { X, Phone, User, Mic, MoreVertical, PhoneMissed } from 'lucide-react';

interface RingCentralMockupProps {
  phoneNumber: string;
  onClose: () => void;
}

export const RingCentralMockup: React.FC<RingCentralMockupProps> = ({ phoneNumber, onClose }) => {
  return (
    <div className="ring-central-mockup">
      <div className="rc-header">
        <span>Appel en cours...</span>
        <button onClick={onClose} className="rc-close-btn">
          <X size={20} />
        </button>
      </div>
      <div className="rc-body">
        <div className="rc-contact-info">
          <User size={48} />
          <span className="rc-phone-number">{phoneNumber}</span>
          <span className="rc-call-status">Appel...</span>
        </div>
        <div className="rc-actions">
          <button className="rc-action-btn"><Mic size={24} /></button>
          <button className="rc-action-btn"><MoreVertical size={24} /></button>
          <button className="rc-action-btn hang-up" onClick={onClose}>
            <PhoneMissed size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
