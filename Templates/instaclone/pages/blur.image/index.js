import React from "react";
import { Small, PostImage } from "./styles";

const ImageView = props => {
  console.log(props);
  return (
    <Small
      source={{ uri: props.smallSource }}
      ratio={props.ratio}
      resizeMode="contain"
    >
      <PostImage
        source={{ uri: props.source }}
        ratio={props.ratio}
        resizeMode="contain"
      />
    </Small>
  );
};

export default ImageView;
