import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useParams } from "react-router-dom";


function ViewProduct() {
    const { product_id } = useParams();

    const [viewProduct, setViewProduct] = useState({});
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${product_id}`)
            .then((response) => setViewProduct(response.data))
            .catch((error) => console.log(error))
    }, []);


    return (
        <main>
            <section>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={3} key={viewProduct.id}>
                            <div>
                                <img src={viewProduct.image} style={{ width: "100px" }} />
                                <h3>{viewProduct.title}</h3>
                                <p className='price-tag'>${viewProduct.price}</p>
                                <p>{viewProduct.description}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default ViewProduct;