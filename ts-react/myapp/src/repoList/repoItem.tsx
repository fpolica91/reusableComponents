import React from "react";
import { Repository } from "../store/ducks/repositories/types";

interface OwnProps {
  repository: Repository;
}

export default function RepoItem({ repository }: OwnProps) {
  return (
    <div key={repository.id}>
      <li>{repository.name}</li>
      <a href={repository.html_url}>github link </a>
      <p>{repository.language}</p>
    </div>
  );
}
