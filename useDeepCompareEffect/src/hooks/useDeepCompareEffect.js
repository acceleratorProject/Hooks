import { useEffect, useRef } from 'react'
export default function useDeepCompareEffect(callback, dependencies) {
  const dependenciesRef = useRef()
  if (!dependencies || !dependencies.length) {
    throw new Error(
      'useDeepCompareEffect should not be used with no dependencies. Use React.useEffect indead'
    )
  }

  if (
    dependencies.every(
      (dependencie) => dependencie == null || /^[sbn]/.test(typeof dependencie)
    )
  ) {
    throw new Error(
      'useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
    )
  }

  if (
    JSON.stringify(dependenciesRef.current) !== JSON.stringify(dependencies)
  ) {
    dependenciesRef.current = dependencies
  }

  useEffect(callback, [dependenciesRef.current])
}
