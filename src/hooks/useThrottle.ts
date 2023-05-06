const useThrottle = (fn: any, delay: number) => {
  let previous = 0;
  return function (...args: any[]) {
    let now = new Date().getTime();
    if (now - previous > delay) {
      previous = now;
      fn(...args);
    }
  };
};

export { useThrottle };
