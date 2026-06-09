import React from 'react';
import type { ActivityLog } from '../types/bot';
import '../styles/RecentActivity.css';

interface RecentActivityProps {
  activities: ActivityLog[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const getActivityIcon = (type: ActivityLog['type']): string => {
    switch (type) {
      case 'started':
        return '▶';
      case 'paused':
        return '⏸';
      case 'stopped':
        return '⏹';
      case 'config_updated':
        return '⚙';
      case 'campaign_sent':
        return '📤';
      case 'error':
        return '⚠';
      default:
        return '•';
    }
  };

  const getActivityColor = (type: ActivityLog['type']): string => {
    switch (type) {
      case 'started':
        return '#10b981';
      case 'paused':
        return '#f59e0b';
      case 'stopped':
        return '#ef4444';
      case 'config_updated':
        return '#3b82f6';
      case 'campaign_sent':
        return '#8b5cf6';
      case 'error':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const formatTime = (isoString: string): string => {
    const date = new Date(isoString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Hace unos segundos';
    if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} minutos`;
    if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} horas`;

    return date.toLocaleDateString('es-ES', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="activity-card">
      <h3 className="activity-title">Actividad Reciente</h3>

      <div className="activity-list">
        {activities.length === 0 ? (
          <div className="activity-empty">
            <p>Sin actividad registrada</p>
          </div>
        ) : (
          activities.slice(0, 8).map((activity) => (
            <div key={activity.id} className="activity-item">
              <div
                className="activity-icon"
                style={{ backgroundColor: getActivityColor(activity.type) + '20' }}
              >
                <span style={{ color: getActivityColor(activity.type) }}>
                  {getActivityIcon(activity.type)}
                </span>
              </div>

              <div className="activity-details">
                <p className="activity-message">{activity.message}</p>
                {activity.details && (
                  <p className="activity-description">{activity.details}</p>
                )}
              </div>

              <div className="activity-time">{formatTime(activity.timestamp)}</div>
            </div>
          ))
        )}
      </div>

      {activities.length > 8 && (
        <button className="activity-view-more">
          Ver más actividad ({activities.length - 8})
        </button>
      )}
    </div>
  );
};
