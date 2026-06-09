import { PageHeader } from '../components/PageHeader';
import { SurfaceCard } from '../components/SurfaceCard';

export function BotControlPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Automatización"
        title="Control del Bot"
        description="Monitorea el comportamiento de IA, reglas de respuesta y el estado de los flujos activos."
        action={<button className="primary-button">Publicar cambios</button>}
      />

      <section className="content-grid">
        <SurfaceCard title="Modo operativo" subtitle="Estado temporal del motor">
          <div className="pill-row">
            <span className="status-pill success">Activo</span>
            <span className="status-pill">Ventana 24/7</span>
            <span className="status-pill">Fallback humano</span>
          </div>
        </SurfaceCard>

        <SurfaceCard title="Reglas actuales" subtitle="Condiciones mock para probar la pantalla">
          <ul className="simple-list">
            <li>Responde automáticamente cuando el lead viene de anuncios.</li>
            <li>Escala a un humano si la intención supera el umbral alto.</li>
            <li>Bloquea mensajes duplicados dentro de 90 segundos.</li>
          </ul>
        </SurfaceCard>
      </section>
    </div>
  );
}
