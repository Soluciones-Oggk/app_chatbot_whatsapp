# ⚡ Quick Start - Bot Control Center

## 🚀 Inicio Rápido (5 minutos)

### 1️⃣ Instalar Dependencias (si es necesario)

```bash
cd \\wsl.localhost\Ubuntu\home\mec\projects\dashboard-bot
npm install
```

### 2️⃣ Iniciar Servidor de Desarrollo

```bash
npm run dev
```

Abrirá automáticamente en: `http://localhost:5173`

### 3️⃣ Ver el Bot Control Center

¡Listo! Deberías ver una interfaz profesional con:
- 🟢 Tarjeta de estado del bot
- ⚙️ Panel de acciones
- ⚙️ Configuración general
- 📝 Editor de prompt
- 📊 Estadísticas rápidas
- 📋 Actividad reciente

---

## 🎮 Interacciones Disponibles

### Tarjeta de Estado
- Ver estado actual (Activo/Pausa/Inactivo)
- Indicador visual con animación
- Información de uptime

### Botones de Acción
- **▶ Iniciar Bot** → Activa el bot
- **⏸ Pausar Bot** → Pone en pausa
- **🔄 Reiniciar Bot** → Reinicia el sistema
- **⏹ Detener Bot** → Detiene completamente

### Configuración General
- 📝 Cambiar nombre del bot
- 🤖 Seleccionar modelo IA
- 🎚️ Ajustar temperatura (slider)
- 🔢 Máximo de mensajes/hora
- 💾 Guardar configuración

### Prompt del Sistema
- ✍️ Editar instrucciones del bot
- 📊 Ver contador de caracteres
- 💾 Guardar cambios
- 🔄 Restaurar original

### Estadísticas
- Ver 4 métricas clave en tiempo real
- Colores distintivos por métrica
- Valores actualizados dinámicamente

### Actividad Reciente
- Ver último evento en la parte superior
- Timeline de actividades
- 6 tipos diferentes de eventos

---

## 📂 Estructura de Carpetas (Importante)

```
dashboard-bot/
├── src/
│   ├── components/
│   │   ├── BotControl.tsx       ← Componente principal
│   │   ├── BotStatusCard.tsx
│   │   ├── BotActions.tsx
│   │   ├── GeneralConfig.tsx
│   │   ├── SystemPrompt.tsx
│   │   ├── QuickStats.tsx
│   │   ├── RecentActivity.tsx
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useBotControl.ts     ← Lógica principal
│   │   └── index.ts
│   ├── types/
│   │   ├── bot.ts               ← Interfaces TypeScript
│   │   └── index.ts
│   ├── styles/
│   │   ├── BotControl.css
│   │   ├── BotStatusCard.css
│   │   ├── BotActions.css
│   │   ├── GeneralConfig.css
│   │   ├── SystemPrompt.css
│   │   ├── QuickStats.css
│   │   └── RecentActivity.css
│   ├── App.tsx                  ← Usa BotControl
│   ├── index.css                ← Estilos globales
│   └── main.tsx
├── package.json
├── vite.config.ts
├── tsconfig.json
├── BOTCONTROL_README.md         ← Docs completas
├── DEVELOPMENT_GUIDE.md         ← Guía de dev
└── IMPLEMENTATION_SUMMARY.md    ← Resumen
```

---

## 💻 Comandos Útiles

```bash
# Desarrollo
npm run dev          # Iniciar servidor con hot reload

# Build
npm run build        # Compilar para producción

# Preview
npm run preview      # Ver build local

# Lint
npm run lint         # Verificar código
```

---

## 🎨 Personalización Rápida

### Cambiar Colores

En `src/index.css`:

```css
:root {
  --color-primary: #06b6d4;      /* Cambiar aquí */
  --color-success: #10b981;      /* Verde */
  --color-warning: #f59e0b;      /* Ámbar */
  --color-danger: #ef4444;       /* Rojo */
}
```

### Cambiar Datos Iniciales

En `src/hooks/useBotControl.ts`:

```typescript
const initialBotState: BotState = {
  id: 'bot-001',
  name: 'Tu Nombre de Bot',          // ← Cambiar aquí
  status: 'inactive',                // ← O aquí
  model: 'GPT-4o',                  // ← O aquí
  // ...más propiedades
};
```

### Agregar Nueva Acción

