import s from './welcome.module.scss'
import { FunctionalComponent } from 'vue'

export const Second: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#clock"></use>
      </svg>
      <h2>
      这不过是一串数字，一杯奶茶
        <br />
      一个苹果的价格，一套房子的贷款
      </h2>
    </div>
  )
}

Second.displayName = 'Second'
