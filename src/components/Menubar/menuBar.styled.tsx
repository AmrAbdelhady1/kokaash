import styled from "styled-components";

export const StyledMenuBar = styled.nav`
  height: 79px;
  background: #fff;
  box-shadow: 0px 11px 15px 0px rgba(0, 0, 0, 0.08);
`;
export const StyledMenuList = styled.ul`
  height: 100%;
  width: 100%;
`;
export const StyledMenuItem = styled.li`
  color: #7f7f7f;
  font-family: Gotham;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  text-transform: capitalize;
  margin-right: 9.65%;
`;

export const StyledSubItems = styled.div`
  height: 60%;
  background: var(--kokaashw-hi-te, #fff);
  box-shadow: 0px 8px 7px 0px rgba(0, 0, 0, 0.25);
  padding: 26px 38px 107px 39px;
  z-index: 100;
`;
export const StyledItemTitle = styled.p<{ color: string }>`
  color: ${(props: any) => props.color};
  font-family: Gotham;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 90.909% */
  text-transform: capitalize;
`;
export const StyledStoreItem = styled.a`
  color: #7f7f7f;
  /* gotham bold 22 */
  font-family: Gotham;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 90.909% */
  text-transform: capitalize;
  margin-bottom: 37px;
`;
