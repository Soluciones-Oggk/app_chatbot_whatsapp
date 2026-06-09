import { NavLink } from 'react-router-dom';
import { Icon } from './Icon';
import { navigationItems } from '../routes/navigation';

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside className={`dashboard-sidebar ${open ? 'is-open' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-mark">WB</div>
        <div>
          <p className="brand-kicker">Workspace</p>
          <h1>Whisper Bot</h1>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Navegación principal">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              isActive ? 'sidebar-link is-active' : 'sidebar-link'
            }
          >
            <span className="sidebar-link-icon">
              <Icon name={item.icon} />
            </span>
            <span className="sidebar-link-content">
              <span className="sidebar-link-title">{item.label}</span>
              <span className="sidebar-link-description">{item.description}</span>
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-card">
        <p className="sidebar-card-title">Estado general</p>
        <strong>12 cuentas activas</strong>
        <span>98.7% de entregabilidad este mes</span>
      </div>
    </aside>
  );
}
