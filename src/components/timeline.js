import * as d3 from "d3"
import * as Plot from "npm:@observablehq/plot";

export function timeline(data) {
  return Plot.plot({
    marginLeft: 150,
    marginTop: 50,
    width: 600,
    color: {
      scheme: "RdYlBu", // Use the D3 categorical color scheme "category10"
      domain: [...new Set(data.map((d) => d.role))], // Unique values for 'role'
      legend: true // Show legend for the role color encoding
    },
    axis: null,
    x: {
      axis: "top",
      grid: true,
      tickFormat: (x) => `${x}`,
      ticks: d3.range(
        d3.min(data, (d) => d.start),
        d3.max(data, (d) => d.end) + 1,
        1
      ), // Ticks every year
      tickRotate: -90 // Rotate tick labels vertically
    },
    marks: [
      Plot.barX(data, {
        x1: "start",
        x2: "end",
        y: "person",
        sort: { y: "x2" },
        href: (d) => d.pubmedUrl, // Make each bar clickable, pointing to pubmedUrl
        target: "_blank",
        fill: "role",
        stroke: "black", // Add black outline
        strokeWidth: 0.15, // Set outline thickness
        title: "github"
      }),
      Plot.text(data, {
        x: "start",
        y: "person",
        text: "person",
        textAnchor: "end",
        dx: -3
      })
      ]
  })
}

export function plotPubs(data) {
  return Plot.plot({
    marginLeft: 200,
    marginTop: 50,
    width: 600,
    height: 600,
    color: {
      type: "linear", // Linear scale for continuous values
      scheme: "YlOrRd", // Color scheme for the heatmap (e.g., "Blues", "Viridis", etc.)
      legend: true // Display the color legend
    },
    x: {
      axis: "top", // Position the x-axis at the top
      tickFormat: (x) => `${x}`,
      tickRotate: -90,
    },
    y: {
      reverse: true, // Reverse the y-axis to have the first category at the top
      // labelAnchor: "end", // Position labels at the end of the ticks
      tickFormat: (d) => d, // Optional tick format if needed
      grid: true,
    },
    marks: [
      Plot.rect(data, {
        x: "Year", // X-axis is determined by 'categoryX'
        y: "Journal", // Y-axis is determined by 'categoryY'
        fill: "Total Citations", // The color fill is determined by the 'value' field
        stroke: "black", // Add black outline
        strokeWidth: 0.15, // Set outline thickness
        href: "PMID",
        title: "Title"
      })
    ]
  });
}


export function constructPubMedURL(data) {
  data.forEach((item) => {
    item.PMID = `https://pubmed.ncbi.nlm.nih.gov/${item.PMID}/`; // Convert PMID to a URL
  });
  return data;
}

/*export function timeline(events, {width, height} = {}) {
  return Plot.plot({
    width,
    height,
    marginTop: 30,
    x: {nice: true, label: null, tickFormat: ""},
    y: {axis: null},
    marks: [
      Plot.ruleX(events, {x: "year", y: "y", markerEnd: "dot", strokeWidth: 2.5}),
      Plot.ruleY([0]),
      Plot.text(events, {x: "year", y: "y", text: "name", lineAnchor: "bottom", dy: -10, lineWidth: 10, fontSize: 12})
    ]
  });
}*/