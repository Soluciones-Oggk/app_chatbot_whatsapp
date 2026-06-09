import React from 'react';
import type { BotState } from '../types/bot';
import '../styles/BotStatusCard.css';

interface BotStatusCardProps {
  bot: BotState;
}

export const BotStatusCard: React.FC<BotStatusCardProps> = ({ bot }) => {
  const getStatusColor = (status: BotState['status']): string => {
    switch (status) {
      case 'active':
        return '#10b981';
      case 'paused':
        return '#f59e0b';
      case 'inactive':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getStatusLabel = (status: BotState['status']): string => {
    switch (status) {
      case 'active':
        return 'Activo';
      case 'paused':
        return 'En pausa';
      case 'inactive':
        return 'Inactivo';
      default:
        return 'Desconocido';
    }
  };

  return (
    <div className="status-card">
      <div className="status-header">
        <h2 className="status-title">{bot.name}</h2>
        <div className="status-indicator">
          <div
            className="status-dot"
            style={{ backgroundColor: getStatusColor(bot.status) }}
          />
          <span className="status-label">{getStatusLabel(bot.status)}</span>
        </div>
      </div>

      <div className="status-info">
        <div className="info-item">
          <span className="info-label">Última actividad</span>
          <span className="info-value">{bot.lastActivity}</span>
        </div>
        <div className="info-item">
          <span className="info-label">Tiempo en línea</span>
          <span className="info-value">{bot.uptime}</span>
        </div>
      </div>

      <div className="status-divider" />

      <div className="status-meta">
        <span className="meta-text">
          Creado: {bot.createdAt.toLocaleDateString('es-ES')}
        </span>
        <span className="meta-text">
          Actualizado: {bot.updatedAt.toLocaleTimeString('es-ES')}
        </span>
      </div>
    </div>
  );
};
