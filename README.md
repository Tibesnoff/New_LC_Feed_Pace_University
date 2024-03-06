# New Pace University Learning Commons Main Feed

This is a React project aimed at displaying the main feed of the Pace University Learning Commons.

## Table of Contents
- [Non-Technical Documentation](#non-technical-documentation)
    - [Deployment](#deployment)
    - [Features](#features)
    - [Contributors](#contributors)
- [Technical Documentation](#technical-documentation)
    - [Getting Started](#getting-started)
    - [Yarn Commands](#yarn-commands)
    - [Git Commands](#git-commands)
    - [Tailwind CSS](#tailwind-css)
    - [.env File](#env-file)
    - [Global State](#global-state)
    - [ESLint](#eslint)

---

## Non-Technical Documentation

### Deployment
The application is deployed on the AWS cloud using AWS Amplify. The cost for this Cloud Compute tool is free, which is why we opted for it.

### Features
- **[Home Page](https://main.d3j94bg6n7pdek.amplifyapp.com/):**
  - Welcome title and images representing each Pace University Campus
  - Clickable images redirect users to respective main feeds
- **[PLV LC Home](https://main.d3j94bg6n7pdek.amplifyapp.com/plv):**
  - Welcoming title
  - Weather banner with current and weekly forecast for PLV
  - Time and Date
  - Live stream video
  - Stock ticker
- **[NYC LC Home](https://main.d3j94bg6n7pdek.amplifyapp.com/nyc):**
  - Similar to PLV LC Home, with differing weather coordinates
  - Both pages are distinct and can be independently updated to suit each LC's needs.

### Contributors
Currently, the project is being developed by PLV CS tutors. If anyone is interested in contributing, please contact any of the PLV CS tutors or the PLV tutoring center.

---

## Technical Documentation

### Getting Started
1. Install Visual Studio Code or any other preferred IDE.
2. Set up Git and create a GitHub profile.
3. Install Node.js.
4. Install Yarn using npm.
5. Install the ESLint extension in VS Code.
6. Clone the repository from [here](https://github.com/Tibesnoff/New_LC_Feed_Pace_University.git).
7. Navigate to the WebApp folder for the application files.
8. Run `yarn setup`.
9. Before contributing, ensure you've created a new branch using `git checkout -b <"branch_name">`.
10. After making changes, commit all Git changes and create a pull request into the main branch on GitHub.
11. Request another developer to review changes and merge them into main.
12. AWS Amplify automatically deploys a new version upon merging a PR into main.

### Yarn Commands

| Command         | Description           |
| --------------- | --------------------- |
| `yarn Start`    | Starts the project    |
| `yarn Install`  | Installs node dependencies |

### Git Commands

| Command                             | Description                            |
| ----------------------------------- | -------------------------------------- |
| `git branch`                        | View all branches                     |
| `git checkout <branch_name>`        | Switch to `<branch_name>` branch       |
| `git pull`                          | Pull data from remote branch           |
| `git push`                          | Push data to remote branch             |
| `git checkout -b <branch_name>`     | Create a new branch called `<branch_name>` |
| `git branch -D <branch_name>`       | Delete `<branch_name>` locally         |

### Tailwind CSS

- Tailwind CSS is utilized as a component and CSS library with React, eliminating the need for separate CSS stylesheets.
- To use Tailwind:
  - Utilize existing components or create new ones as needed.
  - Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation) for styling guidelines.
  - Create components in the stylized components folder.

### .env File

A `.env` file needs to be created locally, containing the following variables:

`REACT_APP_YOUTUBE_LINK={YouTube unique video id}`


In AWS Amplify, this is set as an environment variable that can be modified to update the live version YouTube video.

### Global State

Global state management is challenging in this web app due to component refreshes caused by the current ticker, leading to bugs in global state that are yet to be resolved.

### ESLint

ESLint is configured in this project to maintain clean and organized code. A dedicated `yarn` script is available to lint files, which is also integrated into the `yarn` startup command.

