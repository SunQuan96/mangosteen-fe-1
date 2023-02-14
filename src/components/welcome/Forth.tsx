import s from './welcome.module.scss'
export const Forth = () => (
  <div class={s.card}>
    <svg>
      <use xlinkHref="#cloud"></use>
    </svg>
    <h2>
      它已经成为人们生活的一部分
      <br />
      550W量子计帐
    </h2>
  </div>
)

Forth.displayName = 'Forth'
