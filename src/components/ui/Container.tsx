import clsx from 'clsx'
import type { FC, HTMLProps } from 'react'

type Props = HTMLProps<HTMLElement> & {
  as?: 'main' | 'section' | 'header' | 'footer'
  variant?: 'long' | 'short'
}

export const Container: FC<Props> = ({
  as = 'section',
  variant = 'short',
  className,
  children,
  ...rest
}) => {
  const Component = as
  return (
    <Component {...rest}>
      <div
        className={clsx(
          variant === 'long' ? 'container' : 'max-w-5xl',
          'mx-auto px-5',
          className
        )}
      >
        {children}
      </div>
    </Component>
  )
}
