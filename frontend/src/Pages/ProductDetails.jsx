import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import { useNavigate } from "react-router-dom";
import UpdateModal from "./UpdateModal";


const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } =  useFetch('http://localhost:3000/products/' + id);

  const navigate = useNavigate();

  const handleDeleteClick = () => {
    fetch('http://localhost:3000/products/' + product.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    });
  }

  return (
    <div className="product-details">
      {isPending && <div>Carregando...</div>}
      {error && <div>{error}</div>}
      {product && (
        <article>
          <img className="img-detail" src={`../${product.img}`} alt="img" />
          <br />
          <button style={{
            "marginLeft": '65%',
          }}>Adicionar ao carrinho</button>
          <br />
          <h2>{product.title}</h2>
          <p>R$ {product.price}</p>
          <div>{product.body}</div>
          <div>
            <button onClick={() => setIsModalOpen(true)} style={{
              "marginLeft": '10%',
              "backgroundColor": "darkblue"
            }}>Atualizar produto</button>

            <button onClick={handleDeleteClick} style={{
              "marginLeft": '25%',
              "backgroundColor": "#ff0000"
            }}>Deletar produto</button>
          </div>
        </article>
      )}
    </div>
  );
}

export default ProductDetails;