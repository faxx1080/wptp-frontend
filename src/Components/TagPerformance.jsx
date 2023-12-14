import { getTagBarChartAnalysisData, convertToBarChartArray, getMaxFrequency } from "../Utils"
import { Box, Paper, Typography, Grid } from "@mui/material"
import BarChart from "./Graphs/BarChart"

export default function TagPerformace({ data }) {
    const barChartData = convertToBarChartArray(data)
    const maxFrequency = getMaxFrequency(barChartData)
    const { top3MostFrequent, top3MostCorrect, top3LeastCorrect } = getTagBarChartAnalysisData(barChartData)

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Performance by Tags
            </Typography>

            <Grid container spacing={2}>
                {/* Left side: Info about top 3 tags */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={6} style={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5">Top 3 Tags</Typography>
                        <Typography variant="body1">
                            Most Frequent: {top3MostFrequent.join(', ')}
                        </Typography>
                        <Typography variant="body1">
                            Most Correct: {top3MostCorrect.join(', ')}
                        </Typography>
                        <Typography variant="body1">
                            Least Correct: {top3LeastCorrect.join(', ')}
                        </Typography>
                    </Paper>
                </Grid>

                {/* Right side: Bar Chart */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={6} style={{ padding: '20px', marginTop: '20px' }}>
                        <Typography variant="h5">Bar Chart</Typography>
                        <BarChart data={barChartData} maxX={maxFrequency} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}
