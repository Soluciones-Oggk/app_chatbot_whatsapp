import React from 'react';
import { useBotControl } from '../hooks/useBotControl';
import { BotStatusCard } from './BotStatusCard';
import { BotActions } from './BotActions';
import { GeneralConfig } from './GeneralConfig';
import { SystemPrompt } from './SystemPrompt';
import { QuickStats } from './QuickStats';
import { RecentActivity } from './RecentActivity';
import '../styles/BotControl.css';

export const BotControl: React.FC = () => {
  const {
    bot,
    stats,
    activities,
    updateBotConfig,
    updateBotStatus,
  } = useBotControl();

  const handleStart = () => updateBotStatus('active');
  const handlePause = () => updateBotStatus('paused');
  const handleStop = () => updateBotStatus('inactive');
  const handleRestart = () => {
    updateBotStatus('inactive');
    setTimeout(() => updateBotStatus('active'), 500);
  };

  return (
    <div className="bot-control-container">
      <header className="bot-control-header">
        <div className="header-content">
          <h1 className="header-title">🤖 Bot Control Center</h1>
          <p className="header-subtitle">
            Gestión profesional de bots de IA para automatización de mensajes
          </p>
        </div>
      </header>

      <main className="bot-control-main">
        {/* Top Section - Status and Actions */}
        <section className="control-section top-section">
          <div className="section-grid">
            <BotStatusCard bot={bot} />
            <BotActions
              bot={bot}
              onStart={handleStart}
              onPause={handlePause}
              onStop={handleStop}
              onRestart={handleRestart}
            />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="control-section stats-section">
          <QuickStats stats={stats} />
        </section>

        {/* Configuration Section */}
        <section className="control-section config-section">
          <div className="section-grid">
            <GeneralConfig bot={bot} onConfigChange={updateBotConfig} />
            <SystemPrompt bot={bot} onConfigChange={updateBotConfig} />
          </div>
        </section>

        {/* Activity Section */}
        <section className="control-section activity-section">
          <RecentActivity activities={activities} />
        </section>
      </main>

      <footer className="bot-control-footer">
        <p>
          © 2024 Dashboard Bot. Última sincronización:{' '}
          {new Date().toLocaleTimeString('es-ES')}
        </p>
      </footer>
    </div>
  );
};

export default BotControl;
