import { Link, useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import SingleFeature from './Singlefeature';

const FeatureFood = () => {
  const featurefood = useLoaderData();

  featurefood.sort((a, b) => {
    if (b.foodQuantity === a.foodQuantity) {
      return a.foodName.localeCompare(b.foodName);
    }
    return b.foodQuantity - a.foodQuantity;
  });

  const topSixFood = featurefood.slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties when the component enters
      transition={{ duration: 0.5 }} // Animation duration
      className="lg:grid grid-cols-2 gap-5"
    >
      {topSixFood.map((singlefood) => (
        <SingleFeature key={singlefood.foodName} singlefood={singlefood} />
      ))}
      <div className='mb-5 lg:ml-[600px]'>
        <Link to={'/availablefoods'}>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="btn btn-neutral btn-active"
          >
            Show All
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FeatureFood;
