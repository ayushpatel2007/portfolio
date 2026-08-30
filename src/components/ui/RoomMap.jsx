import React from 'react';
import { X, Compass } from 'lucide-react';
import { roomsConfig } from '../../config/portfolioData';
import { useScene } from '../../context/SceneContext';
import { useAudio } from '../../context/AudioContext';

const RoomMap = ({ isOpen, onClose }) => {
  const { teleportTo, currentRoom } = useScene();
  const { playClickSound, playHoverSound } = useAudio();

  if (!isOpen) return null;

  const handleSelectRoom = (roomId) => {
    playClickSound();
    teleportTo(roomId);
    onClose();
  };

  return (
    <div className="room-map-backdrop" onClick={onClose}>
      <div className="room-map-modal" onClick={(e) => e.stopPropagation()}>
        <div className="map-header">
          <div className="map-title-group">
            <Compass className="map-icon" size={24} />
            <h2>3D WORLD ROOM NAVIGATION MAP</h2>
          </div>
          <button className="map-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="map-grid">
          {roomsConfig.map((room) => {
            const isActive = currentRoom === room.id;
            return (
              <div
                key={`map-item-${room.id}`}
                className={`map-card ${isActive ? 'active' : ''}`}
                style={{ '--accent-glow': room.accentGlow, '--accent-color': room.color }}
                onClick={() => handleSelectRoom(room.id)}
                onMouseEnter={() => playHoverSound()}
              >
                <div className="map-card-side">{room.side.toUpperCase()} WING</div>
                <h3 className="map-card-title">{room.title}</h3>
                <p className="map-card-sub">{room.subtitle}</p>
                <p className="map-card-desc">{room.description}</p>
                <button className="map-teleport-btn">
                  {isActive ? "CURRENT LOCATION" : "TELEPORT TO ROOM"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomMap;
