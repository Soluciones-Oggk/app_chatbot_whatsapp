import React, { useState } from 'react';
import type { BotState } from '../types/bot';
import '../styles/SystemPrompt.css';

interface SystemPromptProps {
  bot: BotState;
  onConfigChange: (config: Partial<BotState>) => void;
}

export const SystemPrompt: React.FC<SystemPromptProps> = ({
  bot,
  onConfigChange,
}) => {
  const [prompt, setPrompt] = useState(bot.systemPrompt);
  const [isSaved, setIsSaved] = useState(false);

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSave = () => {
    onConfigChange({ systemPrompt: prompt });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleReset = () => {
    setPrompt(bot.systemPrompt);
  };

  const promptLength = prompt.length;
  const maxLength = 2000;

  return (
    <div className="prompt-card">
      <h3 className="prompt-title">Prompt del Sistema</h3>

      <p className="prompt-description">
        Personaliza las instrucciones del sistema para definir el comportamiento del bot
      </p>

      <div className="prompt-input-wrapper">
        <textarea
          className="prompt-textarea"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Escribe las instrucciones del sistema aquí..."
          maxLength={maxLength}
        />

        <div className="prompt-footer">
          <span className="prompt-counter">
            {promptLength} / {maxLength} caracteres
          </span>
          <div className={`character-bar ${promptLength > maxLength * 0.8 ? 'warning' : ''}`}>
            <div
              className="character-fill"
              style={{ width: `${Math.min((promptLength / maxLength) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      <div className="prompt-actions">
        <button
          className={`prompt-btn save-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSave}
        >
          {isSaved ? '✓ Guardado' : 'Guardar Prompt'}
        </button>
        <button className="prompt-btn reset-btn" onClick={handleReset}>
          Restaurar
        </button>
      </div>
    </div>
  );
};
