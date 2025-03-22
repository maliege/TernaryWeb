# Handsontable Ternary Plot

This project is a web-based application that integrates Handsontable and Plotly.js to create interactive ternary plots. It allows users to visualize and manipulate data in a tabular format and see the corresponding ternary plot in real-time.

## Features

- Interactive data grid powered by Handsontable.
- Real-time ternary plot visualization using Plotly.js.
- Customizable axis labels and scales.
- Options to configure polygon types and edges.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd TernaryWeb
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server

To start the development server, run:
```bash
npm run dev
```

The application will be available at `http://localhost:3000` (or the port specified by Vite).

### Build for Production

To build the project for production, run:
```bash
npm run build
```

The output will be in the `dist` directory.

### Preview Production Build

To preview the production build, run:
```bash
npm run preview
```

## Project Structure

- `index.html`: The main HTML file.
- `src/main.js`: The main JavaScript file that initializes Handsontable and Plotly.js.
- `src/styles.css`: The CSS file for styling the application.
- `package.json`: Contains project metadata and dependencies.

## Dependencies

- [Handsontable](https://handsontable.com/): A JavaScript data grid component.
- [Plotly.js](https://plotly.com/javascript/): A JavaScript library for creating interactive charts.
- [Vite](https://vitejs.dev/): A fast build tool for modern web projects.

## License

This project is licensed under the MIT License.