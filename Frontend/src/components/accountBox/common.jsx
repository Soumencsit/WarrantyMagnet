import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(15, 15, 15, 0.28);
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed rgba(15, 15, 15, 0.28);
`;

export const BoldLink = styled.a`
  font-size: 15px;
  color: #101820;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px dashed #101820;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(15, 15, 15, 0.28);
  border-radius: 5px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 5px;

  &::placeholder {
    color: #101820;
  }


  &:focus {
    outline: none;
    border-bottom: 1px solid #FEE715;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 150px;
  margin-left:80px;
  padding: 10px;
  color: #101820;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 240ms ease-in-out;
  background: linear-gradient(
    58deg, #FEE715 20%, #FEE715 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

export const LineText = styled.p`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
`;


