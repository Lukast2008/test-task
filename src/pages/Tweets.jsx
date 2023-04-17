import styles from "../components/styles.module.css";
import stylesBTN from "../components/Button/button.module.css";
import sprite from "../assets/image/Vector.svg";
import myImage from "../assets/image/picture2 1.png";
import defaultAvatar from "../assets/image/Hansel.png";
import Button from "../components/Button/Button";
import { lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChangePost, fetchUsers } from "../redux/usersOperations";
import { userSelector } from "../redux/userSelector";
import FilterTweets from "../components/FilterTweets/FilterTweets";
import { filterTweetSelector } from "../redux/userSelector";

let page = 1;
function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [followers, setFollowers] = useState(7777);
  const [loadMore, setLoadMore] = useState(true);
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const { users, status } = useSelector((state) => state);

  const countFollowers = async (follow, id) => {
    const updatedTweets = tweets.map((tweet) => {
      if (tweet.id === id) {
        const data = {
          followers: follow ? tweet.followers + 1 : tweet.followers - 1,
          follow: follow,
        };
        handleAddFollow(id, data);
        return {
          ...tweet,
          followers: follow ? tweet.followers + 1 : tweet.followers - 1,
          follow: follow,
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
        const data = await dispatch(fetchUsers({ page: page, limits: 8 }));
        if (data.payload.length < 8) {
          setLoadMore(false);
        }
        setTweets(data.payload);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("tweet", JSON.stringify(tweets));
  }, [tweets]);



  const handlePageChange = async () => {
    page = page + 1;
    const data = await dispatch(fetchUsers({ page, limits: 8 }));

    setTweets((prevState) => [...prevState, ...data.payload]);
    if (data.payload.length < 8) {
      setLoadMore(false);
    }
  };

  const handleAddFollow = async (id, newData) => {
    const data = await dispatch(fetchChangePost({ id, newData }));
  };

  const followOrNot = (el) => {
    setFilter(el);
  };

  const filterTweet = tweets.filter((tweet) => {
    if (filter === "all") {
      return true;
    }
    return tweet.follow.toString() === filter;
  });

  return (
    <div className={styles.container}>
      <FilterTweets followOrNot={followOrNot} />
      <ul className={styles.listItem}>
        {filterTweet.map(({ user, avatar, followers, id, tweets, follow }) => (
          <li key={id} className={styles.card}>
            <div>
              <svg width="76" height="22" className={styles.logo}>
                <use href={sprite + "#icon-Vector"}></use>
              </svg>
              <img className={styles.hero} src={myImage} alt="image" />
            </div>
            <div className={styles.Rectangle}>
              <div className={styles.circle}>
                <div className={styles.backAvatar}>
                  {avatar ? (
                    <img className={styles.avatar} src={avatar} alt={user} />
                  ) : (
                    <img
                      className={styles.avatar}
                      src={defaultAvatar}
                      alt="user"
                    />
                  )}
                </div>
              </div>
              <div className={styles.follow}>
                <h2 className={styles.text}>
                  <span>{tweets}</span> TWEETS
                </h2>
                <h2>
                  <span>{followers}</span> FOLLOWERS
                </h2>
                <Button count={countFollowers} id={id} foll={follow} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      {loadMore && (

        
        <button  className={stylesBTN.Button} type="button" onClick={handlePageChange}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Tweets;
