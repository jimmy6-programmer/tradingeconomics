# Trading Economics GDP Comparison App

## Overview
This is a small web app that compares GDP growth rates between countries using the Trading Economics API.  
It allows users to select countries and view their GDP data visualized on a chart, alongside a table of values.

## Features
- Fetches GDP data for countries available on the free Trading Economics developer plan (Sweden, Mexico, New Zealand, Thailand).
- Displays an interactive bar chart using Chart.js.
- Shows a detailed data table.
- Loading spinner implemented with Lottie animations.
- Responsive design with clean UI.

## Tech Stack
- Backend: Python Flask with `flask-cors` for CORS handling
- Frontend: HTML, CSS, JavaScript, Chart.js, Lottie
- API: Trading Economics Developer API

## Setup Instructions

1. **Clone the forked repo:**
   ```bash
   git clone https://github.com/yourusername/tradingeconomics.git
   cd tradingeconomics

2. Create and activate a virtual environment (recommended):

    bash
    Copy
    Edit
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Install dependencies:

    bash
    Copy
    Edit
    pip install -r requirements.txt

4. Add your Trading Economics API key in app.py:

    python
    Copy
    Edit
    API_KEY = '118070cc8815413:j8dwdh6u9ftgk0f'


5. Run the Flask backend:

    bash
    Copy
    Edit
    python app.py        

6. Open index.html in your browser (you can use Live Server or open directly).


    Usage

        Select two countries from the dropdown menus.

        Click "Compare" to fetch and display their GDP data.

        View the interactive chart and table below.

    Notes

        Free Trading Economics accounts only support a limited set of countries.

        The backend proxies requests to avoid exposing the API key publicly.

        CORS is handled with flask-cors.

    Contribution

       Feel free to fork the repo and submit pull requests.

    Contact

       GATERA Jimmy — jimmygatera60@gmail.com
       GitHub — https://github.com/jimmy6-programmer/   

