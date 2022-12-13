import styled from "styled-components";
const Test = styled.div.withConfig({
  displayName: "use-directory-name-on-index__Test",
  componentId: "sc-rbhlw3-0"
})`color:red;`;
const before = styled.div.withConfig({
  displayName: "use-directory-name-on-index__before",
  componentId: "sc-rbhlw3-1"
})`color:blue;`;
styled.div.withConfig({
  displayName: "use-directory-name-on-index",
  componentId: "sc-rbhlw3-2"
})``;
export default styled.button.withConfig({
  displayName: "use-directory-name-on-index",
  componentId: "sc-rbhlw3-3"
})``;
