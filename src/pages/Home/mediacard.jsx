// import styles from "./mediacard.module.css";
// MUI imports
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

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
  // MUI hook to get size breakpoints
  const theme = useTheme();
  // Boolean MUI hooks that check if screen size is at or below specified breakpoints
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  // for screens beyond 1200px
  const isXlOrLarger = useMediaQuery(theme.breakpoints.up("xl"));

  // column count per screen size - mobiles(1) : tablets(2) : small pc screens(3) : widescreens(5) : default (4)
  const cols = isXs ? 1 : isSm ? 2 : isMd ? 3 : isXlOrLarger ? 5 : 4;

  return (
    <ImageList
      sx={{
        width: "100%",
        height: "auto",
      }}
      cols={cols}
      gap={8}
      rowHeight={200}
    >
      {/* enables dynamic rendering of media card objects through their props */}
      {mediaCardItems.map((card, index) => (
        <a href={card.url} target="_blank" key={index} style={{ textDecoration: "none", color: "inherit" }}>
          <ImageListItem>
            {/* fits the image to card, loads image only when user scroll approaches the image */}
            <img
              src={card.image}
              alt={card.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              loading="lazy"
            />
            <ImageListItemBar title={card.caption}></ImageListItemBar>
          </ImageListItem>
        </a>
      ))}
    </ImageList>
  );
}
