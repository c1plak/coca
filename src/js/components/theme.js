export const useTheme = () => {
  const switcher = document.querySelector('[data-theme-switcher]');
  const theme = document.querySelector('[data-theme]');
  let themeMode = theme.dataset;
  themeMode.theme = localStorage.getItem('theme') || 'light';

  if (themeMode.theme === 'dark') {
    switcher.checked = true;
  }

  switcher.addEventListener('click', () => {
    if (themeMode.theme === 'light') {
      themeMode.theme = 'dark';
      localStorage.setItem('theme', 'dark');
      switcher.checked = true;
    } else {
      themeMode.theme = 'light';
      localStorage.setItem('theme', 'light');
      switcher.checked = false;
    }
  });
};
