import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import NotFound from './pages/NotFound';
import Layout from './Components/Layout';

const Router = createBrowserRouter ([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/sobre",
				element: <Sobre />
			},
			{
				path: "/contato",
				element: <Contato />
			},
			{
				path: "/produto/:id",
				element: <Produto />
			},
			{
				path: "*",
				element: <NotFound />
			}
		]
	}
])

export default Router;