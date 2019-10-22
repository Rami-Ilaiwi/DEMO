import React from "react";
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

interface ArticleCardProps {
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

const ArticleCard: React.FC<ArticleCardProps & WithStyles<typeof styles>> = ({
  image,
  username,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
  slug,
  favorited,
  onFavorite,
  classes
}) => {
  const handleFavorite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onFavorite({
      slug: event.currentTarget.id,
      favorited: favorited
    });
  };

  return (
    <>
      <Card className={classes.card}>
        <ArticleAuthor
          image={image}
          createdAt={createdAt}
          username={username}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>

          <TagList tagList={tagList} />
        </CardContent>
        <CardActions className={classes.button}>
          <FavoriteButton
            favorited={favorited}
            favoritesCount={favoritesCount}
            slug={slug}
            onFavorite={handleFavorite}
          />
        </CardActions>
        <CardActions>
          <Link
            color="primary"
            className={classes.articleBody}
            to={`/article/${slug}`}
          >
            Read more...
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default withStyles(styles)(ArticleCard);
