import { useEffect } from 'react';

//eslint-disable-next-line
export const useDidMount = (arg: () => void): void => useEffect(() => arg, []);
