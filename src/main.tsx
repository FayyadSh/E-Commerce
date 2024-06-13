import ReactDOM from 'react-dom/client'
// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
// Imports
import AppRouter from '@routes/AppRouter'


const root = document.getElementById('root')!
ReactDOM.createRoot(root).render(<AppRouter />)
