import { useConnection } from '@/hooks/use-connection.ts';
import Home from '@/pages/home';
import LostPage from '@/templates/lost';
import WithoutConnection from '@/templates/without-connection';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

export default function NavigationProvider() {
	const { isConnected } = useConnection();

	return (
		<Router key={location.pathname}>
			{!isConnected ? (
				<WithoutConnection />
			) : (
				<Routes>
					{/* <Route element={<PrivateRoutes />}>
						
					</Route> */}

					<Route path="/" element={<Home />} />

					<Route path="*" element={<LostPage />} />
				</Routes>
			)}
		</Router>
	);
}
