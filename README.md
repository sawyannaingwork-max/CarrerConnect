# Carrer Connect
  It helps users to find list of jobs posted on many platoform just in one place.

  [Live Preview Here] (https://carrer-connect-three.vercel.app/)

# Why I built this project
  As I was looking for job, I have to use different platform like linkedin, jobdb and so on. So I think it will be cool if there is a product that I can search job listing posted on all platform.

## Tech Stack
1. React
2. TypeScript
3. Tailwind
4. React Router
5. GSAP
6. React Query

## Features

### Home Page
  It is where user can search job listing. User can input 4 things.
  1. Job Title
  2. Country
  3. Requirements (optional)
  4. Date

  It will show 10 matching jobs for user search. User can save those job to view it later or remove it from saved.
  Clicking on each job will take user to job Detail page.

### Job Detail Page
  This shows the detail of a specific job.
  1. Employer Info
  2. Job Title
  3. Job Description
  4. Job Qualification
  5. Job Location
  6. Apply Link 

### Job Salary Page
  This page allows user to search salary of a job at a specific location. User can input 3 thinngs.
  1. Job Title
  2. Location
  3. Experience(optional default will be ALL)
  This will show 
  1. Job Title
  2. Salary Currency
  3. Minimum Salary
  4. Maximum Salary
  5. Minimum Additional Pay
  6. Maximum Additional Pay
  7. Salary Period

### Saved Page
  This Page show list of job that user had saved.


## Things I learnt from this project 

1. How powerful the react query is.
2. How to add dark and light theme.
3. When to use state and when to use context.
4. How I should start a project. 

## Harderst Problem I ever faced in this project.
  My components are re mounted every time I switch tab and I don't know why. So I debug and ask AI why it is happening, eventually I found out that useQuery refetch every time window refocus. And I am using that inside my countryProvider that wrap the entier app. So every time window refocus, the components are remounted again. 
  The fix is to add refetchOnWindowFocus : false.

### Overall Reflection on myself for this project.

  I don't feel proud or great for this project as I realized while writting the project, it can be much better from naming variable to architecutring. I don't really think anything when starting this project so it becomes a mess quickly. I was writing and deleteing and chaging constantly. So from now on I should do the follwing thing before starting a project.

  1. Designing (So I can think of how to build the product efficiently from custom hook to reusable component.)
  2. Testing API multiple times (So i can now which to expect from the response)
  3. Deciding where to use context and state.