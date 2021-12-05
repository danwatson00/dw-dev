import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';

const theme = createTheme({
  status: {
    danger: '#ff0505',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout />
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
