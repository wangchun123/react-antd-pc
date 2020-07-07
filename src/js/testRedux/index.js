import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/actions';

export default () => {
  const data = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();

  console.log('data', data);

  const handelClick = () => {
    dispatch({
      type: actions.GET_VISIBILITY_FILTER,
      payload: { visibilityFilter: 'qweqwe' },
    });
  };

  return (
    <div>
      <Button onClick={() => handelClick()} type="primary">
        action
      </Button>
    </div>
  );
};
