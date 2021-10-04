import React, { useEffect } from "react";
import { forceCheck } from 'react-lazyload';

import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import Scroll from "../../components/scroll/index";
import { Content } from "./style.js";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";
import Loading from "../../components/loading";

const Recommend = (props) => {
  const { bannerList, recommendList } = props;
  const { getBannerDataDispatch, getRecommendDataDispatch, enterLoading } = props;
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  useEffect(() => {
    //immutable 数据结构中长度属性 size
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!recommendList.size) {
      getRecommendDataDispatch();
    }
    //eslint-disable-next-line
  }, []);
  return (
    <Content>
      {enterLoading && <Loading />}
      <Scroll onScroll={forceCheck} className="list">
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>

    </Content>
  );
};
const mapStateToProps = (state) => ({
  bannerList: state.getIn(["recommend", "bannerList"]),
  recommendList: state.getIn(["recommend", "recommendList"]),
  enterLoading: state.getIn(['recommend', 'enterLoading'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }

  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
