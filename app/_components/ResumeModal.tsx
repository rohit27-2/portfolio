'use client'
import React from 'react';
import { X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-11/12 h-5/6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <object
          data="/Rohith-Resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>Your browser does not support PDFs. 
             <a href="/dummy-resume.pdf">Download the PDF</a> instead.
          </p>
        </object>
      </div>
    </div>
  );
};

export default ResumeModal;
