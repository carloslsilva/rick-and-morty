import clsx from 'clsx'
import type { FC, HTMLProps } from 'react'

type Props = HTMLProps<HTMLElement> & {
  as?: 'main' | 'section' | 'header' | 'footer'
  variant?: 'long' | 'short'
  light?: boolean
}

export const Container: FC<Props> = ({
  as = 'section',
  variant = 'short',
  light,
  className,
  children,
  ...rest
}) => {
  const Component = as
  return (
    <Component
      className={clsx(
        light
          ? 'bg-primary-100 text-primary-800'
          : 'bg-primary-800 text-primary-100'
      )}
      {...rest}
    >
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
