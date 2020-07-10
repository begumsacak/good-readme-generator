


function generateMarkdown(data) {
    let licenseLink = ""

    if (data.license === "MIT") {
        licenseLink = `[https://img.shields.io/badge/license-${data.license}-blue.svg]`
    }
    else {
        licenseLink = `[https://choosealicense.com/licenses/${data.license}/]`
    }

    return `# ${data.title}
## Description ${data.description}
## Table of Contents
*[Usage](#Usage)
*[License](#License)
*[Contribution Requirements](#Contribution Requirements)
*[Questions](#Questions)
## Installation Requirements
    ${data.installation}
## Usage
    &grave ${data.usage} &grave;
## License
    ${data.license}
## Contribution Requirements
    ${data.contributions}
## Questions
    If you have questions, contact me at (Github)[https://github.com/${data.github}] or you can reach me by sending me an email[${data.email}]`;
}

module.exports = generateMarkdown;
