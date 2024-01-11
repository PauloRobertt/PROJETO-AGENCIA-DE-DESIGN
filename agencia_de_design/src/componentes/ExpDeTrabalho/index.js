import Card from '../Card';

import './style.css';

export default function ExpDeTrabalho(props){
    return(
        <div className={`Exp ${props.fundo} ${props.corDiferente}`}>
            <div className="Experiencia">
                <div className='titulo'>
                    <h1>Experiências De Trabalho</h1>
                    <hr></hr>
                </div>
                <p className="descricao">
                    Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
                </p>
                <div className="card">
                    <Card
                        data="JUNHO 2012 - 2016"
                        titulo="Web Designer"
                        subTitulo="Pied Piper StartUp."
                        descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    />
                    <Card
                        data="AGOSTO 2016 - 2019"
                        titulo="Product Designer"
                        subTitulo="E Corp."
                        descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    />
                    <Card
                        data="FEVEREIRO 2019 - 2021"
                        titulo="Digital Consulting"
                        subTitulo="Arasaka Inc."
                        descricao="Consultoria em estratégias digitais para todas as  etapas do ciclo do projeto, desde a definição inicial até a execução"
                    />
                </div>
            </div>
        </div>
    )
}