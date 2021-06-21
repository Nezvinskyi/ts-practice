type TAnimationState = 'playing' | 'paused';
type THttpState = 'request' | 'success' | 'error';

const makeState = <S,>(initialState: S) => {
  let state = initialState;

  const getState = () => {
    return state;
  };

  const setState = (newState: S) => {
    state = newState;
  };

  return {
    getState,
    setState,
  };
};

const animationState = makeState<TAnimationState>('playing');
animationState.setState('paused');
// animationState.setState('request');

const httpState = makeState<THttpState>('success');
httpState.setState('success');
// httpState.setState('playing');

export {};

// useState<{name: string | null}>({name: ''})
