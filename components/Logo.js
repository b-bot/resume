const Logo = props => (
  <div className="logo">
    <svg width={35} height={35} viewBox="0 0 813 690" {...props}>
      <defs>
        <path id="prefix__b" d="M388.58 0l388.579 660H0z" />
        <filter
          id="prefix__a"
          width="200%"
          height="200%"
          x="-50%"
          y="-50%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={10}
            result="shadowSpreadOuter1"
          />
          <feOffset dy={2} in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={2}
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
        </filter>
      </defs>
      <g fill="#fff" fillRule="evenodd" transform="translate(18 20)">
        <use filter="url(#prefix__a)" xlinkHref="#prefix__b" />
        <use
          fillOpacity={0}
          stroke="#fff"
          strokeWidth={20}
          xlinkHref="#prefix__b"
        />
        <text fontFamily="LucidaGrande, Lucida Grande" fontSize={350}>
          <tspan x={283.056} y={514}>
            {'\u03B2'}
          </tspan>
        </text>
      </g>
    </svg>
    <style jsx>{`
    .logo {
      position: absolute;
      top: 20px;
      left: 40px;
      max-width: 25px;
    }
    .logo:hover {
      cursor: pointer;
    }
    `}</style>
  </div>
)

export default Logo
