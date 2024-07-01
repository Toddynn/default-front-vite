import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/ui/theme-provider';
import { StatusConnectionProvider } from './contexts/status-connection-context';
import { useTheme } from './hooks/use-theme';
import { queryClient } from './lib/clients/tanstack-client';
import Navigation from './routes';

export default function App() {
	const { theme } = useTheme();
	return (
		<QueryClientProvider client={queryClient}>
			<StatusConnectionProvider>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<Navigation />
					<Toaster theme={theme === 'dark' ? 'dark' : 'light'} richColors />
				</ThemeProvider>
			</StatusConnectionProvider>
		</QueryClientProvider>
	);
}
