import React, { useRef, useEffect } from 'react';
import { Portal } from 'react-portal';

import './dialog.css';

const Dialog = ({ title, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <Portal>
      <div className="dialog">
        <div className="dialog-overlay" onClick={onClose} />
        <div className="dialog-content" ref={dialogRef}>
          <div className="dialog-header">
            <h2>{title}</h2>
            <button onClick={onClose}>×</button>
          </div>
          <div className="dialog-body">{children}</div>
        </div>
      </div>
    </Portal>
  );
}

export default Dialog;
