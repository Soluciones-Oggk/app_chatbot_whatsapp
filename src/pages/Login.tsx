import { useMemo, useState } from 'react';
import { Icon } from '../components/Icon';
import '../styles/login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const canSubmit = useMemo(
    () => email.trim().length > 0 && password.trim().length > 0,
    [email, password],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="login-page">
      <section className="login-hero">
        <div className="login-badge">
          <span className="login-badge-icon">AI</span>
          <span>AI Messaging Platform</span>
        </div>

        <div className="login-copy">
          <p className="login-eyebrow">WhatsApp automation</p>
          <h1>Accede a tu plataforma de mensajería con IA</h1>
          <p>
            Un punto de entrada moderno para controlar cuentas, bots, usuarios y reglas de automatización.
          </p>
        </div>

        <div className="login-points">
          <div>
            <strong>Seguridad lista</strong>
            <span>Preparado para autenticación futura sin backend.</span>
          </div>
          <div>
            <strong>Experiencia premium</strong>
            <span>Diseño limpio, centrado y responsive inspirado en Stripe y Vercel.</span>
          </div>
        </div>
      </section>

      <section className="login-card" aria-label="Formulario de ingreso">
        <div className="login-card-header">
          <div className="login-logo">
            <Icon name="spark" className="login-logo-icon" />
          </div>
          <div>
            <p className="login-card-kicker">AI Messaging Platform</p>
            <h2>Ingresar</h2>
            <p>Usa tus credenciales para entrar al panel.</p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="tu@empresa.com"
              autoComplete="username"
            />
          </label>

          <label className="login-field">
            <span>Contraseña</span>
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Ingresa tu contraseña"
                autoComplete="current-password"
              />
              <button
                className="password-toggle"
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </label>

          <button className="login-submit" type="submit" disabled={!canSubmit}>
            Ingresar
          </button>

          <p className="login-footnote">
            Formulario mock sin backend. Listo para conectar a OAuth, SSO o tokenización más adelante.
          </p>
        </form>
      </section>
    </main>
  );
}

export default Login;
