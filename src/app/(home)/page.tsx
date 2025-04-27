import data from '@/lib/data';
import HomeCarousel from '../../components/shared/home/home-carousel';

const Page = async () => {
  return <HomeCarousel items={data.carousels} />;
};

export default Page;
