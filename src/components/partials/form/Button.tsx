import * as React from 'react';
import * as classnames from 'classnames'

export interface ButtonProps {
  primary?: boolean,
  secondary?: boolean,
  disabled?: boolean,
  children: any,
  onClick: () => any
}

export const Button: React.SFC<ButtonProps> = (props) => {
  let isDefault = false

  if (!props.secondary && !props.secondary) {
    isDefault = true
  }

  const className = classnames({
    "btn": true,
    "btn-primary": props.primary,
    "btn-secondary": props.secondary,
    "btn-default": isDefault
  })

  return (
      <button disabled={props.disabled} className={className}>
        {props.children}
      </button>
  )
}