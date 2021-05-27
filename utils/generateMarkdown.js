//Renders License Badge
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``;
}

//Render License Link
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

      Licensed under ther ${license} license`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
${renderLicenseBadge(data.license)}

## GitHub Username URL
[${data.github}](https://github.com/${data.github}/)

${renderLicenseLink(data.license)}

## Description 
${data.description}

## Installation Dependencies
${data.dependencies}

## Usage
${data.usage}

## Tests
${data.test}

## Contributors
${data.contributors}

##Contact Me

Email: ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
