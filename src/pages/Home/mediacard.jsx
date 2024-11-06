// import styles from "./mediacard.module.css";
// MUI imports
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
// import Typography from "@mui/material/Typography";

// example array of thumbnail items to display
// ? eventually replace with queries
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

// this component dynamically renders media with accompanying text - either a caption or a snippet, ideal for newsbites - using properties passed through from a database, though for demonstration we are using the hardcoded dummy array above
export default function MediaCard() {
  return (
    <ImageList sx={{ width: "100%", height: "auto" }} cols={4} gap={8}>
      {/* enables dynamic rendering of media card objects through props */}
      {mediaCardItems.map((card, index) => (
        <a href={card.url} target="_blank" key={index} style={{ textDecoration: "none", color: "inherit" }}>
          <ImageListItem>
            <img src={card.image} alt={card.alt} style={{ objectFit: "cover" }} />
            <ImageListItemBar title={card.caption}></ImageListItemBar>
          </ImageListItem>
        </a>
      ))}
    </ImageList>
  );
}
