<script></script>

<template>
  <div class="wrapper">
    <div class="calculator">
      <div class="calculator__result">0</div>
      <div class="calculator-buttons">
        <button class="calculator__buttons"></button>
        <button class="calculator__buttons"></button>
        <button class="calculator__buttons">C</button>
        <button class="calculator__buttons">del</button>
        <button class="calculator__buttons">7</button>
        <button class="calculator__buttons">8</button>
        <button class="calculator__buttons">9</button>
        <button class="calculator__buttons">/</button>
        <button class="calculator__buttons">4</button>
        <button class="calculator__buttons">5</button>
        <button class="calculator__buttons">6</button>
        <button class="calculator__buttons">-</button>
        <button class="calculator__buttons">1</button>
        <button class="calculator__buttons">2</button>
        <button class="calculator__buttons">3</button>
        <button class="calculator__buttons">+</button>
        <button class="calculator__buttons">-/+</button>
        <button class="calculator__buttons">0</button>
        <button class="calculator__buttons">,</button>
        <button class="calculator__buttons">=</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.calculator {
  width: 320px;
  margin: auto;

  &__buttons {
    width: 80px;
    height: 80px;
    font-size: 30px;
    transition: 0.5s;
  }

  &__buttons:hover {
    font-size: 40px;
  }

  &__result {
    text-align: right;
    line-height: 60px;
    padding: 20px;
    width: 100%;
    height: 100px;
    background-color: rgb(220, 220, 220);
    font-size: 30px;
  }
}

.wrapper {
  display: flex;
  height: 100%;
}
</style>
