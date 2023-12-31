import { useState } from "react";
import { Button, Card, Form, Modal, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { Input } from "./Input";

export function Customer(props) {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [isUpdated, setIsUpdated] = useState(false);

    async function editCustomer(data) {
        await props.editCustomer({ ...data, id: props.customer.id });
        setIsUpdated(false);
    }

    return (
        <>
            <Card className="mb-3 p-3 bg-light">
                <Card.Title><strong>Nome: </strong>{props.customer.nome}</Card.Title>
                <Card.Text><strong>Email: </strong>{props.customer.email}</Card.Text>
                <Row xs="auto" className="d-flex justify-content-end">
                    <Button variant="secondary" onClick={() => setIsUpdated(true)}>Editar</Button>
                    <Button
                        variant="outline-danger"
                        className="ms-3"
                        onClick={props.removeCustomer}
                    >
                        Apagar
                    </Button>
                </Row>
            </Card>
            <Modal show={isUpdated} onHide={() => setIsUpdated(false)}>
                <Modal.Header>
                    <Modal.Title>Editar cliente: {props.customer.nome}</Modal.Title>
                </Modal.Header>
                <Form noValidate onSubmit={handleSubmit(editCustomer)} validated={!errors}>
                    <Modal.Body>
                        <Input
                            className="mb-3"
                            type='text'
                            defaultValue={props.customer.nome}
                            label='Nome do cliente'
                            placeholder='Insira o nome do cliente'
                            required={true}
                            name='nameCustomer'
                            error={errors.nameCustomer}
                            validations={register('nameCustomer', {
                                required: {
                                    value: true,
                                    message: 'Nome do cliente é obrigatório.'
                                }
                            })}
                        />
                        <Input
                            className="mb-3"
                            type='text'
                            defaultValue={props.customer.email}
                            label='Email do cliente'
                            placeholder='Insira o email do cliente'
                            required={true}
                            name='emailCustomer'
                            error={errors.emailCustomer}
                            validations={register('emailCustomer', {
                                required: {
                                    value: true,
                                    message: 'Email do cliente é obrigatório.'
                                }
                            })}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Editar
                        </Button>
                        <Button variant="secondary" onClick={() => setIsUpdated(false)}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
