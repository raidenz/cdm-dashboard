// top right widget
import React from 'react';
import styled from 'styled-components';
import { Chart, Axis, Series, Bar } from 'react-charts';
import CardFooterLink from '../CardFooterLink';

const Wrapper = styled.div`
  background-color: #4185f5;
  width: 100%;
`;
const Number = styled.div`
  font-size: 45px;
  margin-bottom: 10px;
`;
const Card = styled.div`
  background-color: #4185f5 !important;
  color: #fff;
`;
const Title = styled.h4`
  font-size: 14px;
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
  border-top: 1px solid #6aa8ff;
  border-bottom: 1px solid #6aa8ff;
`;

const ActiveUser = ({ data, page }) => {
  const newGeneratedData = data.map((item, i) => [i + 1, item]);
  const chartData = [{ data: newGeneratedData }];
  return (
    <Wrapper>
      <Card className="card">
        <div className="card-body">
          <Title>Active user righ now</Title>
          <Number>479</Number>
          <Title>Page Views per minutes</Title>
          <div className="mb-3" style={{ height: 200, width: '100%' }}>
            <Chart data={chartData}>
              <Axis primary type="ordinal" position="bottom" show={false} />
              <Axis type="linear" position="right" stacked show={false} />
              <Series type={Bar} />
            </Chart>
          </div>

          {page.results ? (
            <Table>
              <thead>
                <tr>
                  <DataLeft>Top Active Page</DataLeft>
                  <DataRight>Active Users</DataRight>
                </tr>
              </thead>
              <tbody>
                {page &&
                  page.results &&
                  page.results.map((item, i) => (
                    <TableRow key={i}>
                      <DataLeft>/#/{item.name}</DataLeft>
                      <DataRight>{20}</DataRight>
                    </TableRow>
                  ))}
              </tbody>
            </Table>
          ) : (
            'Loading...'
          )}
        </div>
        <CardFooterLink />
      </Card>
    </Wrapper>
  );
};
export default ActiveUser;
