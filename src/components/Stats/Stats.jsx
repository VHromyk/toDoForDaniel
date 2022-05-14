import style from './Stats.module.css'

const Stats = () => {
  return (
      <div className={style.wrapper}>
          <ul className={style.list_wrapper}>
              <li className={style.stats_element}>
                  <span>All todos:</span>
                  <span>0</span>
              </li>
              <li className={style.stats_element}>
                  <span>Resolved todos:</span>
                  <span>0</span>
              </li>
          </ul>
          <button type="submit" className={style.main_btn}>
              Add todo
          </button>
      </div>
  );
}

export default Stats;