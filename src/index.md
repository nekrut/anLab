---
title: anLab
theme: cotton
---

# an Lab | A part of [Galaxy](https://galaxyproject.org)

##### We are the birthplace of Galaxy project

-----

## People

This lab was (and is) lucky to have the following fantastic individuals: 

```js
import {timeline} from "./components/timeline.js";
```

```js
const ppl = FileAttachment("./data/ppl.json").json();
```

```js
timeline(ppl)
```

<small>Clicking on each bar will take you to publications authored by this person. Mouse over to see GitHub handle (if available).</small>

<div class="warning" label="We are hiring!">If you want to develop new ways to analyze and interpret data <a href="mailto:aun1@psu.edu">contact us</a>!</div>

----

## Publications

Our publication over the years:

```js
import {plotPubs, constructPubMedURL} from "./components/timeline.js";
```

```js
const pubs = FileAttachment("./data/pubs.csv").csv({ typed: true })
```

```js
  plotPubs(constructPubMedURL(pubs))
```

<small>Clicking on each box will take to PubMed page for this publication. Mouse over to see the title. Citation data is from https://icite.od.nih.gov/analysis.</small>

----

## Collaborators

Our major collaborators are distributed across the world:

```js
const div = display(document.createElement("div"));
div.style = "height: 200px; width:600px";

const map = L.map(div).setView([20.0, 0.0], 2); // Set initial view to a more global perspective

// Add OpenStreetMap tiles
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Define an array with each person's information, including their coordinates
const locations = [
  {
    name: "Daniel Blankenberg",
    link: "https://www.lerner.ccf.org/gmi/blankenberg/",
    position: [41.4993, -81.6944], // Cleveland, OH, USA
    institution: "Cleveland Clinic"
  },
  {
    name: "John Fonner",
    link: "https://tacc.utexas.edu/about/staff-directory/john-fonner/",
    position: [30.2672, -97.7431], // Austin, TX, USA
    institution: "Texas Advanced Computing Center"
  },
  {
    name: "Giulio Formenti",
    link: "https://www.linkedin.com/in/giulio-formenti-20a8668a/",
    position: [40.7128, -74.0060], // New York, NY, USA
    institution: "The Rockefeller University"
  },
  {
    name: "Jeremy Goecks",
    link: "https://goeckslab.org/",
    position: [27.9506, -82.4572], // Tampa, FL, USA
    institution: "Moffitt Cancer Center"
  },
  {
    name: "Björn Grüning",
    link: "https://github.com/bgruening",
    position: [47.999, 7.8421], // Freiburg, Germany
    institution: "Albert-Ludwigs-Universität Freiburg"
  },
  {
    name: "Max Haeussler",
    link: "https://campusdirectory.ucsc.edu/cd_detail?uid=mhaeussl",
    position: [36.9741, -122.0308], // Santa Cruz, CA, USA
    institution: "UCSC"
  },
  {
    name: "Sergei Kosakovsky Pond",
    link: "https://igem.temple.edu/people/person/e266d9a5b7f043109baecc3c340491f6",
    position: [39.9526, -75.1652], // Philadelphia, PA, USA
    institution: "Temple University"
  },
  {
    name: "Ross Lazarus",
    link: "https://au.linkedin.com/in/rosslazarus",
    position: [-33.8688, 151.2093], // Sydney, Australia
    institution: "galaxyproject.org"
  },
  {
    name: "Kateryna Makova",
    link: "http://www.bx.psu.edu/makova_lab/",
    position: [40.7934, -77.8600], // State College, PA, USA
    institution: "Penn State"
  },
  {
    name: "Gareth Price",
    link: "https://www.qcif.edu.au/team/gareth-price/",
    position: [-27.4698, 153.0251], // Brisbane, Australia
    institution: "University of Queensland"
  },
  {
    name: "James Taylor",
    link: "https://jxtxfoundation.org/",
    position: [39.2904, -76.6122], // Baltimore, MD, USA
    institution: "Johns Hopkins"
  },
  {
    name: "Mike Schatz",
    link: "https://schatz-lab.org/",
    position: [39.2904, -76.6122], // Baltimore, MD, USA
    institution: "Johns Hopkins"
  },
];

// Iterate over the locations array and create markers for each
locations.forEach(person => {
  const marker = L.marker(person.position).addTo(map);

  // Create popup content with a link to the person's webpage
  marker.bindPopup(`
    <b><a href="${person.link}" target="_blank">${person.name}</a></b><br>
    ${person.institution}
  `);
});


```

