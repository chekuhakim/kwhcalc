# Electricity Cost Calculator

This project is an electricity cost calculator web page that calculates the cost for customers based on their phone number and kWh usage. The calculator determines the rate depending on whether the phone number is in a JSON file or not.

## Features

- Users can input their phone number and kWh usage
- The calculator checks if the phone number is in a JSON file
- If the phone number is in the file, the rate is 0.6363 per kWh, otherwise the rate is 1 per kWh
- Displays the calculated charge for the customer and the cost by TNB instantly
- Dark background design with simple and straightforward text

## How to Use

1. Clone the repository or download the source code.
2. Open `index.html` in your web browser.

## Files

- `index.html`: The main HTML file that contains the structure of the calculator.
- `styles.css`: The CSS file that contains the styles for the web page, including the dark background and input box designs.
- `scripts.js`: The JavaScript file that contains the logic for calculating the costs and updating the displayed values.

## Customization

To modify the list of phone numbers with special rates, update the `phoneNumbers.json` file with the desired phone numbers.

## License

This project is open-source and available under the [MIT License](https://choosealicense.com/licenses/mit/). Feel free to use, modify, and distribute the code as needed.
