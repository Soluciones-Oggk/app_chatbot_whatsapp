import type { ReactNode } from 'react';

type SurfaceCardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({ title, subtitle, children, className = '' }: SurfaceCardProps) {
  return (
    <section className={`surface-card ${className}`.trim()}>
      {title || subtitle ? (
        <header className="surface-card-header">
          <div>
            {title ? <h3>{title}</h3> : null}
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        </header>
      ) : null}
      {children}
    </section>
  );
}
