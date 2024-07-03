import  { useState } from "react";
import "./tabla.css";

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);
  //   const history = useHistory();

  const products = [
    {
      logo: "JG",
      name: "Nombre del producto",
      description: "Descripción",
      releaseDate: "01/01/2000",
      restructureDate: "01/01/2001",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClick = () => {
    history.push("/form");
  };

  const handleEditClick = (index) => {
    history.push(`/form?edit=${index}`);
  };

//   const handleDeleteClick = (index) => {
//     // Agrega lógica para eliminar producto
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const currentProducts = filteredProducts.slice(
//     startIndex,
//     startIndex + rowsPerPage
//   );

  return (
    <div className="container">
      <div className="search-add-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button className="add-button" onClick={handleAddClick}>
          Agregar
        </button>
      </div>

      <div className="table">
        <div className="table-header">
          <div>Logo</div>
          <div>Nombre del producto</div>
          <div>
            Descripción
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 256 256"
            >
              <g fill="#000000">
                <path
                  d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
                  opacity=".2"
                />
                <path d="M144 176a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m88-48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-92-32a12 12 0 1 0-12-12a12 12 0 0 0 12 12" />
              </g>
            </svg>
          </div>
          <div>
            Fecha de liberación
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 256 256"
            >
              <g fill="#000000">
                <path
                  d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
                  opacity=".2"
                />
                <path d="M144 176a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m88-48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-92-32a12 12 0 1 0-12-12a12 12 0 0 0 12 12" />
              </g>
            </svg>
          </div>
          <div>
            Fecha de reestructuración
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 256 256"
            >
              <g fill="#000000">
                <path
                  d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
                  opacity=".2"
                />
                <path d="M144 176a8 8 0 0 1-8 8a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 8 8m88-48A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88m-92-32a12 12 0 1 0-12-12a12 12 0 0 0 12 12" />
              </g>
            </svg>
          </div>
          <div></div>
        </div>
        <div className="table-container">
          <div className="table-body">
            {filteredProducts.slice(0, rowsPerPage).map((product, index) => (
              <div className="table-row" key={index}>
                <div>{product.logo}</div>
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>{product.releaseDate}</div>
                <div>{product.restructureDate}</div>
                <div>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 256 256"
                    >
                      <g fill="#000000">
                        <path
                          d="M152 128a24 24 0 1 1-24-24a24 24 0 0 1 24 24m-24-56a24 24 0 1 0-24-24a24 24 0 0 0 24 24m0 112a24 24 0 1 0 24 24a24 24 0 0 0-24-24"
                          opacity=".2"
                        />
                        <path d="M128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16m0-64a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m0 144a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16" />
                      </g>
                    </svg>
                  </button>
                  <div className="menu">
                    <button onClick={() => handleEditClick(index)}>
                      Editar
                    </button>
                    {/* <button onClick={() => handleDeleteClick(index)}>
                      Eliminar
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pagination">
        <span>{filteredProducts.length} Resultados</span>
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default ProductTable;
