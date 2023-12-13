import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function SimpleTable({ data }){
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Number</b></TableCell>
                        <TableCell><b>Tag</b></TableCell>
                        <TableCell><b>Correct Answer</b></TableCell>
                        <TableCell><b>Your Answer</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={row.question_id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.tag}</TableCell>
                            <TableCell>{row.correct_answer}</TableCell>
                            <TableCell>{row.submitted_answer || "unanswered"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
