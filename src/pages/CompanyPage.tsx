import { PageHeader } from '../components/PageHeader';
import { SurfaceCard } from '../components/SurfaceCard';

export function CompanyPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Identidad"
        title="Empresa"
        description="Configura marca, horarios y la información comercial que el bot debe usar en sus respuestas."
        action={<button className="primary-button">Guardar marca</button>}
      />

      <section className="cards-grid two-columns">
        <SurfaceCard title="Perfil corporativo" subtitle="Datos visibles en la experiencia">
          <div className="detail-grid">
            <div>
              <span>Nombre</span>
              <strong>Whisper Bot Inc.</strong>
            </div>
            <div>
              <span>Industria</span>
              <strong>SaaS Automation</strong>
            </div>
            <div>
              <span>Zona horaria</span>
              <strong>America/Mexico_City</strong>
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard title="Tono de respuesta" subtitle="Guía temporal para la IA">
          <ul className="simple-list">
            <li>Claro, profesional y directo.</li>
            <li>Usa lenguaje comercial sin sonar robótico.</li>
            <li>Prioriza resolver antes de derivar.</li>
          </ul>
        </SurfaceCard>
      </section>
    </div>
  );
}
