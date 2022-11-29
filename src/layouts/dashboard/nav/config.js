// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/home/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'My Children',
    path: '/home/mychildren',
    icon: icon('ic_user'),
  },
  {
    title: 'Calculate',
    path: '/home/percentile_calculator',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/home/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
