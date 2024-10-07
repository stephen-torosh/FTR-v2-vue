<script setup>
import { ref } from 'vue'
import { plus, minus, multiply, divide, doTheLastAction } from '@/helper/calculator.js'

let calculatorSTR = ref('')

let prevResult = 0

let lastAction = ''

function buttonclicked(key) {
  console.log(Number(key))

  if (Number(key) >= 0 || key === '.') {
    calculatorSTR.value = lastAction === '=' ? key : calculatorSTR.value + key
    lastAction = lastAction === '=' ? 'number' : lastAction
  } else if (key == 'del') {
    calculatorSTR.value = calculatorSTR.value.slice(0, -1)
    lastAction = lastAction === '=' ? 'del' : lastAction
  } else if (key == 'C') {
    calculatorSTR.value = '0'
    lastAction = '='
  } else if (key === '+') {
    prevResult = plus(prevResult, Number(calculatorSTR.value))
    lastAction = '+'
    calculatorSTR.value = ''
    console.log(prevResult)
  } else if (key === '-') {
    prevResult = prevResult
      ? minus(prevResult, Number(calculatorSTR.value))
      : (prevResult = Number(calculatorSTR.value))
    lastAction = '-'
    calculatorSTR.value = ''
    console.log(prevResult)
  } else if (key === '*') {
    prevResult = prevResult
      ? multiply(prevResult, Number(calculatorSTR.value))
      : (prevResult = Number(calculatorSTR.value))
    lastAction = '*'
    calculatorSTR.value = ''
    console.log(prevResult)
  } else if (key === '/') {
    prevResult = prevResult
      ? divide(prevResult, Number(calculatorSTR.value))
      : (prevResult = Number(calculatorSTR.value))
    lastAction = '/'
    calculatorSTR.value = ''
    console.log(prevResult)
  } else if (key === '=') {
    calculatorSTR.value = doTheLastAction(lastAction, prevResult, Number(calculatorSTR.value))
    console.log(calculatorSTR.value)
    prevResult = 0
    lastAction = '='
    console.log(prevResult)
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="calculator">
      <div class="calculator__result">{{ calculatorSTR }}</div>
      <div class="calculator-buttons">
        <button @click="buttonclicked('C')" class="calculator__buttons">C</button>
        <button @click="buttonclicked('del')" class="calculator__buttons">del</button>
        <button class="calculator__buttons"></button>
        <button @click="buttonclicked('*')" class="calculator__buttons">*</button>
        <button @click="buttonclicked('7')" class="calculator__buttons">7</button>
        <button @click="buttonclicked('8')" class="calculator__buttons">8</button>
        <button @click="buttonclicked('9')" class="calculator__buttons">9</button>
        <button @click="buttonclicked('/')" class="calculator__buttons">/</button>
        <button @click="buttonclicked('4')" class="calculator__buttons">4</button>
        <button @click="buttonclicked('5')" class="calculator__buttons">5</button>
        <button @click="buttonclicked('6')" class="calculator__buttons">6</button>
        <button @click="buttonclicked('-')" class="calculator__buttons">-</button>
        <button @click="buttonclicked('1')" class="calculator__buttons">1</button>
        <button @click="buttonclicked('2')" class="calculator__buttons">2</button>
        <button @click="buttonclicked('3')" class="calculator__buttons">3</button>
        <button @click="buttonclicked('+')" class="calculator__buttons">+</button>
        <button @click="buttonclicked('-/+')" class="calculator__buttons">-/+</button>
        <button @click="buttonclicked('0')" class="calculator__buttons">0</button>
        <button @click="buttonclicked('.')" class="calculator__buttons">.</button>
        <button @click="buttonclicked('=')" class="calculator__buttons">=</button>
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
