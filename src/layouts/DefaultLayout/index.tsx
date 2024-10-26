import { Outlet } from "react-router-dom";
import { Wrapper, Container } from "./styles";

export function DefaultLayout() {
  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  );
}
