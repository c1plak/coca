import '../scss/main.scss';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
