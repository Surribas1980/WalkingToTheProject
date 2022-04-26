import { AuthContext } from '../context/authContex';
import { useContext } from 'react';

export default function useAuth() {
  return useContext(AuthContext);
}
