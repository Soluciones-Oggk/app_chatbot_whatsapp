type IconName =
  | 'dashboard'
  | 'accounts'
  | 'bot'
  | 'company'
  | 'users'
  | 'settings'
  | 'menu'
  | 'search'
  | 'spark'
  | 'shield'
  | 'calendar';

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const commonProps = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'dashboard':
      return (
        <svg {...commonProps}>
          <path d="M4 13.5V20h6v-6.5H4Z" />
          <path d="M4 4h6v6H4V4Z" />
          <path d="M14 4h6v10h-6V4Z" />
          <path d="M14 17h6v3h-6v-3Z" />
        </svg>
      );
    case 'accounts':
      return (
        <svg {...commonProps}>
          <path d="M7 7.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
          <path d="M4.5 20a5.5 5.5 0 0 1 11 0" />
          <path d="M15.5 7.5h4" />
          <path d="M17.5 5.5v4" />
        </svg>
      );
    case 'bot':
      return (
        <svg {...commonProps}>
          <path d="M8 10V8a4 4 0 0 1 8 0v2" />
          <path d="M6 10h12a2 2 0 0 1 2 2v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a2 2 0 0 1 2-2Z" />
          <path d="M9 15h.01" />
          <path d="M15 15h.01" />
          <path d="M12 18v2" />
        </svg>
      );
    case 'company':
      return (
        <svg {...commonProps}>
          <path d="M4 20V5a1 1 0 0 1 1-1h8v16" />
          <path d="M13 9h5a1 1 0 0 1 1 1v10" />
          <path d="M8 8h2" />
          <path d="M8 12h2" />
          <path d="M8 16h2" />
          <path d="M16 13h1.5" />
          <path d="M16 17h1.5" />
        </svg>
      );
    case 'users':
      return (
        <svg {...commonProps}>
          <path d="M16 19a4 4 0 0 0-8 0" />
          <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
          <path d="M19.5 20a3.5 3.5 0 0 0-3-3.45" />
          <path d="M16.5 7.5a3 3 0 1 1 0 6" />
        </svg>
      );
    case 'settings':
      return (
        <svg {...commonProps}>
          <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
          <path d="M19.4 15a7.9 7.9 0 0 0 .1-1 7.9 7.9 0 0 0-.1-1l2-1.4-2-3.5-2.4 1a8.2 8.2 0 0 0-1.7-1L15 5h-4l-.3 2.1a8.2 8.2 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.4a7.9 7.9 0 0 0 0 2L4.6 16.4l2 3.5 2.4-1a8.2 8.2 0 0 0 1.7 1L11 22h4l.3-2.1a8.2 8.2 0 0 0 1.7-1l2.4 1 2-3.5-2-1.4Z" />
        </svg>
      );
    case 'menu':
      return (
        <svg {...commonProps}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case 'search':
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="5" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...commonProps}>
          <path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2Z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 6v5c0 4.9 3.3 8.9 7 10 3.7-1.1 7-5.1 7-10V6l-7-3Z" />
          <path d="m9.5 12 1.8 1.8 3.2-3.6" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...commonProps}>
          <path d="M7 3v3" />
          <path d="M17 3v3" />
          <path d="M4.5 8h15" />
          <path d="M6 5h12a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 18 19H6a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 6 5Z" />
        </svg>
      );
    default:
      return null;
  }
}
