import { Suspense } from "react";

export const LazyWrapper = (Component) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);
