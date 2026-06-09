import { PageHeader } from '../components/PageHeader';
import { SurfaceCard } from '../components/SurfaceCard';

export function SettingsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Sistema"
        title="Configuración"
        description="Ajustes globales de la plataforma, de momento representados con contenido temporal."
        action={<button className="primary-button">Aplicar configuración</button>}
      />

      <section className="cards-grid two-columns">
        <SurfaceCard title="Notificaciones" subtitle="Canales de alerta">
          <ul className="simple-list">
            <li>Email para eventos críticos.</li>
            <li>Slack para fallos de integración.</li>
            <li>Dashboard interno para auditoría.</li>
          </ul>
        </SurfaceCard>

        <SurfaceCard title="Seguridad" subtitle="Controles mock">
          <ul className="simple-list">
            <li>2FA obligatoria para admins.</li>
            <li>Sesiones con expiración configurable.</li>
            <li>Registro de cambios por usuario.</li>
          </ul>
        </SurfaceCard>
      </section>
    </div>
  );
}
