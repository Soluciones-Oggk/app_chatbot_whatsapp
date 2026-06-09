# 🛠️ Guía de Desarrollo - Bot Control Center

## 📚 Tabla de Contenidos

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Arquitectura](#arquitectura)
3. [Desarrollo](#desarrollo)
4. [Componentes](#componentes)
5. [Hooks](#hooks)
6. [Estilos](#estilos)
7. [Integración Backend](#integración-backend)
8. [Testing](#testing)

## 📁 Estructura del Proyecto

```
src/
├── components/              # Componentes React
│   ├── BotControl.tsx      # Componente raíz (layout)
│   ├── BotStatusCard.tsx   # Card de estado del bot
│   ├── BotActions.tsx      # Panel de acciones
│   ├── GeneralConfig.tsx   # Configuración general
│   ├── SystemPrompt.tsx    # Editor de prompt
│   ├── QuickStats.tsx      # Tarjetas de estadísticas
│   ├── RecentActivity.tsx  # Timeline de actividades
│   └── index.ts            # Barrel export
├── hooks/                  # Custom Hooks
│   ├── useBotControl.ts    # Hook principal con lógica
│   └── index.ts            # Barrel export
├── types/                  # TypeScript definitions
│   ├── bot.ts             # Interfaces principales
│   └── index.ts           # Barrel export
├── styles/                 # Estilos CSS
│   ├── BotControl.css
│   ├── BotStatusCard.css
│   ├── BotActions.css
│   ├── GeneralConfig.css
│   ├── SystemPrompt.css
│   ├── QuickStats.css
│   └── RecentActivity.css
├── App.tsx                # Componente principal
├── main.tsx               # Entrada de React
├── index.css              # Estilos globales
└── examples.tsx           # Ejemplos de uso

public/
└── (assets estáticos)

```

## 🏗️ Arquitectura

### Estado Global

El estado se gestiona con **React Context + Hooks** (sin Redux):

```
App
└── BotControl (contenedor principal)
    ├── BotStatusCard (solo lectura)
    ├── BotActions (interactivo)
    ├── GeneralConfig (interactivo)
    ├── SystemPrompt (interactivo)
    ├── QuickStats (solo lectura)
    └── RecentActivity (solo lectura)
```

**Flujo de datos:**
1. `useBotControl()` centraliza todo el estado
2. Los componentes reciben `props` y `callbacks`
3. Los cambios actualizan el estado en el hook
4. Se propagan hacia abajo a través de props

### Tipos de Componentes

#### **Contenedores (Smart Components)**
- `BotControl`: Orquesta todo, gestiona estado
- Responsables de lógica de negocio

#### **Presentacionales (Dumb Components)**
- `BotStatusCard`, `QuickStats`, `RecentActivity`
- Solo reciben props y renderizan
- Reutilizables y testables

#### **Formularios (Form Components)**
- `GeneralConfig`, `SystemPrompt`
- Manejan entrada del usuario
- Callbacks para actualizar estado

## 🚀 Desarrollo

### Agregar un Nuevo Componente

1. **Crear archivo** en `src/components/MyComponent.tsx`:

```typescript
import React from 'react';
import '../styles/MyComponent.css';

interface MyComponentProps {
  // Props del componente
  data: string;
  onAction: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  data,
  onAction,
}) => {
  return (
    <div className="my-component">
      <p>{data}</p>
      <button onClick={onAction}>Acción</button>
    </div>
  );
};
```

2. **Crear estilos** en `src/styles/MyComponent.css`:

```css
.my-component {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.my-component:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}
```

3. **Exportar** en `src/components/index.ts`:

```typescript
export { MyComponent } from './MyComponent';
```

4. **Usar** en `BotControl.tsx`:

```typescript
import { MyComponent } from './MyComponent';

// En el JSX:
<MyComponent data="test" onAction={handleAction} />
```

## 🎨 Componentes

### BotStatusCard

**Responsabilidades:**
- Mostrar estado actual del bot
- Indicador visual con animación pulse
- Información de uptime

**Props:**
```typescript
interface BotStatusCardProps {
  bot: BotState;
}
```

**Personalización de colores:**
```typescript
const getStatusColor = (status: BotState['status']) => {
  switch (status) {
    case 'active': return '#10b981';    // Verde
    case 'paused': return '#f59e0b';    // Ámbar
    case 'inactive': return '#ef4444';  // Rojo
  }
};
```

### BotActions

**Responsabilidades:**
- Proporcionar botones de control
- Manejar estados deshabilitados
- Feedback visual

**Props:**
```typescript
interface BotActionsProps {
  bot: BotState;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
  onRestart: () => void;
}
```

### GeneralConfig

**Responsabilidades:**
- Editor de configuración
- Validación de inputs
- Feedback de guardado

**Estado local:**
```typescript
const [tempConfig, setTempConfig] = useState(bot);
const [isSaved, setIsSaved] = useState(false);
```

### SystemPrompt

**Responsabilidades:**
- Editor de prompt del sistema
- Contador de caracteres
- Indicador de capacidad

**Características:**
- Max 2000 caracteres
- Color de advertencia al 80%
- Botones guardar/restaurar

### QuickStats

**Responsabilidades:**
- Mostrar 4 estadísticas principales
- Iconos descriptivos
- Colores según métrica

**Customizar estadísticas:**
```typescript
const statItems: StatItem[] = [
  {
    label: 'Tu etiqueta',
    value: stats.tuMetrica,
    icon: '📊',
    color: '#3b82f6',
    format: (v) => `${v} unidades`,
  },
  // ...
];
```

### RecentActivity

**Responsabilidades:**
- Timeline de eventos
- Iconos y colores por tipo
- Timestamps relativos

**Tipos de actividad:**
- `started` - Bot iniciado
- `paused` - Bot pausado
- `stopped` - Bot detenido
- `config_updated` - Config actualizada
- `campaign_sent` - Campaña enviada
- `error` - Error

## 🎯 Hooks

### useBotControl

El hook principal gestiona:

```typescript
const {
  bot,              // Estado actual del bot
  stats,            // Estadísticas
  activities,       // Historial de actividades
  updateBotConfig,  // (config: Partial<BotState>) => void
  updateBotStatus,  // (status: BotStatus) => void
  addActivity,      // (activity: Omit<ActivityLog, 'id'>) => void
  resetBot,         // () => void (restaurar inicial)
} = useBotControl();
```

**Ejemplo de uso:**

```typescript
const handleConfigChange = (newConfig: Partial<BotState>) => {
  updateBotConfig(newConfig);
  // Automáticamente añade un evento en el log
};

const handleStart = () => {
  updateBotStatus('active');
  // Automáticamente crea evento "Bot iniciado"
};
```

## 🎨 Estilos

### Sistema de Variables CSS

```css
:root {
  --color-primary: #06b6d4;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;
  --color-info: #3b82f6;
}
```

### Paleta de Colores

| Uso | Color | Hex |
|-----|-------|-----|
| Primario | Cian | #06b6d4 |
| Éxito | Verde | #10b981 |
| Advertencia | Ámbar | #f59e0b |
| Peligro | Rojo | #ef4444 |
| Info | Azul | #3b82f6 |

### Breakpoints Responsive

```css
/* Desktop */
@media (max-width: 1024px) { /* Tablet grande */ }
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobile */ }
```

### Animaciones

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Pulse (estado) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

## 🔌 Integración Backend

### Actualmente (Mock Data)

```typescript
const [bot, setBot] = useState<BotState>(initialBotState);
```

### Próxima Fase (API Real)

```typescript
const useBotControl = () => {
  const [bot, setBot] = useState<BotState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBotData();
  }, []);

  const fetchBotData = async () => {
    try {
      const response = await fetch('/api/bot/status');
      const data = await response.json();
      setBot(data);
    } catch (error) {
      console.error('Error fetching bot:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBotConfig = async (config: Partial<BotState>) => {
    try {
      const response = await fetch('/api/bot/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      const updatedBot = await response.json();
      setBot(updatedBot);
    } catch (error) {
      console.error('Error updating config:', error);
    }
  };

  // ... más métodos
};
```

### Endpoints API Sugeridos

```
GET    /api/bot/status       # Obtener estado actual
POST   /api/bot/config       # Actualizar configuración
POST   /api/bot/start        # Iniciar bot
POST   /api/bot/pause        # Pausar bot
POST   /api/bot/stop         # Detener bot
GET    /api/bot/activities   # Obtener actividades
GET    /api/bot/stats        # Obtener estadísticas
```

## ✅ Testing

### Ejemplos de Tests (Jest + React Testing Library)

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { BotStatusCard } from './BotStatusCard';

describe('BotStatusCard', () => {
  it('renders bot name', () => {
    const bot = { name: 'Test Bot', status: 'active' };
    render(<BotStatusCard bot={bot} />);
    expect(screen.getByText('Test Bot')).toBeInTheDocument();
  });

  it('shows correct status indicator', () => {
    const bot = { status: 'active' };
    render(<BotStatusCard bot={bot} />);
    expect(screen.getByText('Activo')).toBeInTheDocument();
  });
});
```

## 📝 Convenciones de Código

### Naming

- Componentes: `PascalCase` (BotControl.tsx)
- Hooks: `useCamelCase` (useBotControl.ts)
- Variables/functions: `camelCase`
- CSS classes: `kebab-case` (.status-card)
- Constantes: `UPPER_SNAKE_CASE`

### Estructura de Componentes

```typescript
// 1. Imports
import React, { useState } from 'react';
import '../styles/MyComponent.css';

// 2. Types/Interfaces
interface MyComponentProps {
  data: string;
}

// 3. Component
export const MyComponent: React.FC<MyComponentProps> = ({ data }) => {
  // 4. State
  const [state, setState] = useState('');

  // 5. Effects
  React.useEffect(() => {
    // logic
  }, []);

  // 6. Handlers
  const handleAction = () => {
    setState('new value');
  };

  // 7. Render
  return (
    <div className="my-component">
      {data}
    </div>
  );
};
```

## 🐛 Debugging

### Herramientas

```bash
# React DevTools
# Redux DevTools (si se agrega Redux)
# Network tab (para APIs)
# Console logs estratégicos
```

### Logs Útiles

```typescript
console.log('Bot state:', bot);
console.log('Stats:', stats);
console.log('Activities:', activities);
```

## 📊 Métricas de Performance

- Lighthouse: >90 en desktop
- TTI: <2 segundos
- FCP: <1 segundo
- CLS: <0.1

## 🔄 Ciclo de Vida Típico

1. **Desarrollo** → git checkout -b feature/new-feature
2. **Cambios** → Crear/editar componentes
3. **Testing** → npm run lint && npm run test
4. **Build** → npm run build
5. **Review** → Pull request
6. **Deploy** → npm run preview

---

**Última actualización**: Enero 2025
**Versión**: 1.0.0
