import { SIZES } from '~/constants'

import styles from './Loader.module.scss'

export interface LoaderProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Should the loader show a loading text?
   * @default false
   */
  hasLabel?: boolean
  /**
   * For accessibility, it's important to add a fallback loading text.
   * This text will be visible to screen readers.
   * @default "Loading..."
   */
  label?: string
  /**
   * How large should the loader be?
   * @default "lg"
   */
  size?: SIZES
}

export const Loader = ({ color, hasLabel, label = 'Loading...', size = SIZES.large, ...rest }: LoaderProps) => {
  const _styles = { borderColor: `${color} transparent transparent` }

  return (
    <div
      className={styles.loader}
      {...rest}
      data-testid="loader"
    >
      <div className={styles[size]}>
        <div style={_styles} />
        <div style={_styles} />
        <div style={_styles} />
      </div>
      {hasLabel && <p data-testid="loader-label">{label}</p>}
    </div>
  )
}
