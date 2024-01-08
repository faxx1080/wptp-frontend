import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import LinkButton from "./LinkButton";
import { testResultRoute } from "../data/constants";

export default function ExamCard({ exam }) {
  const { id, date, reading, writing, math } = exam;

  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Exam ID: {id}
        </Typography>
        <Typography variant="body1">
          Date: {date.toLocaleDateString()}
        </Typography>
        <Typography variant="body1">
          Reading&Writing: {reading + writing}
        </Typography>
        <Typography variant="body1">Math: {math}</Typography>
      </CardContent>
      <CardActions>
        <LinkButton path={`${testResultRoute}/${id}`} text="View Details" />
      </CardActions>
    </Card>
  );
}
