let calculator = {
  // ваш код
  read(a, b) {
    this.key1 = a;
    this.key2 = b;
  },
  sum() {
    return this.key1 + this.key2;
  },
  mul() {
    return this.key1 * this.key2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
