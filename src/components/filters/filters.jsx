import { Button, Nav, NavDropdown } from "react-bootstrap";
import { CartState } from "../../context/context";

const Filters = () => {
  const {
    productState: { byBrand, byCategory, byStock, sort },
    productDispatch,
  } = CartState();

  const handleBrandFilter = (brand) => {
    console.log("byBrand", byBrand);

    productDispatch({
      type: "FILTER_BY_BRAND",
      payload: brand,
    });
  };

  const handleCategoryFilter = (category) => {
    console.log("byCategory", byCategory);
    productDispatch({
      type: "FILTER_BY_CATEGORY",
      payload: category,
    });
  };

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <Nav>
        <NavDropdown id="nav-dropdown-dark" title="By Brand" menuVariant="dark">
          <NavDropdown.Item onClick={() => handleBrandFilter("MuscleTech")}>
            Muscletech
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleBrandFilter("Optimum Nutrition")}
          >
            Optimum Nutrition
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleBrandFilter("BSN")}>
            BSN
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleBrandFilter("Gibbon Nutrition")}
          >
            Gibbon Nutrition
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleBrandFilter("BPI")}>
            BPI
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleBrandFilter("Dymatize")}>
            Dymatize
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleBrandFilter("Labrada Nutrition")}
          >
            Labrada
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleBrandFilter("Gaspari Nutrition")}
          >
            Gaspari Nutrition
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark"
          title="By Category"
          menuVariant="dark"
        >
          <NavDropdown.Item
            onClick={() => handleCategoryFilter("Whey Protein")}
          >
            Whey Protein
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleCategoryFilter("Mass Gainer")}>
            Mass Gainer
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleCategoryFilter("Creatine")}>
            Creatine
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleCategoryFilter("BCAA")}>
            BCAA
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => handleCategoryFilter("Omega 3")}>
            Omega 3
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => handleCategoryFilter("Multi Vitamin")}
          >
            Multi Vitamin
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <NavDropdown id="nav-dropdown-dark" title="By Price" menuVariant="dark">
          <NavDropdown.Item
            onClick={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "LowToHigh",
              })
            }
            checked={sort === "LowToHigh" ? true : false}
          >
            Low To High
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "HighToLow",
              })
            }
            checked={sort === "LowToHigh" ? true : false}
          >
            High To Low
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Button
        variant="light"
        onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
