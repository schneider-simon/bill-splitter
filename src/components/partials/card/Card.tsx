import * as React from 'react';

export interface CardProps {
  children: React.ReactNode
}

export const Card: React.SFC<CardProps> = (props) => {
  return (
      <div className="card">
        {props.children}
      </div>
  )
}