      // Your React component code
      const { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } = Recharts;

      // Function to fetch and parse CSV data
      const fetchCSVData = async () => {
        const response = await fetch('sac_sma_nse.csv');
        const text = await response.text();
        const parsedData = d3.csvParse(text);
        return parsedData;
      };

      // Function to generate CDF data from raw data (replace this with your actual CDF logic)
      const generateCDFData = (rawData) => {
        // Implement your CDF logic here
        return rawData;  // Placeholder, return processed CDF data
      };

      const NSECDFPlot = () => {
        const [data, setData] = React.useState([]);
        
        React.useEffect(() => {
          fetchCSVData().then(rawData => {
            const cdfData = generateCDFData(rawData);
            setData(cdfData);
          });
        }, []);
        
        return (
          <LineChart width={500} height={300} data={data} margin={{top: 20, right: 30, left: 20, bottom: 20}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'NSE', position: 'insideBottom', offset: -5 }} />
            <YAxis label={{ value: 'CDF', angle: -90, position: 'insideLeft', offset: 10 }} />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        );
      };

      // Render the React component into the div
      ReactDOM.render(<NSECDFPlot />, document.getElementById('nse-cdf-plot'));
