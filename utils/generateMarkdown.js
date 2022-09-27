// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "The MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } 
  else if (license == "Apache License") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if ( license == "GNU License") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } 
  else if (license == "N/A") {
    return `N/A`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ("The MIT License") {
    return `[The MIT License](https://www.mit.edu/~amini/LICENSE.md)`
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
  if (license == "N/A") {
    return "";
  } else {
    return `
${renderLicenseLink(license.answers)}
    `;
  }
}

// Generate Markdown file with an if statement that shows with out without a selected license.
const generateMarkdown = (answers) => {
  function tableOfContents(data) {
    if (data === "N/A") {
      return `
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
      `;
    } else {
      return `
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
      `;
    }
  }

  return `
  ## ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  ${tableOfContents(answers.license)}

  ## Installation
  ${answers.installation}

  ## Usage Information
  ${answers.uses}

  ## License 
  ${answers.license}

  ## Contribution
  The main contributor for this project: ${answers.name}

  ## Tests
  ${answers.tests}

  ## Questions can be sent to the following contact:
  Contact key project contributor: ${answers.contact}

  GitHub profile: ${answers.github}
`;
};

module.exports = generateMarkdown;