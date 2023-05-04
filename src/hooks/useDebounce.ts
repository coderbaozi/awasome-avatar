function useDebounce(fn: any, delay: number) {
  let timer: number | null;
  return function (...args: any[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}
export { useDebounce };
