import './style/index.scss';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

export const root = document.querySelector('#root');
Header(root);
Main(root);
