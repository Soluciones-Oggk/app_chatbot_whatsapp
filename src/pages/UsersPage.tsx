import { PageHeader } from '../components/PageHeader';
import { SurfaceCard } from '../components/SurfaceCard';

const users = [
  { name: 'Ana Morales', role: 'Admin', status: 'Activa' },
  { name: 'Carlos Vega', role: 'Operador', status: 'Activa' },
  { name: 'María Torres', role: 'Analista', status: 'Pendiente' },
];

export function UsersPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Colaboración"
        title="Usuarios"
        description="Gestiona equipos, permisos y acceso a las diferentes áreas del dashboard."
        action={<button className="primary-button">Invitar usuario</button>}
      />

      <SurfaceCard title="Listado temporal" subtitle="Tabla mock para validar la navegación">
        <div className="table-list">
          {users.map((user) => (
            <div className="table-row" key={user.name}>
              <strong>{user.name}</strong>
              <span>{user.role}</span>
              <span>{user.status}</span>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </div>
  );
}
