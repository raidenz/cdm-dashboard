// statistic Course and Users
import React from 'react';
import styled from 'styled-components';
import CardFooterLink from '../CardFooterLink';

const Title = styled.div`
  margin-bottom: 20px;
`;
const DataLeft = styled.td`
  text-align: left;
  padding: 10px 0;
`;
const DataRight = styled.td`
  text-align: right;
  padding: 10px 0;
`;
const Table = styled.table`
  width: 100%;
`;
const TableRow = styled.tr`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;
const dummyData = (
  <TableRow>
    <DataLeft>data 1</DataLeft>
    <DataRight>data 1</DataRight>
    <DataRight>{20}</DataRight>
  </TableRow>
)
const Report = ({ title, data, heading=null }) => {
  return (
    <div>
      <Title>{title}</Title>
      <div className="card">
        <div className="card-body">
          <Table>
            <thead>
              <tr>
                {heading &&
                  heading.map((item, i) => {
                    if (i === 0) {
                      return <DataLeft key={i}>{item}</DataLeft>;
                    }
                    return <DataRight key={i}>{item}</DataRight>;
                  })}
              </tr>
            </thead>
            <tbody>
              {Array(5).fill(2).map((item, i) => (
                <TableRow key={i}>
                  <DataLeft>data{item}</DataLeft>
                  <DataRight>data 1</DataRight>
                  <DataRight>{20}</DataRight>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
        <CardFooterLink />
      </div>
    </div>
  )
}
export default Report;
