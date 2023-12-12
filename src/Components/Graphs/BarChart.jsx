// chart = {
//     // Specify the chart’s dimensions, based on a bar’s height.
//     const barHeight = 25;
//     const marginTop = 30;
//     const marginRight = 0;
//     const marginBottom = 10;
//     const marginLeft = 30;
//     const width = 928;
//     const height = Math.ceil((alphabet.length + 0.1) * barHeight) + marginTop + marginBottom;

//     // Create the scales.
//     const x = d3.scaleLinear()
//         .domain([0, d3.max(alphabet, d => d.frequency)])
//         .range([marginLeft, width - marginRight]);

//     const y = d3.scaleBand()
//         .domain(d3.sort(alphabet, d => -d.frequency).map(d => d.letter))
//         .rangeRound([marginTop, height - marginBottom])
//         .padding(0.1);

//     // Create a value format.
//     const format = x.tickFormat(20, "%");

//     // Create the SVG container.
//     const svg = d3.create("svg")
//         .attr("width", width)
//         .attr("height", height)
//         .attr("viewBox", [0, 0, width, height])
//         .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

//     // Append a rect for each letter.
//     svg.append("g")
//         .attr("fill", "steelblue")
//         .selectAll()
//         .data(alphabet)
//         .join("rect")
//         .attr("x", x(0))
//         .attr("y", (d) => y(d.letter))
//         .attr("width", (d) => x(d.frequency) - x(0))
//         .attr("height", y.bandwidth());

//     // Append a label for each letter.
//     svg.append("g")
//         .attr("fill", "white")
//         .attr("text-anchor", "end")
//         .selectAll()
//         .data(alphabet)
//         .join("text")
//         .attr("x", (d) => x(d.frequency))
//         .attr("y", (d) => y(d.letter) + y.bandwidth() / 2)
//         .attr("dy", "0.35em")
//         .attr("dx", -4)
//         .text((d) => format(d.frequency))
//         .call((text) => text.filter(d => x(d.frequency) - x(0) < 20) // short bars
//             .attr("dx", +4)
//             .attr("fill", "black")
//             .attr("text-anchor", "start"));

//     // Create the axes.
//     svg.append("g")
//         .attr("transform", `translate(0,${marginTop})`)
//         .call(d3.axisTop(x).ticks(width / 80, "%"))
//         .call(g => g.select(".domain").remove());

//     svg.append("g")
//         .attr("transform", `translate(${marginLeft},0)`)
//         .call(d3.axisLeft(y).tickSizeOuter(0));

//     return svg.node();
// }

// alphabet = FileAttachment("alphabet.csv").csv({ typed: true })

// Plot.plot({
//     x: { axis: "top", percent: true },
//     y: { label: null },
//     marks: [
//         Plot.barX(alphabet, { x: "frequency", y: "letter", fill: "steelblue", sort: { y: "-x" } }),
//         Plot.text(alphabet, { x: "frequency", y: "letter", text: d => format(d.frequency), textAnchor: "start", dx: 3, filter: d => d.frequency <= 0.007, fill: "currentColor" }),
//         Plot.text(alphabet, { x: "frequency", y: "letter", text: d => format(d.frequency), textAnchor: "end", dx: -3, filter: d => d.frequency > 0.007, fill: "white" }),
//         Plot.ruleX([0])
//     ]
// })

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { arrayFromZero } from '../../Utils';

const BarChart = ({ containerClass, data, maxX }) => {
    const svgRef = useRef();
    // Set up the scaleslef
    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
    const width = 400 - margin.left - margin.right;
    const height = 50 * data.length - margin.top - margin.bottom;
    // const height = 100 - margin.top - margin.bottom;


    useEffect(() => {
        // D3 code to create a horizontal bar chart
        const svg = d3.select(svgRef.current);
        const yScale = d3.scaleBand()
            .domain(data.map(d => d.tag))
            .range([0, height])
            .padding(0.2);

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
            .call(d3.axisBottom(xScale).tickValues(arrayFromZero(maxX)).tickFormat(d3.format('d')));

        // Add left axis label
        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 0 - margin.left)
            .attr('x', 0 - height / 2)
            .attr('dy', '1em')
            .style('text-anchor', 'middle')
            .text('Labels on the Left');
    }, [data, maxX]);

    return (
        <svg ref={svgRef} width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}></svg>
    );
};

export default BarChart;