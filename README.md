Chart Plot v0.1
===============

## Foreword

  This code implements a tentative solution to Intelie's Graph Plot
  Challenge. It can be found in the link below.

    * https://github.com/intelie/challenge-chart-plot

## Download

  This code is available in the following links:

    * https://github.com/JulioKhichfy/chart-plot
    * git@github.com:JulioKhichfy/chart-plot.git

## Installation

  * XXX check out the notebook you wrote the steps to install it

## Development: Rationale

  This sections aims to state and explain some of the decisions made
  during the development of this version of the software as well as
  their related problems and confrontations.

### Input Safety

  The proposed input format matches a valid JSON thus the most
  tempting and straightforward approach would be to "decode" simply by
  calling `eval()` -- which unfortunately is the same as allowing JSON
  code to be injected into our software.

  XXX: either admit laziness or propose a solution for this

### Data Structures

  As Linus once said "good programmers worry about data structures and
  their relations" -- no surprise that was exactly the crux of the
  design: to find a data structure good enough that allow us to answer
  questions promptly and efficiently.

  First trial was to figure out what was the "questions" which answers
  would be meaninful to a correct and feasible design. The design
  emerged from simple statements and assertive inquiries.

  XXX: describe the steps, which questions, which answers, etc.
