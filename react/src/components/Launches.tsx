import React, { FunctionComponent } from "react";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
interface LAUNCH {
  flight_number: number;
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean;
}
interface LAUNCHES {
  launches: LAUNCH[];
}
const Launches: FunctionComponent = () => {
  const { loading, error, data } = useQuery<LAUNCHES>(LAUNCHES_QUERY);
  if (error) console.log(error);
  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {loading && <h4>Loading...</h4>}
      {data?.launches &&
        data?.launches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
    </div>
  );
};

export default Launches;
