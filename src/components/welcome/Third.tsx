import s from './welcome.module.scss'
export const Third = () => {
  return (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#chart"></use>
      </svg>
      <h2>
        直到
        <br />
        和每个人的生活息息相关
      </h2>
    </div>
  )
}

Third.displayName = 'Third'
