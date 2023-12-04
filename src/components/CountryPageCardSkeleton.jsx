/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";

function CountryPageCard() {
  return (
    <div className="skeleton2">
      <div className="skeleton2__img">
        <Skeleton height={"100%"} width={"100%"}></Skeleton>
      </div>
      <div className="skeleton2__info">
        <div className="skeleton2__title">
          <Skeleton height={"100%"} width={"100%"}></Skeleton>
        </div>
        <ul>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
          <div className="skeleton2__data">
            <Skeleton height={"100%"} width={"100%"}></Skeleton>
          </div>
        </ul>

        <div className="skeleton2__borders">
          <Skeleton height={"100%"} width={"100%"}></Skeleton>
        </div>
      </div>
    </div>
  );
}

export default CountryPageCard;
