import { useRef, useEffect } from 'react';

const useHorizontalScroll = () => {
  const elRef = useRef();

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        const atLeftEdge = el.scrollLeft === 0;
        const atRightEdge = el.scrollLeft + el.clientWidth === el.scrollWidth;

        if (e.deltaY === 0 || (atLeftEdge && e.deltaY < 0) || (atRightEdge && e.deltaY > 0)) {
          return;
        }

        e.preventDefault();

        const direction = e.deltaY > 0 ? 1 : -1;

        el.scrollBy({
          left: direction * 100,
          behavior: 'smooth',
        });
      };

      el.addEventListener('wheel', onWheel);

      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return elRef;
};

export default useHorizontalScroll;
