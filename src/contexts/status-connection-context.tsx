import { ReactNode, createContext, useEffect, useState } from 'react';

interface StatusConnectionProps {
	isConnected: boolean;
}

export const StatusConnection = createContext<StatusConnectionProps>({} as StatusConnectionProps);

export function StatusConnectionProvider({ children }: { children: ReactNode }) {
	const [isConnected, setIsConnected] = useState(navigator.onLine);

	useEffect(() => {
		const handleConnected = () => setIsConnected(true);
		const handleOffline = () => setIsConnected(false);

		window.addEventListener('online', handleConnected);
		window.addEventListener('offline', handleOffline);

		return () => {
			window.removeEventListener('online', handleConnected);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	return <StatusConnection.Provider value={{ isConnected }}>{children}</StatusConnection.Provider>;
}
