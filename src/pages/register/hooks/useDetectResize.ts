import React from 'react';

const useDetectResize = () => {
  const [isResized, setResized] = React.useState<boolean>(false);

  React.useEffect(() => {
    const changeResizeState = () => setResized(!isResized);
    window.addEventListener('resize', changeResizeState);
    return () => window.removeEventListener('resize', changeResizeState);
  }, []);

  return { isResized };
};

export default useDetectResize;
