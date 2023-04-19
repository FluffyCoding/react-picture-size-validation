import {Form, Container, Row, Card, Col, Button, Image} from "react-bootstrap";
import {useState} from "react";
import picture from '../assets/react.svg'

function UploadPicture() {

    let formData = new FormData();

    const [image, setImage] = useState({preview: "", raw: ""});

    function handleSubmit(e) {
        e.preventDefault();
        formData = image.raw;
    }

    function handleFileSelected(event) {
        const MAX_FILE_SIZE = 1024;
        const file = event.target.files[0];
        if (file.size / 1024 > MAX_FILE_SIZE) {
            window.alert("File Size is Exceeded");
            event.target.value = null
            return;
        }

        setImage({
            preview: URL.createObjectURL(event.target.files[0]),
            raw: event.target.files[0]
        });
    }

    return (
        <>
            <Container>
                <Row className='justify-content-lg-center mt-5'>
                    <Col xs lg='5'>
                        <Card>
                            <Card.Header>Upload Image</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row className='justify-content-lg-center'>
                                        <Col lg='5'>
                                            <Form.Group controlId="formFileLg" className="mb-3">
                                                <Form.Control onChange={handleFileSelected}
                                                              type="file"
                                                              accept="image/png, image/jpeg"
                                                              style={{display: "none"}}
                                                              id="upload-button"
                                                />
                                                <label htmlFor="upload-button">
                                                    {image.preview ? (
                                                        <Image src={image.preview} alt="Upload Image" width="200"
                                                               height="200"/>
                                                    ) : (<>
                                                        <Image src={picture} width="150" height="150"/>
                                                    </>)}
                                                </label>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <Col lg='2'>
                                            <Button variant="secondary" type="submit" onClick={handleSubmit}>
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )

}

export default UploadPicture;
