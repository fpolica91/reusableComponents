export enum RepositoriesTypes {
  LOAD_FAILURE = "@repositories/LOAD_REQUEST",
  LOAD_REQUEST = "@repositories/LOAD_SUCCCES",
  LOAD_SUCCESS = "@repositories/LOAD_FAILURE"
}

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  language: string;
}

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
