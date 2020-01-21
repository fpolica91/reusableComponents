import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../store/index";
import { Repository } from "../store/ducks/repositories/types";
import * as RepositoryActions from "../store/ducks/repositories/actions";
import RepoItem from "./repoItem";

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  LoadRequest(): void;
}

type Props = StateProps & DispatchProps;

class RepositoryList extends Component<Props> {
  componentDidMount() {
    const { LoadRequest } = this.props;
    LoadRequest();
  }

  render() {
    const { repositories } = this.props;
    console.log(repositories);
    return (
      <div>
        {repositories.map(repo => (
          <RepoItem key={repo.id} repository={repo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoryActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
