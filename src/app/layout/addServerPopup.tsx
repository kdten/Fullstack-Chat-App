import { useState } from 'react';
// import 22 fontawesome icons from 
import { FaCamera, FaCat, FaHashtag, FaLeaf, FaCode, FaWrench, FaCheck, FaList, FaSnowflake, FaTv, FaQuestion, FaMusic, FaBell, FaTag, FaBook, FaTruck, FaMap, FaImage, FaAtom, FaGamepad, FaCampground, FaFilm } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';

const icons: object[] = [FaCamera, FaCat, FaHashtag, FaLeaf, FaCode, FaWrench, FaCheck, FaList, FaSnowflake, FaTv, FaQuestion, FaMusic, FaBell, FaTag, FaBook, FaTruck, FaMap, FaImage, FaAtom, FaGamepad, FaCampground, FaFilm];

const AddServerPopup = ({ onClose }) => {
    const [serverName, setServerName] = useState('');
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      // Add server logic here
      onClose();
    };

    const handleIconSelect = (icon) => {
        setSelectedIcon(icon);
      };
  
    return (
        <div className="add-server-popup-overlay">
        <div className="add-server-popup">
        <div className="popup-header">
          <h2 className="popup-title">Create a server</h2>
          <p className="popup-subtitle">
            Your server is where you and your friends hang out.
          </p>
          <button className="popup-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="popup-content">
        <div className="icon-grid scrollbar-hide">
        {icons.map((Icon, index) => (
                  <div
                    key={index}
                    onClick={() => handleIconSelect(Icon)}
                    className={`icon-wrapper ${selectedIcon === Icon ? 'icon-selected' : ''}`}
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>
        {/* Add the content div in the next step */}
      </div>
    </div>
    );
  };
  
  export default AddServerPopup;