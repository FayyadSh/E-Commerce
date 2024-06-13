import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const { category, categoryImg, categoryTitle } = styles;

interface props {
  title:string
  img:string
  prefix:string
}
const Category = ({title,img,prefix}:props) => {
  return (
    <Link to={`/categories/products/${prefix}`} className={category}>
      <div className={categoryImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h4 className={categoryTitle}>{title}</h4>
    </Link>
  );
};

export default Category;