import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px 20px 20px;
`;
const TextLeft = styled.div`
  text-align: left;
  cursor: pointer;
`;
const TextRight = styled.div`
  text-align: right;
  cursor: pointer;
`;

const CardFooterLink = ({
}) => {
  return (
    <Wrapper>
      <div className="row">
        <TextLeft className="col-md">
          last 7 days <i className="mdi mdi-chevron-down" />
        </TextLeft>
        <TextRight className="col-md">
          REAL TIME REPORT <i className="mdi mdi-chevron-right" />
        </TextRight>
      </div>
    </Wrapper>
  );
};
export default CardFooterLink;
