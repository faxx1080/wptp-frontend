import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function OverviewTable({ data }) {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Reading Section</Typography>
              <Typography variant="caption" style={{ fontSize: 'smaller' }}>
                out of 400
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Writing Section</Typography>
              <Typography variant="caption" style={{ fontSize: 'smaller' }}>
                out of 400
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Math Section</Typography>
              <Typography variant="caption" style={{ fontSize: 'smaller' }}>
                out of 800
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Total</Typography>
              <Typography variant="caption" style={{ fontSize: 'smaller' }}>
                out of 1600
              </Typography>
            </TableCell>
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
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
