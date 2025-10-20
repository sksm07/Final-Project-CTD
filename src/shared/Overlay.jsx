import styled from "styled-components";
const OverlayBg = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1
        }
    }
`

export default function Overlay({onClick}) {
    return (
        <OverlayBg onClick={onClick}></OverlayBg>
    )
}