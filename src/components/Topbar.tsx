import { Icon } from './Icon';

type TopbarProps = {
  title: string;
  description: string;
  onMenuClick: () => void;
};

export function Topbar({ title, description, onMenuClick }: TopbarProps) {
  return (
    <header className="dashboard-topbar">
      <button className="topbar-menu-button" type="button" onClick={onMenuClick}>
        <Icon name="menu" />
      </button>

      <div className="topbar-title-group">
        <p className="topbar-kicker">Panel SaaS</p>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="topbar-search">
        <Icon name="search" className="inline-icon" />
        <span>Buscar conversaciones, cuentas o usuarios</span>
      </div>

      <div className="topbar-actions">
        <button className="ghost-button" type="button">
          <Icon name="spark" className="inline-icon" />
          IA Assist
        </button>
        <button className="ghost-button is-badge" type="button">
          <Icon name="calendar" className="inline-icon" />
          Hoy
        </button>
        <div className="topbar-avatar" aria-label="Usuario actual">
          AM
        </div>
      </div>
    </header>
  );
}
