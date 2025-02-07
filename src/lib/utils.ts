import {Color} from "./models.ts";

export function cn(this: CSSModuleClasses, ...classes: string []) {

  if (!this) {
    throw new Error('Невозможно использовать функцию без привязки к модулю')
  }
  return classes.map(className => this[className]).join(' ').trim()
}



export function getColor(value: number, maxValue: number): Color {
  const percentage = (value / maxValue) * 100;

  if (percentage < 25) {
    return 'success'
  } else if (percentage >= 25 && percentage <= 70) {
    return 'primary'
  } else {
    return 'error'
  }
}