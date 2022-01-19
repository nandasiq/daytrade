import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import './styles.css';
import axios from 'axios';
import Api from '../../../../services/api'





class Dash extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: '', capital: '', data: '', delta: '', user: '', meta: '', metaloss: '', pobservacao:'',
        poperacao : '', resultado : ''  };

        this.handleChangeId         =    this.handleChangeId.bind(this);
        this.handleChangeCapital    =    this.handleChangeCapital.bind(this);
        this.handleChangeData       =    this.handleChangeData.bind(this);
        this.handleChangeDelta      =    this.handleChangeDelta.bind(this);
        this.handleChangeUser       =    this.handleChangeUser.bind(this);
        this.handleChangeMeta       =    this.handleChangeMeta.bind(this);
        this.handleChangeMetaLoss   =    this.handleChangeMetaLoss.bind(this);
        this.handleChangePObervacao =    this.handleChangePObservacao.bind(this);
        this.handleChangePOperacao  =    this.handleChangePOperacao.bind(this);
        this.handleChangeResultado  =    this.handleChangeResultado.bind(this);
        this.handleSubmit           =    this.handleSubmit.bind(this);
    }


    handleChangeId(event) {
        this.setState({ id           :   event.target.value });
    }
    handleChangeCapital(event) {
        this.setState({ capital      :   event.target.value });
    }
    handleChangeData(event) {
        this.setState({ data         :   event.target.value });
    }
    handleChangeDelta(event) {
        this.setState({ delta        :   event.target.value });
    }
    handleChangeUser(event) {
        this.setState({ user         :   event.target.value });
    }
    handleChangeMeta(event) {
        this.setState({ meta         :   event.target.value });
    }
    handleChangeMetaLoss(event) {
        this.setState({ metaloss     :   event.target.value });
    }
    handleChangePObservacao(event) {
        this.setState({ pobservacao  :   event.target.value });
    }
    handleChangePOperacao(event) {
        this.setState({ poperacao    :   event.target.value });
    }
    handleChangeResultado(event) {
        this.setState({ resultado    :   event.target.value });
    }



    handleSubmit(event) {
        event.preventDefault();
        const id           =    this.state.id;
        const capital      =    this.state.capital;
        const data         =    this.state.data;
        const delta        =    this.state.delta;
        const user         =    this.state.user;
        const meta         =    this.state.meta;
        const metaloss     =    this.state.metaloss;
        const pobservacao  =    this.state.pobservacao;
        const poperacao    =    this.state.poperacao;
        const resultado    =    this.state.resultado;

        axios({
            method: 'put',
            url: Api + 'items' ,
            data: {
                id          :   id,
                capital     :   capital,
                data        :   data,
                delta       :   delta,
                user        :   user,
                meta        :   meta,
                metaloss    :   metaloss,
                pobservacao :   pobservacao,
                poperacao   :   poperacao,
                resultado   :   resultado,

            }
        });
        let content = document.getElementById('area')

        let carregando = `<p>sending...</p>`

        let pronto = `<p class="cadastrado">DIARY SENT SUCCESSFULLY!</p>`

        content.innerHTML = carregando


        setTimeout(() => {
            content.innerHTML = pronto
        }, 1000)
    }

    render() {
        const {  id, capital , data , delta , user , meta , metaloss , pobservacao , poperacao , resultado   } = this.state
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
}

export default Dash;