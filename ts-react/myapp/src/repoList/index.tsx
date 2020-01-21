import React, { Component } from 'react';

interface Repository {
  id: number;
  name: string;
}

interface Props {
  repositories: Repository[];
}
interface State {
  newRepository?: string;
}

export default class RepositoryList extends Component<Props, State> {
  state = {
    newRepository: ''
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidMount() {}

  render() {
    const { repositories } = this.props;
    return <h1>Hello world</h1>;
  }
}
