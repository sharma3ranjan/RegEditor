import { io } from 'socket.io-client';
// import { REACT_APP_BACKEND_URL } from '../config'

export const initSocket = async () => {
  const options = {
    'force new connection': true,
    reconnectionAttempt: 'infiity',
    timeout: 10000,
    transports: ['websocket'],
  };

  return io(process.env.REACT_APP_API_URL, options);
};
