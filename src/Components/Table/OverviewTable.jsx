import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export default function OverviewTable({ data }) {
  const total = data.reading + data.writing + data.math;

  return (
    <TableContainer component={Paper} elevation={4}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Reading&Writing Section</Typography>
              <Typography variant="caption" style={{ fontSize: 'smaller' }}>
                out of 800
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
          <TableRow key={data.id}>
            <TableCell>{data.reading + data.writing}</TableCell>
            <TableCell>{data.math}</TableCell>
            <TableCell>{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
