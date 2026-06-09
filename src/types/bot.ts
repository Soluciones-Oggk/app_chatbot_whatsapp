export type BotStatus = 'active' | 'inactive' | 'paused';
export type AIModel = 'GPT-4o' | 'GPT-4.1' | 'Claude' | 'Gemini';

export interface BotState {
  id: string;
  name: string;
  status: BotStatus;
  model: AIModel;
  temperature: number;
  maxMessagesPerHour: number;
  systemPrompt: string;
  lastActivity: string;
  uptime: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Statistics {
  messagesSentToday: number;
  customersServed: number;
  activeConversations: number;
  responseRate: number;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  type: 'started' | 'paused' | 'stopped' | 'config_updated' | 'campaign_sent' | 'error';
  message: string;
  details?: string;
}

export interface BotControlContextType {
  bot: BotState;
  stats: Statistics;
  activities: ActivityLog[];
  updateBotConfig: (config: Partial<BotState>) => void;
  updateBotStatus: (status: BotStatus) => void;
  addActivity: (activity: Omit<ActivityLog, 'id'>) => void;
}
