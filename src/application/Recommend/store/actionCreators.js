import * as actionTypes from "./constants";
import { fromJS } from "immutable";
import { getBannerRequest, getRecommendListRequest } from "../../../api/request";

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  payload: fromJS(data),
});

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then((data) => {
        dispatch(changeBannerList(data.banners));
      })
      .catch(() => {
        console.log('轮播图数据传输错误');
      })
  };
};

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  payload: fromJS(data)
});


export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      dispatch(changeRecommendList(data.result));
      dispatch(changeEnterLoading(false))
    }).catch(() => {
      console.log("推荐歌单数据传输错误");
    });
  }
};

export const changeEnterLoading = (payload) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  payload,
})



