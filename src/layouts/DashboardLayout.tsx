import { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import { navigationItems } from '../routes/navigation';
import '../styles/dashboard.css';

const fallbackTitle = 'Dashboard';

export function DashboardLayout() {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  const activeItem = useMemo(
    () => navigationItems.find((item) => location.pathname.startsWith(item.path)),
    [location.pathname],
  );

  const title = activeItem?.label ?? fallbackTitle;
  const description = activeItem?.description ?? 'Vista general de la plataforma';

  return (
    <div className="dashboard-shell">
      <Sidebar open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <div className="dashboard-backdrop" onClick={() => setMobileNavOpen(false)} />

      <div className="dashboard-main">
        <Topbar
          title={title}
          description={description}
          onMenuClick={() => setMobileNavOpen((current) => !current)}
        />

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
