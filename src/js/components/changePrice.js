export const changePrice = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');

  const priceList = {
    starter: {
      default: '100$',
      annual: '80$',
    },
    popular: {
      default: '1400$',
      annual: '1120$',
    },
    enterprise: {
      default: '2100$',
      annual: '1680$',
    },
  };

  const setNewPrice = (type) => {
    starterPrice.textContent = priceList.starter[type];
    popularPrice.textContent = priceList.popular[type];
    enterprisePrice.textContent = priceList.enterprise[type];
  };

  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      setNewPrice('annual');
    } else {
      setNewPrice('default');
    }
  });
};
