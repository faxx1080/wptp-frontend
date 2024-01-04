import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function QuestionDetailTable({ data }) {
  return (
    <TableContainer component={Paper} elevation={4}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Number</b>
            </TableCell>
            <TableCell>
              <b>Tag</b>
            </TableCell>
            <TableCell>
              <b>Correct Answer</b>
            </TableCell>
            <TableCell>
              <b>Your Answer</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => {
            const color =
              row.correct_answer === row.submitted_answer ? "green" : "red";
            return (
              <TableRow key={row.question_id}>
                <TableCell style={{ color }}>{index + 1}</TableCell>
                <TableCell style={{ color }}>{row.tag}</TableCell>
                <TableCell style={{ color }}>{row.correct_answer}</TableCell>
                <TableCell style={{ color }}>
                  {row.submitted_answer || "unanswered"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
