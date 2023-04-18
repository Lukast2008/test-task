import Button from "../Button/Button";
import styles from "../styles.module.css";
import sprite from "../../assets/image/Vector.svg";
import myImage from "../../assets/image/picture2 1.png";
import defaultAvatar from "../../assets/image/Hansel.png";

export default function TweetList({ tweets, filter, countFollowers }) {
  const filterTweet = tweets.filter((tweet) => {
    if (filter === "all") {
      return true;
    }
    return tweet.follow.toString() === filter;
  });

  return (
    <>
      <ul className={styles.listItem}>
        {filterTweet.map(({ user, avatar, followers, id, tweets, follow }) => (
          <li key={id} className={styles.card}>
            <div>
              <svg width="76" height="22" className={styles.logo}>
                <use href={sprite + "#icon-Vector"}></use>
              </svg>
              <img className={styles.image} src={myImage} alt="image" />
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
                  <span>{tweets.toLocaleString()}</span> TWEETS
                </h2>
                <h2>
                  <span>{followers.toLocaleString()}</span> FOLLOWERS
                </h2>
                <Button count={countFollowers} id={id} foll={follow} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
