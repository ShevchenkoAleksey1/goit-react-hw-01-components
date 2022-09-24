import styled from 'styled-components';

export const Card = styled.div`
  /* background-color: lightgray;
  padding: 20px; */
  width: 300px;

  margin: 15px auto 0 auto;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
`;

export const Image = styled.div`
  /* width: 500px;
  background-color: #fff; */
`;
export const Img = styled.img`
  background-color: red;
  margin-left: 33%;
  margin-bottom: 25px;
  margin-top: 25px;
  border-radius: 50%;
  width: 100px;
`;
export const Li = styled.li`
  list-style: none;
  justify-content: center;
  width: 300px;
  text-align: center;
  margin: 0 0 10px;
  color: #768696;
`;
export const LiName = styled.li`
  list-style: none;
  justify-content: center;

  text-align: center;
  width: 300px;
  margin: 0 0 10px;
  font-weight: 700;
`;

export const Statistics = styled.ul`
  /* list-style: none;
  display: flex;
  justify-content: space-around; */

  background-color: #f3f6f9;
  display: flex;

  list-style: none;
  margin: 0;
  padding: 0;
`;
export const List = styled.li`
  flex-basis: 33.33%;
  display: flex;
  flex-wrap: wrap;
  height: 73px;
  border: 1px solid #e4e9f0;
  background-color: #f3f6f9;
`;
export const Label = styled.span`
  flex-basis: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
  font-weight: 400;
  font-size: 12px;
  color: #768696;
  margin-top: auto;
`;
export const Quantity = styled.span`
  flex-basis: 100%;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;
  font-weight: 900;
  font-size: 14px;
  color: #1f3349;
  margin-bottom: auto;
`;
