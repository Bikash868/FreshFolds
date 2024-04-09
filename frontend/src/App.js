import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ApplicationRouter } from '@router';
// import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material/styles';

import { Routes } from '@router';

import store from '@store';
import theme from './theme';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
  } from 'chart.js';

function App() {
  return (
    <Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<ApplicationRouter routes={Routes} />
				{/* <ToastContainer /> */}
			</ThemeProvider>
		</Provider>
  );
}

export default App;

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
  );
