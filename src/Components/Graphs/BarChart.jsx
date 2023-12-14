import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { arrayFromZero } from '../../Utils';

const BarChart = ({ data, maxX }) => {
    const svgRef = useRef();
    const margin = { top: 20, right: 20, bottom: 60, left: 70 };
    const width = 400 - margin.left - margin.right;
    const initialHeight = 80;
    const height = 35 * data.length - margin.top - margin.bottom + initialHeight;

    useEffect(() => {
        // D3 code to create a horizontal bar chart
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const yScale = d3.scaleBand()
            .domain(data.map(d => d.tag))
            .range([0, height])
            .padding(0.2);

        // To provide padding for the x-axis, think about change xScale not taking up the whole width
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.frequency)])
            .range([0, width]);

        // Create and append two rectangles for each bar with different colors
        svg.selectAll('g.bar')
            .data(data)
            .enter()
            .append('g')
            .attr('class', 'bar')
            .attr('transform', d => `translate(${margin.left}, ${yScale(d.tag)})`)
            .each(function (d) {
                const total_width = xScale(d.frequency);
                const correct_width = total_width / d.frequency * d.number_correct;
                const wrong_width = total_width - correct_width;

                d3.select(this).append('rect')
                    .attr('height', yScale.bandwidth())
                    .attr('width', wrong_width)
                    .attr('fill', 'red');

                d3.select(this).append('rect')
                    .attr('height', yScale.bandwidth())
                    .attr('width', correct_width)
                    .attr('transform', `translate(${wrong_width}, 0)`)
                    .attr('fill', 'green');
            });

        // Add axes
        svg.append('g')
            .attr('transform', `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(yScale));

        svg.append('g')
            .attr('transform', `translate(${margin.left}, ${height})`)
            .call(d3.axisBottom(xScale).tickValues(arrayFromZero(maxX + 1)).tickFormat(d3.format('d')));

        // Add bottom axis label
        svg.append('text')
            .attr('x', width / 2 + margin.left) // Centered at the bottom
            .attr('y', height + margin.top + 20) // Adjust the vertical position as needed
            .style('text-anchor', 'middle')
            .text('Number of Questions');

        // Add legend
        const legend = svg.append('g')
            .attr('x', width / 2 + margin.left) // Centered at the bottom
            .attr('transform', `translate(${width}, ${height + margin.top + 5})`)

        const legendRectSize = 18;
        const legendSpacing = 4;

        const legendItems = ['Correct', 'Incorrect']; // Change order for correct legend

        legend.selectAll('rect')
            .data(legendItems)
            .enter()
            .append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
            .attr('y', (d, i) => i * (legendRectSize + legendSpacing))
            .attr('fill', (d, i) => (i === 0) ? 'green' : 'red'); // Adjust colors accordingly

        legend.selectAll('text')
            .data(legendItems)
            .enter()
            .append('text')
            .attr('x', legendRectSize + legendSpacing)
            .attr('y', (d, i) => i * (legendRectSize + legendSpacing) + legendRectSize / 2)
            .attr('dy', '0.35em')
            .text(d => d);

        const legendPadding = 3;
        const legendRectWidth = legendRectSize + legendSpacing + 65;
        const legendRectHeight = legendItems.length * (legendRectSize + legendSpacing) + legendSpacing;
        const legendStrokeWidth = 2;   // Set the border width
        legend.append('rect')
            .attr('x', 0 - legendPadding)
            .attr('y', 0 - legendPadding)
            .attr('width', legendRectWidth)
            .attr('height', legendRectHeight)
            .attr('fill', 'none')
            .attr('stroke', 'black')
            .attr('stroke-width', legendStrokeWidth);
    }, [data, maxX]);

    return (
        <svg ref={svgRef} width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}></svg>
    );
};

export default BarChart;
