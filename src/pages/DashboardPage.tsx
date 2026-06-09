import { MetricCard } from '../components/MetricCard';
import { PageHeader } from '../components/PageHeader';
import { SurfaceCard } from '../components/SurfaceCard';

export function DashboardPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Resumen ejecutivo"
        title="Dashboard"
        description="Visión general de la automatización, actividad y salud de los bots para WhatsApp."
        action={<button className="primary-button">Crear flujo</button>}
      />

      <section className="metric-grid">
        <MetricCard
          label="Mensajes enviados"
          value="24.8k"
          detail="En los últimos 30 días"
          trend="+18.2% vs. mes anterior"
          tone="accent"
        />
        <MetricCard
          label="Bots activos"
          value="8"
          detail="Automatizaciones en producción"
          trend="2 en pausa programada"
          tone="blue"
        />
        <MetricCard
          label="Tasa de respuesta"
          value="91.4%"
          detail="Conversaciones con interacción humana"
          trend="+4.1 puntos esta semana"
          tone="success"
        />
        <MetricCard
          label="Escalamientos"
          value="37"
          detail="Casos derivados al equipo"
          trend="-12% desde ayer"
          tone="neutral"
        />
      </section>

      <section className="content-grid">
        <SurfaceCard
          title="Actividad reciente"
          subtitle="Movimientos más importantes dentro de la plataforma"
          className="span-two"
        >
          <ul className="timeline-list">
            <li>
              <span>10:42</span>
              <div>
                <strong>Bot onboarding activado</strong>
                <p>Se publicó un nuevo flujo para leads entrantes.</p>
              </div>
            </li>
            <li>
              <span>09:18</span>
              <div>
                <strong>Cuenta validada</strong>
                <p>La sesión de WhatsApp de soporte quedó operativa.</p>
              </div>
            </li>
            <li>
              <span>08:05</span>
              <div>
                <strong>Regla de escalamiento ajustada</strong>
                <p>Los leads con urgencia alta pasan a ventas en 3 minutos.</p>
              </div>
            </li>
          </ul>
        </SurfaceCard>

        <SurfaceCard title="Salud operativa" subtitle="Estado del entorno en tiempo real">
          <div className="status-stack">
            <div>
              <span>Cola de mensajes</span>
              <strong>Normal</strong>
            </div>
            <div>
              <span>Sesiones activas</span>
              <strong>12/12</strong>
            </div>
            <div>
              <span>Latencia media</span>
              <strong>240 ms</strong>
            </div>
          </div>
        </SurfaceCard>
      </section>
    </div>
  );
}
