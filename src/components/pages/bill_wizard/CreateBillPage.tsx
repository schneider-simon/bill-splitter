import * as React from 'react';

export interface CreateBillPageProps {

}

export interface CreateBillPageState {

}

export class CreateBillPage extends React.Component<CreateBillPageProps, CreateBillPageState> {
  constructor(props: CreateBillPageProps) {
    super(props)

    this.state = {}
  }

  public render() {
    return (
        <div className="page page--create-bill">
          Create Bill Page
        </div>
    );
  }
}