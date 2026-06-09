import React from 'react';
import type { BotState } from '../types/bot';
import '../styles/BotActions.css';

interface BotActionsProps {
  bot: BotState;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
  onRestart: () => void;
}

export const BotActions: React.FC<BotActionsProps> = ({
  bot,
  onStart,
  onPause,
  onStop,
  onRestart,
}) => {
  return (
    <div className="actions-card">
      <h3 className="actions-title">Acciones del Bot</h3>

      <div className="actions-grid">
        <button
          className={`action-btn action-start ${bot.status === 'active' ? 'disabled' : ''}`}
          onClick={onStart}
          disabled={bot.status === 'active'}
          title={bot.status === 'active' ? 'Bot ya está activo' : 'Iniciar bot'}
        >
          <span className="action-icon">▶</span>
          <span className="action-text">Iniciar Bot</span>
        </button>

        <button
          className={`action-btn action-pause ${bot.status !== 'active' ? 'disabled' : ''}`}
          onClick={onPause}
          disabled={bot.status !== 'active'}
          title={bot.status === 'active' ? 'Pausar bot' : 'Bot debe estar activo'}
        >
          <span className="action-icon">⏸</span>
          <span className="action-text">Pausar Bot</span>
        </button>

        <button
          className={`action-btn action-restart ${bot.status === 'inactive' ? 'disabled' : ''}`}
          onClick={onRestart}
          disabled={bot.status === 'inactive'}
          title="Reiniciar bot"
        >
          <span className="action-icon">🔄</span>
          <span className="action-text">Reiniciar Bot</span>
        </button>

        <button
          className={`action-btn action-stop ${bot.status === 'inactive' ? 'disabled' : ''}`}
          onClick={onStop}
          disabled={bot.status === 'inactive'}
          title={bot.status !== 'inactive' ? 'Detener bot' : 'Bot ya está detenido'}
        >
          <span className="action-icon">⏹</span>
          <span className="action-text">Detener Bot</span>
        </button>
      </div>
    </div>
  );
};
