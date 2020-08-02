import React, { FunctionComponent } from "react";
import Momemt from "react-moment";
import { Link } from "react-router-dom";

type Launch = {
  flight_number: number;
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean;
};
type Props = {
  key: number;
  launch: Launch;
};

const LaunchItem: FunctionComponent<Props> = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span className={launch_success ? "text-success" : "text-danger"}>
              {mission_name}
            </span>
          </h4>
          <p>
            Date: <Momemt format="YYYY-MM-DD HH:mm">{launch_date_local}</Momemt>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
