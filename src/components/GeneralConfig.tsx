import React, { useState } from 'react';
import type { BotState, AIModel } from '../types/bot';
import '../styles/GeneralConfig.css';

interface GeneralConfigProps {
  bot: BotState;
  onConfigChange: (config: Partial<BotState>) => void;
}

export const GeneralConfig: React.FC<GeneralConfigProps> = ({
  bot,
  onConfigChange,
}) => {
  const [tempConfig, setTempConfig] = useState(bot);
  const [isSaved, setIsSaved] = useState(false);

  const models: AIModel[] = ['GPT-4o', 'GPT-4.1', 'Claude', 'Gemini'];

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempConfig({ ...tempConfig, name: e.target.value });
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTempConfig({ ...tempConfig, model: e.target.value as AIModel });
  };

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempConfig({ ...tempConfig, temperature: parseFloat(e.target.value) });
  };

  const handleMaxMessagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempConfig({ ...tempConfig, maxMessagesPerHour: parseInt(e.target.value, 10) });
  };

  const handleSave = () => {
    onConfigChange(tempConfig);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="config-card">
      <h3 className="config-title">Configuración General</h3>

      <div className="config-group">
        <label className="config-label" htmlFor="bot-name">
          Nombre del Bot
        </label>
        <input
          id="bot-name"
          type="text"
          className="config-input"
          value={tempConfig.name}
          onChange={handleNameChange}
          placeholder="Ingresa el nombre del bot"
        />
      </div>

      <div className="config-group">
        <label className="config-label" htmlFor="ai-model">
          Modelo IA
        </label>
        <select
          id="ai-model"
          className="config-select"
          value={tempConfig.model}
          onChange={handleModelChange}
        >
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      <div className="config-group">
        <label className="config-label" htmlFor="temperature">
          Temperatura: {tempConfig.temperature.toFixed(2)}
        </label>
        <input
          id="temperature"
          type="range"
          className="config-slider"
          min="0"
          max="1"
          step="0.01"
          value={tempConfig.temperature}
          onChange={handleTemperatureChange}
        />
        <div className="slider-info">
          <span>Más preciso</span>
          <span>Más creativo</span>
        </div>
      </div>

      <div className="config-group">
        <label className="config-label" htmlFor="max-messages">
          Máximo de mensajes por hora
        </label>
        <input
          id="max-messages"
          type="number"
          className="config-input"
          value={tempConfig.maxMessagesPerHour}
          onChange={handleMaxMessagesChange}
          min="1"
          max="1000"
        />
      </div>

      <button
        className={`save-button ${isSaved ? 'saved' : ''}`}
        onClick={handleSave}
      >
        {isSaved ? '✓ Guardado' : 'Guardar Configuración'}
      </button>
    </div>
  );
};
