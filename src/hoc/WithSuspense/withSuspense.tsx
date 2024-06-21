import React, { ComponentType, Suspense } from 'react';
import Fallback from 'components/Fallback';

/**
 * A higher-order component (HOC) that wraps a component with React's Suspense
 * to provide a fallback UI while the wrapped component is being lazy-loaded.
 *
 * @param WrappedComponent - The component to be wrapped with Suspense.
 * @returns A new component that renders the `WrappedComponent` with Suspense and a fallback UI.
 * 
 * @template P - The type of props that the wrapped component accepts.
 *
 * @example
 * const LazyComponent = withSuspense(SomeComponent);
 * 
 * return (
 *   <LazyComponent someProp={value} />
 * );
 */
const withSuspense = <P extends object>(WrappedComponent: ComponentType<P>): React.FC<P> => {
  /**
   * A component that renders the `WrappedComponent` with a Suspense fallback UI.
   * 
   * @param props - The props to be passed to the `WrappedComponent`.
   * @returns A `React.FC` that renders `WrappedComponent` with `Suspense`.
   */
  const WithSuspense: React.FC<P> = (props: P) => (
    <Suspense fallback={<Fallback />}>
      <WrappedComponent {...props} />
    </Suspense>
  );

  return WithSuspense;
};

export default withSuspense;
