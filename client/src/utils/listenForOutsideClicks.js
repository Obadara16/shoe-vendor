import { useEffect } from 'react';

export default function useListenForOutsideClicks(listening, setListening, menuRef, setIsOpen) {
  useEffect(() => {
    if (!listening && menuRef.current) {
      const handleClickOutside = (evt) => {
        const cur = menuRef.current;
        const node = evt.target;
        if (!cur.contains(node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);

      setListening(true);

      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }
  }, [listening, setListening, menuRef, setIsOpen]);
}
