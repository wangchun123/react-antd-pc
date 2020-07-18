import React, { useEffect } from 'react';
import { Input } from '@alifd/next';
import './index.scss';

export default () => {
  const debouce = (fn, wait = 100, immed = true) => {
    //是函数在特定的时间内不被再调用后执行
    var timerId = null;
    var flag = true;
    if (immed) {
      return function () {
        clearTimeout(timerId);
        if (flag) {
          fn.apply(this, arguments);
          flag = false;
        }
        timerId = setTimeout(() => {
          flag = true;
        }, wait);
      };
    }
    return function () {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn.apply(this, arguments);
      }, wait);
    };
  };

  const throttle = (fn, wait = 100, immed = true) => {
    // 是确保函数特定的时间内至多执行一次
    var timer = null;
    var flag = true;
    if (immed) {
      return function () {
        if (flag) {
          fn.apply(this, arguments);
          flag = false;
          timer = setTimeout(() => {
            flag = true;
          }, wait);
        }
      };
    }
    return function () {
      if (flag) {
        flag = false;
        timer = setTimeout(() => {
          fn.apply(this, arguments);
          flag = true;
        }, wait);
      }
    };
  };

  const fn = (val) => {
    console.log('hi', val);
  };

  const debouceFn = throttle(fn, 1000, true);

  const forbidScroll = () => {
    document.body.style.overflow = 'visible';
  };

  const getQueryParam = () => {
    const query = window.location.hash;
    const obj = {};
    if (query.indexOf('?') != -1) {
      const arr = query.split('?')[1];
      if (arr.indexOf('&') != -1) {
        const newArray = arr.split('&');
        newArray.forEach((item) => {
          obj[item.split('=')[0]] = item.split('=')[1];
        });
      } else {
        const newArray = arr.split('=');
        obj[newArray[0]] = newArray[1];
      }
    }
    return obj;
  };

  useEffect(() => {
    forbidScroll();
    console.log('结果:', getQueryParam());
  }, []);

  return (
    <div>
      <div className="one">
        <div className="avatar">
          <img
            src="https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="two">
        <Input onChange={(val) => debouceFn(val)}></Input>
      </div>

      <div className="three"></div>
    </div>
  );
};
