import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './styles.css'





const Dash = () => {
    return (
        <>

            <CardGroup>
                <Card>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Data</InputGroup.Text>
                        <FormControl
                            aria-label="Data"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Meta</InputGroup.Text>
                        <FormControl
                            aria-label="Meta"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <br />
                </Card>
                <Card>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className='areatextpos'>Pontos positivos</InputGroup.Text>
                        <textarea label="Pontos negativos"></textarea>
                    </InputGroup>
                    <br />

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default" className='areatextneg'>Pontos negativos</InputGroup.Text>
                        <textarea label="Pontos negativos"></textarea>
                    </InputGroup>
                </Card>
            </CardGroup>
        </>


    );

}

export default Dash;