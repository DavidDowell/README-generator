// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ("The MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } 
  else if ("Apache License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if ("GNU License") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if ("N/A") {
    return "N/A"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ("The MIT License") {
    return `[The MIT License]`
  }
  else if ("Apache License") {
    return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0.txt)`
  }
  else if ("GNU License") {
    return `[GNU License](gnu.org/licenses/gpl-3.0.en.html)`
  }
  else if ("N/A") {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "N/A") {
    return "";
  } else {
    return `
    ${renderLicenseLink(license)}
    `
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  const tableOfContents = (data) => {
    return `
    - [Installation](#installation)
    - [Usage](#uses)
    - [License](#license)
    - [Contributing](#contribute)
    - [Test](#tests)
    - [Questions](#contact)
    `;
  }
  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  ${tableOfContents}

  ## Installation
  ${answers.installation}

  ## Usage Information
  ${answers.uses}

  ## License 
  ${answers.license}

  ## Contribution
  The main contributor for this project: ${answers.name}
  Other contributors: ${answers.contribute}

  ## Tests
  ${answers.tests}

  ## Questions can be sent to the following contact:
  Key project contributor: ${answers.name}

  GitHub profile: ${answers.github}
`;
};

module.exports = generateMarkdown;