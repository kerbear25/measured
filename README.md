# Measured

## Overview

The Measured is a simple three-step quiz that collects a user's weight, birthday, and email address. It then submits the data to an API and displays a confirmation page.

## Features

- Three-step quiz:
  1. Weight input
  2. Birthday input
  3. Email input
- Basic form validation for each step
- Submission of quiz data to a backend API
- Display of confirmation page with submitted data

## Technologies Used

- Frontend:

  - React
  - Next.js
  - Tailwind CSS

- Backend:
  - Next.js API routes

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kerbear25/measured.git
   ```

2. Navigate to the project directory:

   ```bash
   cd measured
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your web browser and go to [http://localhost:3000/quiz](http://localhost:3000/quiz) to view the application.

### The Backend API

1. The API endpoint will be available at [http://localhost:3000/api/quiz](http://localhost:3000/api/quiz) for submitting quiz data.

## Usage

1. Navigate through the quiz steps by filling in the required information.
2. Submit the quiz data on the final step.
3. View the confirmation page with the submitted data.
