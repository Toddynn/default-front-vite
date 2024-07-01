import { StatusConnection } from '@/contexts/status-connection-context';
import { useContext } from 'react';

export const useConnection = () => useContext(StatusConnection);
