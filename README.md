# Fenrir Frontend Design Challenge

This project is my implementation of the frontend design challenge provided by Fenrir Security.

The goal was to recreate three UI screens of a B2B SaaS security platform using React while matching the design reference as closely as possible.

## Screens Implemented

1. Login / Signup Page  
A split layout page with a product information section on the left and a signup form on the right.

2. Dashboard  
Displays organization statistics, severity counters, and a table of scans including status, progress, vulnerabilities, and last scan time.

3. Active Scan Detail  
Shows scan progress, scan metadata, a live console with activity logs, and a finding log displaying discovered vulnerabilities.

## Technologies Used

- React (Vite)
- React Router
- Tailwind CSS
- Mock JSON data for scans

## Features

- Dark mode and light mode support
- Navigation between login, dashboard, and scan detail pages
- Interactive scan table
- Console log tab switching
- Responsive layout for desktop and mobile screens

## Running the Project

npm install
npm run dev

## Deployment
The project is deployed on Vercel.
Live URL: https://fenrir-frontend-challenge-one.vercel.app/


## Notes
All data used in the dashboard and scan detail pages is mock data stored locally in the project.
