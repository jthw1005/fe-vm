/* eslint-disable react/prop-types */
import * as uiConst from "constant/uiConstant";
import styled from "styled-components";

function VendingMachineInput({ inputRef }) {
    return <CoinInput type="text" ref={inputRef} placeholder="금액을 입력해주세요" />;
}

const CoinInput = styled.input`
    height: ${uiConst.INSERT_INPUT_HEIGHT};
    width: ${uiConst.INSERT_INPUT_WIDTH};
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export default VendingMachineInput;
