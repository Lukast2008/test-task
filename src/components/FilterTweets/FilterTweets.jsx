import { useDispatch, useSelector } from "react-redux";
import { filterTweetSelector } from "../../redux/userSelector";
import { filterTweet } from "../../redux/tweetSlice";
import styles from "./FilterTweeys.module.css";

export default function FilterTweets({ followOrNot }) {
  const dispatch = useDispatch();

  const filterItem = useSelector(filterTweetSelector);

  const onChanged = (el) => {
    const tweetFilter = el.target.value;
    dispatch(filterTweet(el.target.value));
    followOrNot(el.target.value);
  };

  return (
    <>
      <select className={styles.dropDown} onChange={onChanged}>
        <option value={"all"}>show all</option>
        <option value={"false"}>follow</option>
        <option value={"true"}>followings</option>
      </select>
    </>
  );
}
