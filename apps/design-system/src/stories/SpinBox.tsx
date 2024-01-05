import React, { useCallback, useState } from 'react'

import { Button } from './Button'

export interface Props {
  defaultValue?: number
  max?: number
  min?: number
}

export const SpinBox: React.FC<Props> = ({ min = 0, defaultValue = min || 0, max }) => {
  const [count, setCount] = useState(defaultValue)

  const handleIncrement = useCallback(() => {
    setCount((prev) => (max !== undefined && prev >= max ? prev : prev + 1))
  }, [])

  const handleDecrement = useCallback(() => {
    setCount((prev) => (prev > min ? prev - 1 : prev))
  }, [])

  return (
    <>
      <Button onClick={handleDecrement} label="-" />
      <span data-testid="count">{count}</span>
      <Button onClick={handleIncrement} label="+" />
    </>
  )
}
