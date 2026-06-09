import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { BotControlPage } from '../pages/BotControlPage';
import { CompanyPage } from '../pages/CompanyPage';
import { DashboardPage } from '../pages/DashboardPage';
import { Login } from '../pages/Login';
import { SettingsPage } from '../pages/SettingsPage';
import { UsersPage } from '../pages/UsersPage';
import { WhatsAppAccountsPage } from '../pages/WhatsAppAccountsPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="whatsapp-accounts" element={<WhatsAppAccountsPage />} />
        <Route path="bot-control" element={<BotControlPage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
