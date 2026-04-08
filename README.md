# CI/CD Workshop Starter Repo

This repo is intentionally missing the GitHub Actions pipeline.
Students should create that themselves.

## What is included
- A tiny working web app
- A testable Node module
- A test that currently passes
- A simple build check that currently passes
- A commented-out breaking change for the workshop

## Setup
```bash
npm install
npm test
npm run build
```

## Run locally in browser
```bash
npm start
```
Then open the local URL shown in the terminal.

## Workshop task
You should create a GitHub Actions workflow that does at least:
1. install dependencies
2. run tests
3. run build

## Breaking change
Open `sum.js`.
Later in the workshop, replace the working function with the broken one in the comment block.
That should break the test stage in CI.

