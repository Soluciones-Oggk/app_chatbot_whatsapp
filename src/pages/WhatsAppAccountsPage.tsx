import { PageHeader } from '../components/PageHeader';
import { SurfaceCard } from '../components/SurfaceCard';

const accounts = [
  { name: 'Soporte Central', status: 'Conectada', number: '+52 55 1234 5678', owner: 'Operaciones' },
  { name: 'Ventas MX', status: 'Sincronizando', number: '+52 55 2222 8877', owner: 'Sales' },
  { name: 'Atención LATAM', status: 'Conectada', number: '+57 300 555 1221', owner: 'Customer Care' },
];

export function WhatsAppAccountsPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Conectividad"
        title="Cuentas WhatsApp"
        description="Administra sesiones, números y estado de conexión para cada línea operativa."
        action={<button className="primary-button">Conectar número</button>}
      />

      <section className="cards-grid three-columns">
        {accounts.map((account) => (
          <SurfaceCard key={account.number} title={account.name} subtitle={account.owner}>
            <div className="account-card">
              <div>
                <span>Número</span>
                <strong>{account.number}</strong>
              </div>
              <div>
                <span>Estado</span>
                <strong>{account.status}</strong>
              </div>
            </div>
          </SurfaceCard>
        ))}
      </section>

      <SurfaceCard title="Notas" subtitle="Bloques de prueba para validar la navegación">
        <p className="placeholder-text">
          Aquí puedes conectar QR, rotar sesiones y aplicar reglas por número una vez que el backend exista.
        </p>
      </SurfaceCard>
    </div>
  );
}
