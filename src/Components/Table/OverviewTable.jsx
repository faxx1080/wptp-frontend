import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function OverviewTable({ data }) {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reading Section</TableCell>
            <TableCell>Writing Section</TableCell>
            <TableCell>Math Section</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((test) => {
            const total = test.reading + test.writing + test.math;
            return (<TableRow key={test.id}>
              <TableCell>{test.reading}</TableCell>
              <TableCell>{test.writing}</TableCell>
              <TableCell>{test.math}</TableCell>
              <TableCell>{total}</TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
