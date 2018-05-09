import * as React from 'react';

export interface PageProps {
  children: any,
  pageName: string
}

export interface PageState {

}

export class Page extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props)

    this.state = {}
  }

  public render() {
    return (
        <div className={`page page--${this.props.pageName}`}>
          {...this.props.children}
        </div>
    );
  }
}