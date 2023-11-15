import { Item } from './item';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export const List: Item[] = [
  {
    id: 1,
    title: "Work Flow: Requires Location",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    status: "Incomplete",
    duedate: format(new Date("2019-01-16"), 'dd MMMM', { locale: enUS })
  },
  {
    id: 2,
    title: "Work Flow: Requires Location",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    status: "Low Risk",
    duedate: format(new Date("2019-01-16"), 'dd MMMM', { locale: enUS })
  },
  {
    id: 3,
    title: "Work Flow: Requires Location",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    status: "Incomplete",
    duedate: format(new Date("2019-01-16"), 'dd MMMM', { locale: enUS })
  },
  {
    id: 4,
    title: "Work Flow: Requires Location",
    from: "denisgordiyenya@gmail.com",
    to: "denisgordiyenya@gmail.com",
    status: "Needs Review",
    duedate: format(new Date("2019-01-16"), 'dd MMMM', { locale: enUS })
  }
];