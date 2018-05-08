import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export interface StartPageProps {

}

export interface StartPageState {

}

export class StartPage extends React.Component<StartPageProps, StartPageState> {
  constructor(props: StartPageProps) {
    super(props)

    this.state = {}
  }

  public render() {
    return (
        <div className="page page--start">
          <RaisedButton label="Add Bill" primary={true}/>
          <ul>
            <li>Bill 1</li>
            <li>Bill 2</li>
            <li>Bill 3</li>
          </ul>
        </div>
    );
  }
}