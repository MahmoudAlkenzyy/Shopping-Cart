import { InfinitySpin } from 'react-loader-spinner';

export default function Spinner() {
    return (
        <div className="bg-dark z-3 d-flex position-fixed fixed-top bottom-0 bg-opacity-75 justify-content-center align-items-center bg-darl">
            <InfinitySpin
                visible={true}
                color="#fff"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    );
}
export function SpinnerMine() {
    <InfinitySpin
        visible={true}
        color="#fff"
        height="30"
        width="40"
        ariaLabel="infinity-spin-loading"
    />;
}
