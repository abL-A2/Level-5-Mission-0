// MUI hooks to enable responsive column arrangement
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// MUI imports for image list layout
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

// example array of card objects to display
// ? eventually replace with queries

const placeHolder = `Lorem ipsum dolor`;
const mediaCardItems = [
  {
    image: "/cat-public.png",
    caption: placeHolder,
    alt: `A cat with an orange background`,
    url: `https://http.cat/`,
  },
  {
    image: "/dog-public.jpg",
    caption: `Lorem ipsum dogor`,
    alt: `A dog with a bokeh background`,
    url: `https://http.dog/`,
  },
  {
    image: "/piwakawaka-public.jpg",
    caption: placeHolder,
    alt: `A piwakawaka perched on a branch`,
    url: `https://en.wikipedia.org/wiki/Fantail`,
  },
  {
    image: "/pukeko-public.jpg",
    caption: placeHolder,
    alt: `A pukeko striding on turf`,
    url: `https://www.nzbirdsonline.org.nz/species/pukeko`,
  },

  {
    image: "/cat-public.png",
    caption: placeHolder,
    alt: `A cat with an orange background`,
    url: `https://http.cat/`,
  },
  {
    image: "/dog-public.jpg",
    caption: `Lorem ipsum dogor`,
    alt: `A dog with a bokeh background`,
    url: `https://http.dog/`,
  },
  {
    image: "/piwakawaka-public.jpg",
    caption: placeHolder,
    alt: `A piwakawaka perched on a branch`,
    url: `https://en.wikipedia.org/wiki/Fantail`,
  },
  {
    image: "/pukeko-public.jpg",
    caption: placeHolder,
    alt: `A pukeko striding on turf`,
    url: `https://www.nzbirdsonline.org.nz/species/pukeko`,
  },
];
// dynamically renders media with captions or snippets, ideal for newsbites; hardcoded array for demo only
export default function MediaCard() {
  // MUI hook to get size breakpoints
  const theme = useTheme();
  // Boolean MUI hooks that check if screen size is at or below specified breakpoints
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const isMd = useMediaQuery(theme.breakpoints.down("lg"));
  // for screens beyond 1200px like freakin Sam's
  const isXlOrLarger = useMediaQuery(theme.breakpoints.up("xl"));

  // column count per screen size - mobiles(1) : tablets(2) : small pc screens(3) : widescreens(5) : default (4)
  const cols = isXs ? 1 : isSm ? 2 : isMd ? 3 : isXlOrLarger ? 5 : 4;

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <ImageList
        sx={{
          flex: "1",
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
              {/* fits the image to card */}
              <img src={card.image} alt={card.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <ImageListItemBar title={card.caption}></ImageListItemBar>
            </ImageListItem>
          </a>
        ))}
      </ImageList>
    </div>
  );
}
