# Bot Control Center 🤖

Un módulo profesional y moderno para administrar bots de IA especializado en automatización de mensajes personalizados con inteligencia artificial.

## 🎯 Características

### 1. **Tarjeta de Estado del Bot**
- Indicador visual en tiempo real (Verde/Naranja/Rojo)
- Estado: Activo, En pausa, Inactivo
- Información de última actividad
- Tiempo en línea acumulado
- Fecha de creación y última actualización

### 2. **Acciones del Bot**
- **Iniciar Bot**: Activa el sistema
- **Pausar Bot**: Pone en pausa sin detener completamente
- **Reiniciar Bot**: Reinicia el sistema
- **Detener Bot**: Detiene completamente

Botones inteligentes con estados deshabilitados según el estado actual del bot.

### 3. **Configuración General**
- **Nombre del Bot**: Editable en tiempo real
- **Modelo IA**: Selector entre GPT-4o, GPT-4.1, Claude, Gemini
- **Temperatura**: Slider de precisión (0) a creatividad (1)
- **Máximo de Mensajes/Hora**: Control de rate limiting
- Guardado automático de configuración

### 4. **Prompt del Sistema**
- Editor de texto large con sintaxis personalizada
- Contador de caracteres (máx 2000)
- Indicador visual de capacidad
- Botones para guardar y restaurar

### 5. **Estadísticas Rápidas**
- **Mensajes Enviados Hoy**: Contador en tiempo real
- **Clientes Atendidos**: Número total de clientes
- **Conversaciones Activas**: Chats en progreso
- **Tasa de Respuesta**: Porcentaje de éxito
- Iconos y colores visuales para cada métrica

### 6. **Actividad Reciente**
- Timeline de eventos del bot
- Tipos: Iniciado, Pausado, Detenido, Config actualizada, Campaña enviada, Errores
- Timestamps relativos (hace X minutos/horas)
- Scroll automático con máximo 8 eventos visibles
- Opción para ver más actividad

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── BotControl.tsx           # Componente principal
│   ├── BotStatusCard.tsx        # Tarjeta de estado
│   ├── BotActions.tsx           # Panel de acciones
│   ├── GeneralConfig.tsx        # Configuración general
│   ├── SystemPrompt.tsx         # Editor de prompt
│   ├── QuickStats.tsx           # Estadísticas
│   └── RecentActivity.tsx       # Actividad reciente
├── hooks/
│   └── useBotControl.ts         # Custom hook para lógica
├── types/
│   └── bot.ts                   # TypeScript interfaces
├── styles/
│   ├── BotControl.css           # Estilos principales
│   ├── BotStatusCard.css        # Estilos de estado
│   ├── BotActions.css           # Estilos de acciones
│   ├── GeneralConfig.css        # Estilos de config
│   ├── SystemPrompt.css         # Estilos de prompt
│   ├── QuickStats.css           # Estilos de stats
│   └── RecentActivity.css       # Estilos de actividad
├── App.tsx
├── index.css                    # Estilos globales
└── main.tsx
```

## 🎨 Diseño

- **Tema**: Dark mode moderno SaaS
- **Paleta de colores**:
  - Primario: Cian (`#06b6d4`)
  - Éxito: Verde (`#10b981`)
  - Advertencia: Ámbar (`#f59e0b`)
  - Peligro: Rojo (`#ef4444`)
  - Info: Azul (`#3b82f6`)

- **Características de diseño**:
  - Gradientes suaves
  - Bordes translúcidos
  - Sombras sofisticadas
  - Transiciones fluidas
  - Animaciones al cargar

## 📱 Responsividad

El diseño es completamente responsive para:
- Desktop (1400px+)
- Tablet (768px - 1023px)
- Mobile (480px - 767px)
- Extra pequeño (<480px)

## 🔧 Tecnologías

- **React 19**: Framework UI
- **TypeScript**: Tipado estático
- **Vite**: Build tool rápido
- **CSS3**: Estilos modernos con variables CSS

## 🚀 Uso

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm build

# Preview de build
npm preview
```

### Importar el Componente

```typescript
import BotControl from './components/BotControl';

function App() {
  return <BotControl />;
}

export default App;
```

## 💾 Datos Mock

El componente utiliza datos simulados mediante `useState`:

```typescript
const {
  bot,              // Estado del bot
  stats,            // Estadísticas
  activities,       // Log de actividades
  updateBotConfig,  // Actualizar configuración
  updateBotStatus,  // Cambiar estado
  addActivity,      // Agregar evento
} = useBotControl();
```

### Estructura de Datos

```typescript
// Bot State
{
  id: string;
  name: string;
  status: 'active' | 'paused' | 'inactive';
  model: 'GPT-4o' | 'GPT-4.1' | 'Claude' | 'Gemini';
  temperature: number;
  maxMessagesPerHour: number;
  systemPrompt: string;
  lastActivity: string;
  uptime: string;
  createdAt: Date;
  updatedAt: Date;
}

// Statistics
{
  messagesSentToday: number;
  customersServed: number;
  activeConversations: number;
  responseRate: number;
}

// Activity Log
{
  id: string;
  timestamp: string;
  type: 'started' | 'paused' | 'stopped' | 'config_updated' | 'campaign_sent' | 'error';
  message: string;
  details?: string;
}
```

## 🎬 Funcionalidades Interactivas

### Actualizar Configuración

```typescript
onConfigChange({
  name: 'Nuevo nombre',
  temperature: 0.8,
  model: 'Claude'
});
```

### Cambiar Estado del Bot

```typescript
updateBotStatus('active');    // Activar
updateBotStatus('paused');    // Pausar
updateBotStatus('inactive');  // Detener
```

### Agregar Evento

```typescript
addActivity({
  timestamp: new Date().toISOString(),
  type: 'config_updated',
  message: 'Configuración actualizada',
  details: 'Cambios guardados'
});
```

## 🔮 Casos de Uso

1. **Administración en Tiempo Real**: Monitorear y controlar bots activos
2. **Configuración Avanzada**: Ajustar parámetros de IA y límites
3. **Auditoría**: Revisar actividades y cambios recientes
4. **Escalabilidad**: Interfaz preparada para múltiples bots
5. **Analytics**: Visualizar métricas clave del bot

## 🎓 Mejores Prácticas Implementadas

✅ **React Hooks**: `useState`, `useCallback` para manage state
✅ **TypeScript**: Tipado completo con interfaces
✅ **Componentes Reutilizables**: Modular y escalable
✅ **CSS Modular**: Estilos separados por componente
✅ **Responsive Design**: Mobile-first approach
✅ **Código Limpio**: Naming conventions y estructura clara
✅ **Accesibilidad**: Labels, ARIA, focus management
✅ **Performance**: Memoization y optimización

## 📝 Notas de Desarrollo

- Los datos son simulados. Para un ambiente de producción, conecta a un backend
- El custom hook `useBotControl` gestiona todo el estado del aplicación
- Los estilos CSS utilizan variables CSS para fácil personalización
- Las animaciones mejoran la UX sin afectar el performance

## 🚀 Próximas Características (Roadmap)

- [ ] Integración con backend API
- [ ] Autenticación y autorización
- [ ] Múltiples bots en dashboard
- [ ] Gráficos y analytics avanzados
- [ ] Exportar reportes
- [ ] Notificaciones en tiempo real
- [ ] Historial de cambios
- [ ] Modo claro (Light theme)

## 📄 Licencia

MIT - Libre para usar en proyectos comerciales y personales

---

**Desarrollado con ❤️ como Senior Frontend Developer especializado en React SaaS**
