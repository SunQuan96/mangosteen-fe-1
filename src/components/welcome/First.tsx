import s from './welcome.module.scss'
import { FunctionalComponent } from 'vue'
export const First: FunctionalComponent = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#pig"></use>
      </svg>
      <h2>
        最初
        <br />
        没人在意这些消费
      </h2>
    </div>
  )
}

First.displayName = 'First'