```typescript
// 1. En BotControl.tsx
const handleNewAction = () => {
  updateBotStatus('active');
  addActivity({
    timestamp: new Date().toISOString(),
    type: 'config_updated',
    message: 'Mi nuevo evento',
  });
};

// 2. En JSX
<button onClick={handleNewAction}>Mi Botón</button>
```

---

## 📊 Mock Data Incluido

El componente viene con datos simulados realistas:

```
Bot Name:              Bot Inteligente Premium
Status:                Inactive
Model:                 GPT-4o
Temperature:           0.7
Max Messages/Hour:     100
Messages Today:        324
Customers Served:      47
Active Conversations:  8
Response Rate:         98.5%
Recent Activities:     5 eventos iniciales
```

---

## 🔌 Integración con Backend (Futuro)

Cuando estés listo para conectar un backend:

```typescript
// En useBotControl.ts, reemplazar:
const [bot, setBot] = useState<BotState>(initialBotState);

// Con:
const [bot, setBot] = useState<BotState | null>(null);

// Y agregar:
useEffect(() => {
  fetchBotData();
}, []);

const fetchBotData = async () => {
  const response = await fetch('/api/bot/status');
  const data = await response.json();
  setBot(data);
};
```

---

## ✅ Checklist de Verificación

Al iniciar `npm run dev`:

- [ ] Se abre la aplicación en http://localhost:5173
- [ ] Ves el header "🤖 Bot Control Center"
- [ ] La tarjeta de estado muestra "Inactivo" (rojo)
- [ ] Hay 4 botones de acción
- [ ] Las estadísticas muestran números
- [ ] El editor de prompt está visible
- [ ] Hay una lista de actividades reciente
- [ ] Todos los botones responden al hacer clic
- [ ] El diseño se adapta al redimensionar la ventana
- [ ] Los colores son correctos

Si todo está ✅, ¡estás listo para desarrollar!

---

## 🐛 Solución de Problemas

### "No se abre en http://localhost:5173"
```bash
# Verifica que Vite está corriendo
npm run dev

# O intenta en otro puerto
npm run dev -- --port 3000
```

### "Errores de TypeScript"
```bash
# Verifica que TypeScript es válido
npm run lint

# O reconstruye
npm run build
```

### "No se actualiza con cambios"
```bash
# Reinicia el servidor
npm run dev

# O limpia caché
rm -rf node_modules/.vite
npm run dev
```

### "Estilos no se ven"
```bash
# Recarga la página (Ctrl+Shift+R)
# O abre en navegador privado

# Verifica que index.css está importado en main.tsx
```

---

## 📚 Documentación Completa

Para información más detallada:

1. **BOTCONTROL_README.md** → Características y uso
2. **DEVELOPMENT_GUIDE.md** → Desarrollo y extensiones
3. **IMPLEMENTATION_SUMMARY.md** → Resumen técnico
4. **src/examples.tsx** → 8 ejemplos de código

---

## 🎯 Próximos Pasos

1. ✅ Ejecutar `npm run dev`
2. ✅ Explorar la interfaz
3. ✅ Leer BOTCONTROL_README.md
4. ✅ Revisar DEVELOPMENT_GUIDE.md si quieres extender
5. ✅ Conectar a backend cuando esté listo

---

## 🆘 Ayuda Rápida

### ¿Cómo cambio el nombre del bot?
→ En la sección "Configuración General", edita el campo "Nombre del Bot" y haz clic en "Guardar Configuración"

### ¿Cómo cambio el modelo de IA?
→ En "Configuración General", selecciona un modelo del dropdown y guarda

### ¿Cómo edito el prompt del sistema?
→ En la sección "Prompt del Sistema", escribe tus instrucciones y haz clic en "Guardar Prompt"

### ¿Cómo veo la actividad del bot?
→ Desplázate hacia abajo a la sección "Actividad Reciente", muestra los últimos 8 eventos

### ¿Dónde están los datos? ¿Cómo los guardo?
→ Actualmente son mock data. Cuando conectes a backend, se guardarán automáticamente en tu servidor

---

## 🎉 ¡Ya Estás Listo!

**Ejecuta estos comandos ahora:**

```bash
cd \\wsl.localhost\Ubuntu\home\mec\projects\dashboard-bot
npm run dev
```

**¡Disfruta tu Bot Control Center!** 🚀
