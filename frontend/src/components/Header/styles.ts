import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  width:100%;
  height:50px;
  background-color:gray;
`;


export const LinkButton = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 10px;
`;
