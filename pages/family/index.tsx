import CalendarInstance from '@/utils/date/date.utils';
import styles from './index.module.scss';
import FamilyDiary from '@/components/family/diary/family-diary';
import FamilyGrowth from '@/components/family/growth/family-growth';
import FamilySchedule from '@/components/family/schedule/family-schedule';
import { getCookie } from 'cookies-next';

export default function Family() {
  console.log(getCookie('AccessToken'));
  return (
    <section className={styles['family-section']}>
      <div className={styles.today}>{CalendarInstance.getToday()}</div>
      <FamilyDiary />
      <FamilyGrowth />
      <FamilySchedule />
    </section>
  );
}
