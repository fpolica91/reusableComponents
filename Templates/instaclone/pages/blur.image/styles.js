import styled from "styled-components/native";

export const PostImage = styled.Image`
  width: 100%
  aspect-ratio: ${props => props.ratio}
`;

export const Small = styled.ImageBackground`
width: 100%
background: #eee
aspect-ratio: ${props => props.ratio}
`;
