import React from 'react';
import type { Statistics } from '../types/bot';
import '../styles/QuickStats.css';

interface QuickStatsProps {
  stats: Statistics;
}

interface StatItem {
  label: string;
  value: number | string;
  icon: string;
  color: string;
  format?: (value: number | string) => string;
}

export const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  const statItems: StatItem[] = [
    {
      label: 'Mensajes hoy',
      value: stats.messagesSentToday,
      icon: '💬',
      color: '#3b82f6',
    },
    {
      label: 'Clientes atendidos',
      value: stats.customersServed,
      icon: '👥',
      color: '#8b5cf6',
    },
    {
      label: 'Conversaciones activas',
      value: stats.activeConversations,
      icon: '💭',
      color: '#10b981',
    },
    {
      label: 'Tasa de respuesta',
      value: stats.responseRate,
      icon: '📊',
      color: '#f59e0b',
      format: (v) => `${v}%`,
    },
  ];

  return (
    <div className="stats-grid">
      {statItems.map((stat, index) => (
        <div
          key={index}
          className="stat-card"
          style={{ borderLeftColor: stat.color }}
        >
          <div className="stat-icon">{stat.icon}</div>

          <div className="stat-content">
            <p className="stat-label">{stat.label}</p>
            <p className="stat-value">
              {stat.format ? stat.format(stat.value) : stat.value}
            </p>
          </div>

          <div
            className="stat-accent"
            style={{ backgroundColor: stat.color + '20' }}
          />
        </div>
      ))}
    </div>
  );
};
