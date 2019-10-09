import React from "react";
import Grid from "@material-ui/core/Grid";
import FavoriteButton from "../Buttons/FavoriteButton";
import TagList from "../Tags/TagList";
import { Link } from "react-router-dom";
import ArticleAuthor from "./ArticleAuthor";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { styles } from "./styles/ArticleStyle";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

interface ArticleProps {
  image: string;
  username: string;
  createdAt: string;
  favoritesCount: number;
  title: string;
  description: string;
  tagList: Array<string>;
  slug: string;
  favorited: boolean;
  onFavorite: (article: { favorited: boolean; slug: string }) => void;
}

const Article: React.FC<ArticleProps & WithStyles<typeof styles>> = props => {
  const handleFavorite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    props.onFavorite({
      slug: event.currentTarget.id,
      favorited: props.favorited
    });
  };

  return (
    <>
      <Card className={props.classes.card}>
        <ArticleAuthor
          image={props.image}
          createdAt={props.createdAt}
          username={props.username}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>

          <TagList tagList={props.tagList} />
        </CardContent>
        <CardActions style={{ float: "right" }}>
          <FavoriteButton
            favorited={props.favorited}
            favoritesCount={props.favoritesCount}
            slug={props.slug}
            onFavorite={handleFavorite}
          />
        </CardActions>
        <CardActions>
          <Link
            color="primary"
            className={props.classes.articleBody}
            to={`/article/${props.slug}`}
          >
            Read more...
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default withStyles(styles)(Article);
