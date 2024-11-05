import styles from "./thumbnail.module.css";

export default function Thumbnail() {
  const thumbnailItems = [
    { image: "/cat-public", caption: `A cat with an orange background`, url: `https://http.cat/` },
    { image: "/dog-public", caption: `A dog with a bokeh background`, url: `https://http.dog/` },
    {
      image: "/piwakawaka-public",
      caption: `A piwakawaka perched on a branch`,
      url: `https://en.wikipedia.org/wiki/Fantail`,
    },
    {
      image: "/pukeko-public",
      caption: `A pukeko striding on turf`,
      url: `https://www.nzbirdsonline.org.nz/species/pukeko`,
    },
  ];

  const thumbnailDisplay = thumbnailItems.map((thumbnail, index) => {
    return (
      <li className={styles.thumbnail} key={index}>
        <a href={thumbnail.url}>
          <figure>
            <img src={thumbnail.image} />
            <figcaption>{thumbnail.caption}</figcaption>
          </figure>
        </a>
      </li>
    );
  });

  return (
    <div>
      <ul>{thumbnailDisplay}</ul>
    </div>
  );
}
