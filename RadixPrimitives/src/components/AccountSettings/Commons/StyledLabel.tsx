import * as Label from "@radix-ui/react-label";
import styled from "@emotion/styled";

export const StyledLabel = styled(Label.Root)`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  color: ${({theme}) => theme.color.primaryColor};
  justify-content: center;
`;
