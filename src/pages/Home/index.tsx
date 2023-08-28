import React, { useState, useReducer } from "react";
import * as S from './styles';
import profile from '../../img/profile.svg';
import book from '../../img/book.svg';
import mail from '../../img/mail.svg';

interface State {
    name: string;
    level: number;
    email: string;
    github: string;
}

interface UpdateFieldAction {
    type: "UPDATE_NAME" | "UPDATE_EMAIL" | "UPDATE_GITHUB";
    payload: string;
}

type Action = UpdateFieldAction;

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "UPDATE_NAME":
            return { ...state, name: action.payload };
        case "UPDATE_EMAIL":
            return { ...state, email: action.payload };
        case "UPDATE_GITHUB":
            return { ...state, github: action.payload };
        default:
            return state;
    }
}

const profiles = [
    { title: 'Pessoal', subtitle: 'Profissional', icon: profile },
    { title: 'Profissional', subtitle: 'Seu nível', icon: book },
    { title: 'Contatos', subtitle: 'Como te achar', icon: mail }
];

export function HomeForm() {
    const [selectedOption, setSelectedOption] = useState<string>("Iniciante");
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        level: 1,
        email: '',
        github: ''
    });

    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBackStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleIconPage = (index: number) => {
        if (currentStep === 1 && state.name.trim() === '') {
            alert("Ops, você não digitou seu nome")
        } else {
            setCurrentStep(index + 1);
        }
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        type: "UPDATE_NAME" | "UPDATE_EMAIL" | "UPDATE_GITHUB"
    ) => {
        dispatch({ type, payload: event.target.value });
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const isNameEmpty = state.name.trim() === "";
    const isEmailEmpty = state.email.trim() === "";
    const isGitEmpty = state.github.trim() === "";

    return (
        <S.Container>
            <S.AreaForm>
                <S.Header>
                    <h1>Cadastro de Desenvolvedor</h1>
                    <p>Preencha os dados abaixo</p>
                </S.Header>
                <S.Step>
                    <S.SideBar>
                        {profiles.map((profile, index) => (
                            <S.Profile key={index}>
                                <S.Info>
                                    <h1>{profile.title}</h1>
                                    <p>{profile.subtitle}</p>
                                </S.Info>
                                <S.Icon
                                    className={currentStep === index + 1 ? 'highlighted' : ''}
                                    onClick={() => handleIconPage(index)}
                                >
                                    <img src={profile.icon} alt="" />
                                </S.Icon>
                                <S.Page
                                    className={currentStep === index + 1 ? 'highlighted' : ''}
                                />
                            </S.Profile>
                        ))}
                    </S.SideBar>
                    <S.Pages>
                        {currentStep === 1 && (
                            <S.ContainerName>
                                <S.Informations>
                                    <p>Passo 1/3</p>
                                    <h1>Vamos começar pelo seu nome</h1>
                                    <span>Prencha o campo abaixo com seu nome completo:</span>
                                </S.Informations>
                                <label>
                                    Seu nome completo
                                    <input
                                        type="text"
                                        autoFocus={true}
                                        placeholder="Digite seu nome"
                                        value={state.name}
                                        onChange={(e) => handleInputChange(e, "UPDATE_NAME")}
                                    />
                                </label>
                                <button
                                    onClick={handleNextStep}
                                    disabled={isNameEmpty}
                                    className={isNameEmpty ? 'disabled-button' : ''}
                                >
                                    Próximo
                                </button>
                            </S.ContainerName>
                        )}

                        {currentStep === 2 && (
                            <S.ContainerTime>
                                <S.InformationsTime>
                                    <p>Passo 2/3</p>
                                    <h1>Olá {state.name}, o que melhor descreve você</h1>
                                    <p>Escolha a opção abaixo de acordo com o seu profissional.</p>
                                </S.InformationsTime>
                                <label
                                    onClick={() => handleOptionSelect("Iniciante")}
                                    className={selectedOption === "Iniciante" ? "selected" : ""}
                                >
                                    <S.Emoji>
                                        🥳
                                    </S.Emoji>
                                    <div>
                                        <h2>Sou iniciante</h2>
                                        <p>Comecei a programar a menos de 1 ano</p>
                                    </div>
                                </label>

                                <label
                                    onClick={() => handleOptionSelect("Experiente")}
                                    className={selectedOption === "Experiente" ? "selected" : ""}
                                >
                                    <S.Emoji>
                                        😎
                                    </S.Emoji>
                                    <div>
                                        <h2>Sou Programador</h2>
                                        <p>Programos há 2 anos ou mais</p>
                                    </div>
                                </label>
                                <button onClick={handleBackStep}>
                                    Voltar
                                </button>
                                <button onClick={handleNextStep}>
                                    Próximo
                                </button>
                            </S.ContainerTime>
                        )}

                        {currentStep === 3 && (
                            <S.ContainerMail>
                                <S.InformationsMail>
                                    <p>Passo 3/3</p>
                                    <h1>Agora, onde te achamos?</h1>
                                    <span>Preencha os campos abaixo com seu email e seu GitHub</span>
                                </S.InformationsMail>
                                <label>
                                    Seu email
                                    <input
                                        type="text"
                                        autoFocus={true}
                                        value={state.email}
                                        onChange={(e) => handleInputChange(e, "UPDATE_EMAIL")}
                                    />
                                </label>
                                <label>
                                    Seu GitHub
                                    <input
                                        type="text"
                                        autoFocus={true}
                                        value={state.github}
                                        onChange={(e) => handleInputChange(e, "UPDATE_GITHUB")}
                                    />
                                </label>
                                <button onClick={handleBackStep}>
                                    Voltar
                                </button>
                                <button
                                    disabled={isEmailEmpty || isGitEmpty}
                                    className={(isEmailEmpty || isGitEmpty) ? 'disabled-button' : ''}
                                >
                                    Próximo
                                </button>
                            </S.ContainerMail>
                        )}
                    </S.Pages>
                </S.Step>
            </S.AreaForm>
        </S.Container>
    );
}
