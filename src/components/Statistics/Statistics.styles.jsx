import styled from 'styled-components';

export const StatisticsSection = styled.div`
  width: 300px;

  margin: 0 auto;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
`;
export const Titel = styled.div`
  justify-content: center;

  text-align: center;
  width: 300px;
  margin: 20px 0 20px;
  font-weight: 700;
  color: #768696;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
export const List = styled.li`
  flex-basis: 33.33%;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  padding: 10px 5px;
  border-radius: 5px;
  border: 1px solid #e4e9f0;
`;
export const Label = styled.span`
  flex-basis: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
  font-weight: 400;
  font-size: 14px;
  color: white;
  margin-top: auto;
`;
export const Percentage = styled.span`
  flex-basis: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
  font-weight: 900;
  font-size: 16px;
  color: white;
  margin-bottom: auto;
`;
