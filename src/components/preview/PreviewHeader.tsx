import { useSelector } from "react-redux";
import styled from "styled-components";
import { formSelector } from "../../stores/form";
import { CardContainer } from "../common/layouts/CardContainer";
import { HeaderPurpleLine } from "../common/HeaderPurpleLine";

export const PreviewHeader = () => {
  const { title: formTitle, desc: formDesc } = useSelector(formSelector);

  return (
    <CardContainer>
      <HeaderPurpleLine />
      <FormTitle>{formTitle}</FormTitle>
      <FormDesc>{formDesc}</FormDesc>

      <EssentialMention>* 필수 항목</EssentialMention>
    </CardContainer>
  );
};

const FormTitle = styled.h2`
  font-size: 32px;
  line-height: 135%;
`;

const FormDesc = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 135%;
  padding: 20px 0 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const EssentialMention = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
`;
