
import { Link, useLoaderData } from 'react-router-dom';
import SingleFeature from './Singlefeature';

const FeatureFood = () => {
    const featurefood = useLoaderData()
    
  featurefood.sort((a, b) => {
    if (b.foodQuantity === a.foodQuantity) {
      return a.foodName.localeCompare(b.foodName);
    }
    return b.foodQuantity - a.foodQuantity;
  
  });
  const topSixFood = featurefood.slice(0, 6);
    return (
        <div className="lg:grid grid-cols-2 gap-5">
        {topSixFood.map((singlefood) => (
          <SingleFeature key={singlefood.foodName} singlefood={singlefood} />
        ))}
        <div className=' mb-5  lg:ml-[600px]'><Link to={'/availablefoods'}><button className=" btn btn-neutral btn-active">Show All</button></Link></div>
      </div>
    );
};

export default FeatureFood;