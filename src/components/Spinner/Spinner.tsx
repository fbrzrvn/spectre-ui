import styles from './Spinner.module.scss'

export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The color of the spinner
   * @default '#dee2e6'
   */
  color?: string
  /**
   * The color of the empty area in the spinner
   * @default "transparent"
   */
  emptyColor?: string
  /**
   * For accessibility, it's important to add a fallback loading text
   * This text will be visible to screen readers
   * @default "Loading..."
   */
  label?: string
  /**
   * The speed of the spinner
   * @default "0.7s"
   * @example
   * ```jsx
   * <Spinner speed="0.45s"/>
   * ```
   */
  speed?: string
  /**
   * The size of the spinner
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * The thickness of the spinner
   * @default "2px"
   * @example
   * ```jsx
   * <Spinner thickness="4px"/>
   * ```
   */
  thickness?: string
}

export const Spinner = ({
  color = '#dee2e6',
  emptyColor,
  label = 'Loading...',
  speed,
  size = 'md',
  thickness,
  ...rest
}: SpinnerProps) => {
  const spinnerStyles = {
    color: color,
    borderWidth: thickness,
    borderTopColor: emptyColor,
    animationDuration: speed,
    ...styles,
  }

  return (
    <div
      className={`${styles.spinner} ${styles[size]}`}
      aria-label={label}
      aria-live="polite"
      role="status"
      style={spinnerStyles}
      {...rest}
    />
  )
}
