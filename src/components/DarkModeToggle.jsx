import Switch from './Switch';
import { useTheme } from '../contexts/ThemeContext';

export default function DarkModeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      label={theme === 'dark' ? 'Dark mode' : 'Light mode'}
      checked={theme === 'dark'}
      onChange={toggleTheme}
      className={className}
    />
  );
}

