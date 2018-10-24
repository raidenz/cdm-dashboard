import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 20px;
  background-color: #fff;
`;
const RowPading = styled.div`
  padding: 10px 10px !important;
  cursor: pointer;
  border-top: 5px solid ${props => (props.active ? '#4dbd42' : 'transparent')};

`;
const User = styled.div`
  font-weight: bold;
  font-size: 12px;
`;
const Number = styled.div`
  font-weight: bold;
  font-size: 30px;
`;
const Percent = styled.div`
  font-weight: bold;
  font-size: 10px;
  color: #4dbd42;
`;

const TabSelector = ({
}) => {
  return (
    <Wrapper>
      <div className="row">
        <RowPading className="col-md" active>
          <User>Users</User>
          <Number>58K</Number>
          <Percent>10.2%</Percent>
        </RowPading>
        <RowPading className="col-md">
          <User>Course Completed</User>
          <Number>58K</Number>
          <Percent>10.2%</Percent>
        </RowPading>
        <RowPading className="col-md">
          <User>Learning Plan Complete</User>
          <Number>58K</Number>
          <Percent>10.2%</Percent>
        </RowPading>
        <RowPading className="col-md">
          <User>Learning Hour</User>
          <Number>58K</Number>
          <Percent>10.2%</Percent>
        </RowPading>
      </div>
    </Wrapper>
  );
};
export default TabSelector;
