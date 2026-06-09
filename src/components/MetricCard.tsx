type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  trend: string;
  tone?: 'accent' | 'blue' | 'success' | 'neutral';
};

export function MetricCard({ label, value, detail, trend, tone = 'neutral' }: MetricCardProps) {
  return (
    <article className={`metric-card tone-${tone}`}>
      <span className="metric-label">{label}</span>
      <strong className="metric-value">{value}</strong>
      <p className="metric-detail">{detail}</p>
      <span className="metric-trend">{trend}</span>
    </article>
  );
}
