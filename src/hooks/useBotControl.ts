import { useState, useCallback } from 'react';
import type { BotState, Statistics, ActivityLog, BotStatus } from '../types/bot';

const initialBotState: BotState = {
  id: 'bot-001',
  name: 'Bot Inteligente Premium',
  status: 'inactive',
  model: 'GPT-4o',
  temperature: 0.7,
  maxMessagesPerHour: 100,
  systemPrompt: 'Eres un asistente de IA profesional y amable. Responde en español y ayuda a los clientes de manera eficiente.',
  lastActivity: '2 horas atrás',
  uptime: '15h 32m',
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date(),
};

const initialStats: Statistics = {
  messagesSentToday: 324,
  customersServed: 47,
  activeConversations: 8,
  responseRate: 98.5,
};

const initialActivities: ActivityLog[] = [
  {
    id: '1',
    timestamp: '2024-01-15T14:30:00',
    type: 'config_updated',
    message: 'Configuración actualizada',
    details: 'Modelo cambiado de GPT-4.1 a GPT-4o',
  },
  {
    id: '2',
    timestamp: '2024-01-15T12:15:00',
    type: 'campaign_sent',
    message: 'Campaña enviada',
    details: 'Se enviaron 150 mensajes a clientes',
  },
  {
    id: '3',
    timestamp: '2024-01-15T10:00:00',
    type: 'started',
    message: 'Bot iniciado',
    details: 'Sistema listo para procesar mensajes',
  },
  {
    id: '4',
    timestamp: '2024-01-14T22:30:00',
    type: 'paused',
    message: 'Bot pausado',
    details: 'Pausa manual del usuario',
  },
  {
    id: '5',
    timestamp: '2024-01-14T20:00:00',
    type: 'stopped',
    message: 'Bot detenido',
    details: 'Mantenimiento programado',
  },
];

export const useBotControl = () => {
  const [bot, setBot] = useState<BotState>(initialBotState);
  const [stats, setStats] = useState<Statistics>(initialStats);
  const [activities, setActivities] = useState<ActivityLog[]>(initialActivities);

  const updateBotConfig = useCallback((config: Partial<BotState>) => {
    setBot((prevBot) => ({
      ...prevBot,
      ...config,
      updatedAt: new Date(),
    }));

    // Add activity log
    addActivity({
      timestamp: new Date().toISOString(),
      type: 'config_updated',
      message: 'Configuración actualizada',
      details: 'Cambios guardados exitosamente',
    });
  }, []);

  const updateBotStatus = useCallback((status: BotStatus) => {
    setBot((prevBot) => ({
      ...prevBot,
      status,
      updatedAt: new Date(),
    }));

    const messages = {
      active: 'Bot iniciado',
      paused: 'Bot pausado',
      inactive: 'Bot detenido',
    };

    addActivity({
      timestamp: new Date().toISOString(),
      type: status as 'started' | 'paused' | 'stopped',
      message: messages[status],
      details: `Estado del bot: ${status}`,
    });
  }, []);

  const addActivity = useCallback((activity: Omit<ActivityLog, 'id'>) => {
    const newActivity: ActivityLog = {
      ...activity,
      id: Date.now().toString(),
    };

    setActivities((prevActivities) => [newActivity, ...prevActivities]);
  }, []);

  const resetBot = useCallback(() => {
    setBot(initialBotState);
    setStats(initialStats);
    setActivities(initialActivities);
  }, []);

  return {
    bot,
    stats,
    activities,
    updateBotConfig,
    updateBotStatus,
    addActivity,
    resetBot,
  };
};
