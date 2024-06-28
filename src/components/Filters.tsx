'use client'
import {useState} from "react";

type Props = {};

const Filters = (props: Props) => {
  const [remoteToggle,setRemoteToggle] = useState<boolean>(false)
  const setRemoteHandler = () => {
    setRemoteToggle(prevToggle => !prevToggle)
  }
  return (
    <section className="flex justify-center">
      <div className="">
        <button onClick={setRemoteHandler}className={`btn btn-ghost ${remoteToggle && "btn-active"}`}>Remote</button>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            Employment Type
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Any</a>
            </li>
            <li>
              <a>Part Time</a>
            </li>
            <li>
              <a>Full Time</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
          Employees
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>1 - 50</a>
            </li>
            <li>
              <a>50 - 100</a>
            </li>
            <li>
              <a>100 - 200</a>
            </li>
            <li>
              <a>more than 200</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost m-1">
            Date Posted
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Any time</a>
            </li>
            <li>
              <a>Last Week</a>
            </li>
            <li>
              <a>Last Month</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Filters;
