
function generateMarkdown(data) {
    let licenseLink = ""

    if (data.license === "MIT") {
        licenseLink = `https://img.shields.io/badge/license-${data.license}-blue.svg` 
    }
    else {
        licenseLink = `https://choosealicense.com/licenses/${data.license}/`
    }

    return `# ${data.title}
## Description ${data.description}
## Table of Contents
1.[Usage](#Usage)

2.[License](#License)

3.[Contribution](#Contribution)

4.[Questions](#Questions)
## Installation Requirements
    ${data.installation}
## Usage
    &grave ${data.usage} &grave; 
## License
[![License](${licenseLink})](https://shields.io/)
    
## Contribution 
    ${data.contributions}
## Questions
    If you have questions, contact me at (Github)[https://github.com/${data.github}] or you can reach me by sending me an email[${data.email}]`;
}

module.exports = generateMarkdown;
