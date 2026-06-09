export type NavigationItem = {
  label: string;
  path: string;
  icon: 'dashboard' | 'accounts' | 'bot' | 'company' | 'users' | 'settings';
  description: string;
};

export const navigationItems: NavigationItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: 'dashboard',
    description: 'Resumen operativo',
  },
  {
    label: 'Cuentas WhatsApp',
    path: '/whatsapp-accounts',
    icon: 'accounts',
    description: 'Sesiones y números conectados',
  },
  {
    label: 'Control del Bot',
    path: '/bot-control',
    icon: 'bot',
    description: 'Estado, reglas y automatizaciones',
  },
  {
    label: 'Empresa',
    path: '/company',
    icon: 'company',
    description: 'Branding y datos de negocio',
  },
  {
    label: 'Usuarios',
    path: '/users',
    icon: 'users',
    description: 'Accesos, roles y equipos',
  },
  {
    label: 'Configuración',
    path: '/settings',
    icon: 'settings',
    description: 'Parámetros globales del sistema',
  },
];
