import { Spinner } from '~/components'
import { cx } from '~/helpers'

import styles from './Button.module.scss'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual color appearance of the component
   * Use the colorScheme prop to change the color scheme of the button
   * @default "primary"
   */
  colorScheme?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  /**
   * If true, the button will be disabled
   * Pass the isDisabled prop to disabled the button
   * @default false
   */
  isDisabled?: boolean
  /**
   * If true, the button will be styled as icon button
   * @default false
   */
  isIconButton?: boolean
  /**
   * If true, the button will show a spinner
   * Pass the isLoading prop to show its loading state
   * @default false
   */
  isLoading?: boolean
  /**
   * The label to show in the button when isLoading is true. If no text is passed, it only shows the spinner
   * @default undefined
   */
  loadingText?: string
  /**
   * The size of the button
   * Use the size prop to change the size of the button
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * It determines the placement of the spinner when isLoading is true
   * When a loadingText is present, you can change the placement of the spinner element to either start or end
   * @default "start"
   */
  spinnerPlacement?: 'start' | 'end'
  /** The type attribute for the button
   *  @default "button"
   */
  type?: 'submit' | 'button' | 'reset'
  /**
   * The variant of the button
   * Use the variant prop to change the visual style of the button
   * @default "ghost"
   */
  variant?: 'ghost' | 'solid' | 'outline' | 'link'
}

export const Button = ({
  children,
  colorScheme = 'primary',
  isDisabled,
  isIconButton,
  isLoading,
  loadingText,
  size = 'md',
  spinnerPlacement = 'start',
  type = 'button',
  variant = 'ghost',
  ...rest
}: ButtonProps) => {
  const classes = cx(styles[colorScheme], styles[size], styles[variant], isIconButton && styles['is-icon-button'])

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading}
      {...rest}
    >
      {isLoading && spinnerPlacement === 'start' && (
        <>
          <Spinner
            color="currentColor"
            size="sm"
          />
          {loadingText}
        </>
      )}

      {isLoading && spinnerPlacement === 'end' && (
        <>
          {loadingText}
          <Spinner
            color="currentColor"
            size="sm"
          />
        </>
      )}

      {!isLoading && children}
    </button>
  )
}
