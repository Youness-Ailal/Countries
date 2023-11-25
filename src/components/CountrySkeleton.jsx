import Skeleton from "react-loading-skeleton";
import "../styles/CountrySkeleton.scss";

const CountrySkeleton = ({ cards }) => {
  return Array.from({ length: cards }).map((_, i) => {
    return (
      <div key={i} className="country__skeleton">
        <div className="image__skeleton">
          <Skeleton height={"100%"} width={"100%"}></Skeleton>
        </div>
        <div className="title__skeleton">
          <Skeleton height={15}></Skeleton>
        </div>
        <div className="text__skeleton">
          <Skeleton></Skeleton>
        </div>
        <div className="text__skeleton">
          <Skeleton></Skeleton>
        </div>
        <div className="text__skeleton">
          <Skeleton></Skeleton>
        </div>
      </div>
    );
  });
};

export default CountrySkeleton;
