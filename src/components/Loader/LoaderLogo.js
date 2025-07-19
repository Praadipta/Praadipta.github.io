import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* --- HEXAGON PATHS (from your original file) --- */}
        <path
          className="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          strokeWidth="4"
        />
        <path
          className="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          strokeWidth="4"
        />
        
        {/* --- ADDED 'PA' LOGO (Reverted to fluid drawing style) --- */}
        <g transform="translate(145, 60) scale(0.6)">
            <path
                className="logo-path logo-p"
                d="M 80 170 L 80 80 C 80 50, 120 50, 120 80 C 120 110, 80 110, 80 125"
            />
            <path
                className="logo-path logo-a"
                d="M 130 170 L 155 80 L 180 170 M 110 125 L 170 125"
            />
        </g>

        {/* --- TEXT ANIMATION --- */}
        <defs>
            <clipPath id="text-clip">
                <rect className="text-clip-rect" x="50" y="240" width="340" height="60" />
            </clipPath>
            <style
                dangerouslySetInnerHTML={{
                __html: `
                    .myHexagon {
                        stroke-dasharray: 800;
                        stroke-dashoffset: 800;
                        animation: dash 4s linear forwards 0.5s;
                    }

                    @keyframes dash {
                        from { stroke-dashoffset: 800; }
                        to { stroke-dashoffset: 0; }
                    }

                    /* --- Styles for PA Logo (Fluid Version) --- */
                    .logo-path {
                        stroke-dasharray: 500;
                        stroke-dashoffset: 500;
                        fill-opacity: 0;
                        stroke-width: 10;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        animation: 
                            draw 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards,
                            fillIn 1s ease-out forwards;
                    }
                    .logo-p {
                        stroke: #0A2463; 
                        fill: #0A2463;
                        animation-delay: 1.5s, 3.5s; /* Draw, then Fill */
                    }
                    .logo-a {
                        stroke: #FFB627;
                        fill: #FFB627;
                        animation-delay: 2.0s, 3.5s; /* Draw, then Fill */
                    }

                    /* Shared Keyframes */
                    @keyframes draw { to { stroke-dashoffset: 0; } }
                    @keyframes fillIn { to { fill-opacity: 1; } }

                    /* --- Styles for Text --- */
                    .logo-text {
                        font-family: 'Dancing Script', cursive;
                        font-size: 50px;
                        font-weight: 500;
                        fill: ${theme.body};
                    }
                    .text-clip-rect {
                        animation: revealTextWipe 2.5s ease-out forwards;
                        animation-delay: 4.0s;
                    }
                    @keyframes revealTextWipe {
                        from { width: 0; }
                        to { width: 340; }
                    }
                `,
                }}
            />
        </defs>
        
        <g clipPath="url(#text-clip)">
            <text x="220" y="285" textAnchor="middle" className="logo-text">
                Pradipta Aulia
            </text>
        </g>
      </svg>
    );
  }
}

export default LogoLoader;
