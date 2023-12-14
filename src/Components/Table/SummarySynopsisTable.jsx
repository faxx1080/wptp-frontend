import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import sampleTest from '../../data/test';
import { getSuperScores } from '../../Utils';

export default function SummarySynopsisTable() {
    const { EBRWMax, mathMax } = getSuperScores(sampleTest);

    return (
        <TableContainer component={Paper} elevation={4}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h6">Date</Typography>
                        </TableCell>
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
                    {
                        sampleTest.map((exam) => {
                            const total = exam.reading + exam.writing + exam.math;

                            const { id, date, reading, writing, math } = exam;
                            return (
                                <TableRow key={id}>
                                    <TableCell>{date.toLocaleDateString()}</TableCell>
                                    <TableCell>{reading + writing}</TableCell>
                                    <TableCell>{math}</TableCell>
                                    <TableCell>{total}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                    <TableRow>
                        <TableCell>
                            <Typography variant="h6">Super Score:</Typography>
                        </TableCell>
                        <TableCell>{EBRWMax}</TableCell>
                        <TableCell>{mathMax}</TableCell>
                        <TableCell>{EBRWMax + mathMax}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
