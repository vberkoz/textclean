
# TextClean

A simple web application for cleaning and formatting text with a variety of transformation options.

## Overview

TextClean is a browser-based utility that allows users to apply various text transformations to clean, format, and manipulate text content. Built with Astro and deployed on AWS using CDK, it provides a simple and intuitive interface for text processing tasks.

## Features

TextClean offers a comprehensive set of text transformation options:

### Text Cleaning
- **Trim Whitespace**: Removes leading/trailing whitespace
- **Remove Extra Spaces**: Collapses multiple spaces into one
- **Remove Line Breaks**: Removes newlines and carriage returns
- **Normalize Text**: Normalizes Unicode characters and spacing
- **Strip HTML Tags**: Removes HTML tags from the text
- **Remove Empty Lines**: Deletes blank lines

### Text Formatting
- **Indent Text**: Adds indentation to each line (configurable spaces)
- **Unindent Text**: Removes indentation from multi-line text
- **Justify Text**: Aligns text to both left and right margins
- **Left Align Text**: Aligns text to the left
- **Right Align Text**: Aligns text to the right
- **Center Align Text**: Centers text horizontally
- **Limit Line Length**: Wraps text so no line exceeds specified length
- **Add Line Numbers**: Prefixes each line with its number

### Text Manipulation
- **Reverse Text**: Reverses the entire string character by character
- **Reverse Words**: Reverses the order of words
- **Reverse Sentences**: Reverses the order of sentences
- **Reverse Lines**: Reverses the order of lines
- **Sort Lines**: Sorts lines alphabetically (A–Z)
- **Shuffle Lines**: Randomly shuffles the lines

### Additional Features
- Real-time transformation preview
- Character, word, and line counting
- Copy to clipboard functionality
- Reset button to clear all text and selections

## Project Structure

```
/
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # UI components
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── TextArea.astro
│   │   ├── TextFormatter.astro
│   │   └── TransformControls.astro
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Page components
│   │   └── index.astro
│   ├── scripts/         # Client-side scripts
│   │   └── transformations.js
│   └── styles/          # Global styles
│       └── global.css
├── cdk/                 # AWS CDK deployment code
│   ├── bin/
│   │   └── textclean.ts
│   └── lib/
│       └── textclean.ts
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/vberkoz/textclean.git
   cd textclean
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Start development server at localhost:4321   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the build locally before deployment  |

## Deployment

TextClean is configured for deployment to AWS using the CDK (Cloud Development Kit).

### AWS Deployment Prerequisites

- AWS CLI configured with appropriate credentials
- AWS CDK installed globally (`npm install -g aws-cdk`)

### Deployment Steps

1. Build the project
   ```bash
   npm run build
   ```

2. Navigate to the CDK directory
   ```bash
   cd cdk
   ```

3. Install CDK dependencies
   ```bash
   npm install
   ```

4. Deploy to AWS
   ```bash
   npx cdk deploy
   ```

The application will be deployed to the domain specified in the CDK configuration (`cdk/bin/textclean.ts`).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.