import styles from "../components/styles.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchChangePost, fetchUsers } from "../redux/usersOperations";

import FilterTweets from "../components/FilterTweets/FilterTweets";
import BntLoadMore from "../components/BntLoadMore/BntLoadMore";
import Btnback from "../components/Btnback/Btnback";
import TweetList from "../components/TweetList/TweetList";

let page;

function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const countFollowers = async (follow, id) => {
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === id) {
        const data = {
          followers: follow ? tweet.followers + 1 : tweet.followers - 1,
          follow,
        };
        handleAddFollow(id, data);
        return {
          ...tweet,
          ...data,
        };
      }

      return tweet;
    });

    setTweets(updatedTweets);

    return updatedTweets;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(fetchUsers({ page, limits: 8 }));
        if (data.payload.length < 8) {
          setLoadMore(false);
        }

        const local = JSON.parse(localStorage.getItem("tweet"));

        if (local.length > data.payload.length) {
          setTweets(local);
        } else {
          setTweets(data.payload);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    page = Number(localStorage.getItem("page")) || 1;
    handlePageChange(page);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweet", JSON.stringify(tweets));
  }, [tweets]);

  const handlePageChange = async (newPage) => {
    page = newPage;
    try {
      const data = await dispatch(fetchUsers({ page: newPage, limits: 8 }));
      localStorage.setItem("page", newPage);
      setTweets(data.payload);
      setLoadMore(data.payload.length === 8);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddFollow = async (id, newData) => {
    const data = await dispatch(fetchChangePost({ id, newData }));
  };

  const followOrNot = (el) => {
    setFilter(el);
  };

  return (
    <div className={styles.container}>
      <div className={styles.fitches}>
        {page > 1 && <Btnback handlePageChange={handlePageChange} />}
        <FilterTweets followOrNot={followOrNot} />
      </div>
      <TweetList
        tweets={tweets}
        filter={filter}
        countFollowers={countFollowers}
      />
      {loadMore && <BntLoadMore handlePageChange={handlePageChange} />}
    </div>
  );
}

export default Tweets;
