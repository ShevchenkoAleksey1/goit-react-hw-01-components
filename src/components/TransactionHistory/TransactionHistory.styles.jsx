import styled from 'styled-components';

export const TableContainer = styled.table`
  /* border: 1px solid grey; */
  text-align: center;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  border-collapse: collapse;
  font-family: 'Helvetica', 'Roboto', sans-serif;
`;
export const Th = styled.th`
  border: 1px solid white;
  text-align: center;
  width: 300px;
  height: 50px;
  background-color: #36afd4;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: white;
`;
export const Td = styled.td`
  border: 1px solid lightgray;
  text-align: center;
  height: 50px;
`;
