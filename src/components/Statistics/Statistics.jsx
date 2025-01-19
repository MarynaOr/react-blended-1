// import { FaRegThumbsUp } from 'react-icons/fa';
// import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
// import { GiTreeDoor } from 'react-icons/gi';
// import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';
import arr from '/src/data/stats.json'
const Statistics = () => {
  return (
    <div>
      <h3 className={style.title}> {arr.title} </h3>
    </div>
  )
};

export default Statistics;
