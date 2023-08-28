import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(45deg, #120c56, #000000, #1d267d, #d4adfc);
  background-size: 300% 300%;
  color: #fff;
  min-height: 100vh;
  animation: colors 8s infinite ease;

  @keyframes colors {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const AreaForm = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  width: 100%;
  padding: 25px 0;
  border-bottom: 1px solid #16195c;

  h1 {
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;

    span {
      display: inline-block;
      opacity: 1;
    }
  }

  p {
    color: #b8b8d4;
  }
`;

export const Step = styled.div`
  flex: 1;
  display: flex;
  border-top: 1px solid #16195c;
`;

export const SideBar = styled.div`
  width: 300px;
  border-right: 1px solid #16195c;
`;

export const Profile = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Info = styled.div`
  flex: 1;
  h1 {
    font-size: 22px;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: 1;
  }
`;

export const Icon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #494a7c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }

  &.highlighted {
    background-color: #25cd89;
  }
`;

export const Page = styled.div`
  width: 15px;
  height: 15px;
  border: 3px solid #494a7c;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -11px;
  background: #02044a;

  &.highlighted {
    background: #25cd89;
  }
`;

export const Pages = styled.div`
  width: 100%;
`;

export const ContainerName = styled.div`
  width: 90%;
  padding: 20px 90px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 13px;
    margin-top: 15px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 15px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background: transparent;
    }
  }

  button {
    width: 25%;
    background-color: transparent;
    color: #25cd89;
    font-size: 14px;
    padding: 20px 40px;
    border: 2px solid #25cd89;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 25px;
    transition: 1s;

    &:hover {
      background-color: #25cd89;
      color: #fff;
    }
  }

  .disabled-button {
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const Informations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #16195c;
  padding-bottom: 20px;
`;

export const ContainerTime = styled.div`
  width: 90%;
  padding: 20px 90px;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    border: 1px solid #16195c;
    border-radius: 15px;
    padding: 10px 15px;
    margin-top: 15px;
    cursor: pointer;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 15px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background: transparent;
    }

    &:hover {
      border: 1px solid #494a7c;
    }
  }

  button {
    width: 25%;
    background-color: transparent;
    color: #25cd89;
    font-size: 14px;
    padding: 20px 40px;
    border: 2px solid #25cd89;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 25px;
    transition: 1s;

    &:hover {
      background-color: #25cd89;
      color: #fff;
    }
  }

  .selected {
    border: 3px solid #25cd89;

    &:hover {
      border: 3px solid #25cd89;
    }
  }
`;

export const InformationsTime = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #16195c;
  padding-bottom: 20px;
`;

export const Emoji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: #494a7c;
  border-radius: 50%;
  font-size: 40px;
`;

export const ContainerMail = styled.div`
  width: 90%;
  padding: 20px 90px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 13px;
    margin-top: 15px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 15px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background: transparent;
    }
  }

  button {
    width: 25%;
    background-color: transparent;
    color: #25cd89;
    font-size: 14px;
    padding: 20px 40px;
    border: 2px solid #25cd89;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 25px;
    transition: 1s;

    &:hover {
      background-color: #25cd89;
      color: #fff;
    }
  }

  .disabled-button {
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const InformationsMail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #16195c;
  padding-bottom: 20px;
`;
