import React from 'react';
import { Container, Grid } from '@mui/material';
import TestCard from './TestCard';
import sampleTest from '../data/test';

export default function ExamList() {
    return (
        <Container style={{ marginTop: '20px' }}>
            <Grid container spacing={2}>
                {sampleTest.map((exam) => (
                    <Grid key={exam.id} item xs={12} sm={6} md={4} lg={3}>
                        <TestCard exam={exam} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
