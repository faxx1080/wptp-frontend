import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function SimpleTable({ data }){
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell>Tag</TableCell>
                        <TableCell>Correct Answer</TableCell>
                        <TableCell>Your Answer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.question_id}>
                            <TableCell>{row.question_id}</TableCell>
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
