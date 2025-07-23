from flask import Flask, jsonify, request
import requests
from flask_cors import CORS  # import CORS

app = Flask(__name__)
CORS(app)  # enable CORS for all routes

API_KEY = '118070cc8815413:j8dwdh6u9ftgk0f'

def get_gdp(country):
    url = f'https://api.tradingeconomics.com/country/{country}?c={API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        # Find GDP data in response
        for item in data:
            if 'gdp' in item.get('Category', '').lower():
                return item.get('LatestValue')
    return None

@app.route('/gdp')
def gdp():
    countries = request.args.get('countries')
    if not countries:
        return jsonify({'error': 'Please provide countries parameter'}), 400
    
    country_list = countries.split(',')
    results = {}
    for country in country_list:
        gdp_value = get_gdp(country.strip())
        results[country.strip()] = gdp_value
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
