import React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const ToDo = ({ item }) => {
  const { task, done, id } = item;
  const dispatch = useDispatch(setCheck);
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4" key={id}>
        <div className="card m-1">
          <div className="card-body">
            <div className="d-flex">
              <input type="checkbox" onChange={handleCheck} />
              <h4
                className={
                  done
                    ? "text-dark text-decoration-line-through mx-2"
                    : "text-dark mx-2"
                }
              >
                {task}
              </h4>
            </div>
          </div>
          <div className="card-footer bg-danger">
            <p className="mt-1 text-light">Code : {id}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
