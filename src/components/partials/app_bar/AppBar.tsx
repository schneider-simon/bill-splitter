import * as React from 'react';

export interface AppBarProps {

}

export const AppBar: React.SFC<AppBarProps> = () => {
  return (
      <div className="app-bar navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">Bill splitter</span>
      </div>
  )
}