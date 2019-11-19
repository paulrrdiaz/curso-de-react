import styled from "@emotion/styled";

export const Card = styled("div")`
  background-color: ${({ background = "106, 176, 76" }) =>
    `rgba(${background}, 0.9)`};
  border-radius: 10px;
  max-width: 400px;
  width: 20%;
  padding: 10px 20px;
`;

export const CardPicture = styled("picture")`
  > img {
    max-width: 100%;
    width: 100%;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 5px solid #fff;
  }
`;