<small>Click on marker to see information about that person.</small>

----

## Projects

We are involved in many large initiatives including: 

### [Galaxy](https://galaxyproject.org)

A platform for data intensive analytics used by thousands of researchers. It is an open-source, web-based platform designed to make complex analyses accessible to anyone regardless of their ability to access powerful infrastructure. Galaxy emphasizes reproducibility and transparency, allowing users to share their complete analysis, including tools, parameters, and data. With its global network of public servers, cloud integration, and a growing library of tools, Galaxy is widely used in fields like biology, climate, chemistry, material sciences and more.

### [Vertebrate Genome Project](https://vertebrategenomesproject.org/)

The Vertebrate Genome Project (VGP) is an ambitious global initiative aimed at sequencing high-quality reference genomes for all extant vertebrate species. By producing near error-free genome assemblies, the VGP seeks to enhance our understanding of vertebrate evolution, biodiversity, and conservation. These genomic resources are critical for addressing fundamental biological questions and for applications in medicine, agriculture, and wildlife conservation. The project is part of the broader Earth BioGenome Project, which aims to sequence, catalog, and preserve genomes of all eukaryotic life on Earth.


### [BRC Analytics](https://brc-analytics.org)

Is our newest project. It is a comprehensive bioinformatics platform developed to streamline the analysis of pathogen, host, and vector data with a particular focus on eukaryotic pathogens (such as *Plasmodium* for example). It provides researchers with tools and resources to analyze large-scale datasets efficiently, enabling them to derive meaningful insights into biological processes, disease mechanisms, and evolutionary patterns. The platform often integrates various data types, such as genomic, transcriptomic, and proteomic data, and offers visualization tools to aid in the interpretation of complex data sets. 


### [AnVIL](https://anvilproject.org)

AnVIL (Analysis, Visualization, and Informatics Lab-space) is a cloud-based platform designed to support biomedical research by providing scalable computational resources, tools, and secure access to large datasets. Developed by the National Human Genome Research Institute (NHGRI), AnVIL facilitates the analysis and sharing of genomic and related biomedical data. It integrates widely used tools for data processing, visualization, and collaboration, enabling researchers to work on large datasets without the need for local infrastructure. AnVIL supports reproducible research and aims to accelerate discoveries in genomics, health, and medicine by making data more accessible to the research community.

----

## James Taylor

James Peter Taylor was a pioneering computational biologist and co-creator of the Galaxy Project, a widely-used open-source platform that revolutionized access to bioinformatics tools and workflows. Taylor, alongside Anton Nekrutenko, developed Galaxy to democratize large-scale data analysis in genomics, enabling researchers to perform complex bioinformatics tasks without needing advanced programming skills. His work on Galaxy emphasized accessibility, reproducibility, and transparency, which significantly impacted the fields of genomics, computational biology, and scientific collaboration. Taylor held positions at Emory University and later at Johns Hopkins University, where he continued to innovate in bioinformatics and computational biology until his untimely passing in 2020. His contributions have left a lasting legacy in open science and the global bioinformatics community. 

<a href="https://jxtxfoundation.org" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: orange; color: black; text-align: center; text-decoration: none; border-radius: 5px;">Donate to JXTX Foundation</a>

----

## Funding

We are primarily funded by the [National Institutes of Health](https://reporter.nih.gov/search/koRNhs2Wy0akJuPp5EiYXA/projects) and the [National Science Foundation](https://www.nsf.gov/awardsearch/simpleSearchResult?queryText=nekrutenko&ActiveAwards=true). Additional funds are provided by [the Huck Institutes for the Life Sciences](https://www.huck.psu.edu/) at Penn State. 

-----

## Location

We are located on campus of [the Pennsylvania State University](https://www.psu.edu) in Wartik Lab 505. We are part of [the Department of Biochemistry and Molecular Biology](https://science.psu.edu/bmb) and [the Huck Institutes for the Life Sciences](https://www.huck.psu.edu/). 