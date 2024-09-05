#  format-date-Month-Year

![npm version](https://img.shields.io/npm/v/format-date-mm-yyyy.svg) ![npm downloads](https://img.shields.io/npm/dt/format-date-mm-yyyy.svg) ![license](https://img.shields.io/npm/l/format-date-mm-yyyy.svg)


<table>
  <tr>
    <td>
      <img width="118px" alt="Sass logo" src="https://github.com/user-attachments/assets/5d93407f-6e0a-4608-8059-b42cfb243ce8" />
    </td>
  
  </tr>
</table>


A simple Node.js utility to convert a date string from UTC to the format `Month-YYYY`. This package checks for valid dates and ensures the date falls within a reasonable range (between the years 1000 and 9999).

## 🌟 Features

- **Date Conversion**: Converts a UTC date string to the format `MM-YYYY` (e.g., `"July 2024"`).
- **Validation**: Returns `"Invalid Date"` if the input is not a valid date.
- **Range Check**: Returns `"Out of Range"` if the date falls outside the years 1000 to 9999.

## 📦 Installation

You can install the package using npm:  

```cmd
npm install utc-to-month-yyyy
```



## 🚀 Usage
To use this package, simply require it in your Node.js project and pass the UTC date string as an argument:

```cmd
 const formatDateMMYYYY = require('format-date-mm-yyyy');
 
 const formattedDate = formatDateMMYYYY('2024-07-21T15:00:00Z');
 
 console.log(formattedDate); // Outputs: "July 2024"
 ```
 
Input Parameters :

inputDateString (required): The UTC date string to be formatted. Example: "2024-07-21T15:00:00Z".

outputFormat (optional):

The format of the output string. Currently, only MM-YYYY format is supported.

Return Values :

Formatted Date: 
Returns a string in the format MM-YYYY (e.g., "July 2024").

"Invalid Date": Returned if the input date string is not valid.

"Out of Range": Returned if the date falls outside the range of years 1000 to 9999.

## 📝 Examples

Valid Date Input:

```cmd
const formatDateMMYYYY = require('format-date-mm-yyyy');

const date1 = formatDateMMYYYY('2023-11-15T00:00:00Z');
console.log(date1); // Outputs: "November 2023"
```

Invalid Date Input:
const formatDateMMYYYY = require('format-date-mm-yyyy');

```cmd
const date2 = formatDateMMYYYY('invalid-date-string');
console.log(date2); // Outputs: "Invalid Date"
```

Out of Range Date Input:
```cmd
const formatDateMMYYYY = require('format-date-mm-yyyy');

const date3 = formatDateMMYYYY('0500-01-01T00:00:00Z');
console.log(date3); // Outputs: "Out of Range"
```

## 🧪 Testing
You can run a quick test using Node.js by creating a file, say test.js, and adding the following code:

```cmd
const formatDateMMYYYY = require('./index');

console.log(formatDateMMYYYY('2024-07-21T15:00:00Z')); // Outputs: "July 2024"
console.log(formatDateMMYYYY('invalid-date-string'));  // Outputs: "Invalid Date"
console.log(formatDateMMYYYY('0500-01-01T00:00:00Z')); // Outputs: "Out of Range"

```
Run the file using:
node test.js

## 📄 License
This package is licensed under the MIT License.

## 🤝 Contribution
Feel free to fork the repository and submit pull requests for any improvements or additional features.

## 👤 Author
Suhas Marabasannavar - (https://github.com/Suhas2299)
