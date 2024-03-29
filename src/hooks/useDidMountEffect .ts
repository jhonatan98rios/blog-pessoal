import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useDidMountEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) effect();
    else didMount.current = true;
  }, deps);
}

export default useDidMountEffect;
