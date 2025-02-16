import { useState, useEffect } from "react";

const UpdateModal = () => {

  const [prod, setProd] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    price: "",
    img: null,
  });

  useEffect(() => {

    if (product){
      const fetchProduct = () => {
        fetch('http://localhost:3000/products/' + product.id)
        .then(res => {
          return res.json()
        })
        .then(data => {
          setProd(data);
          setFormData({
            title: data.title,
            body: data.body,
            price: data.price,
            img: data.img
          });
        })
      };
      fetchProduct();
    }
  }, []);


  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "img" ){
      const file = files[0];
      const fileName = file.name;
      setFormData({...formData,[name]: fileName,});
    } else {
      setFormData({...formData, [name]: value,});
    }
  };


  const handleUpdateClick = async () => {
    try{
      const response = await fetch(`http://localhost:3000/products/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      alert("Produto Atualizado com sucesso");
      setIsModalOpen(false); 

      const updatedResponse = await fetch(`http://localhost:3000/products/${product.id}`);
      const updatedData = await updatedResponse.json();
      setProd(updatedData);
    }catch (error){
      console.error("Error updating product:", error);
    }
  }

  {isModalOpen && (
    <div >
      <div >
        <h2>Editar Produto</h2>
        <form  >
          <div>
            <label>Nome:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Preço:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Imagem:</label>
            <input
              type="file"
              name="img"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" onClick={handleUpdateClick}>Update</button>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  )}
}

export default UpdateModal