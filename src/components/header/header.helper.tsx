import { useCallback, useState } from 'react';

interface UseHeaderHelperOutput {
  showNotification: boolean;
  handleShowNotification(): void;
}
export const useHeaderHelper = (): UseHeaderHelperOutput => {
  const [showNotification, setShowNotification] = useState(false);

  const handleShowNotification = useCallback(() => {
    setShowNotification(!showNotification);
  }, [showNotification]);
  return { showNotification, handleShowNotification };
};
