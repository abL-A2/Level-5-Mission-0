import styles from "./thumbnail.module.css";
// MUI imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// example array of thumbnail items to display
// this should be replaced by
const mediaCardItems = [
  {
    image: "/cat-public.png",
    caption: `Lorem ipsum dolor cat.`,
    alt: `A cat with an orange background`,
    url: `https://http.cat/`,
  },
  {
    image: "/dog-public.jpg",
    caption: `Lorem ipsum dogor.`,
    alt: `A dog with a bokeh background`,
    url: `https://http.dog/`,
  },
  {
    image: "/piwakawaka-public.jpg",
    caption: `Lorem ipsum dolor piwakawaka`,
    alt: `A piwakawaka perched on a branch`,
    url: `https://en.wikipedia.org/wiki/Fantail`,
  },
  {
    image: "/pukeko-public.jpg",
    caption: `Lorem ipsum dolor pukeko`,
    alt: `A pukeko striding on turf`,
    url: `https://www.nzbirdsonline.org.nz/species/pukeko`,
  },
];

export default function MediaCard() {
  // dynamically renders a thumbnail on the page per thumbnail item
  const mediaCardDisplay = mediaCardItems.map((card, index) => {
    return (
      // <li className={styles.content} key={index}>
      //   <a href={thumbnail.url}>
      //     <figure>
      //       <img src={thumbnail.image} alt={thumbnail.alt} />
      //       <figcaption>{thumbnail.caption}</figcaption>
      //     </figure>
      //   </a>
      // </li>

      <Card key={index} sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={card.image} alt={card.alt} height="140" sx={{ objectFit: "cover" }} />
        <CardContent>
          <Typography gutterBottom variatnt="body2" xs={{ color: "text.secondary" }}>
            {card.caption}
          </Typography>
        </CardContent>
      </Card>
    );
  });

  return (
    <div>
      <ul>{mediaCardDisplay}</ul>
    </div>
  );
}
