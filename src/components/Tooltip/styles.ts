import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 20px;
  height: 20px;

  span {
    width: 160px;
    background: #c53030;
    color: #f4ede8;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top: 10px solid #c53030;

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }

    opacity: 0;
    transition: opacity 0.2s;
    visibility: hidden;
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
