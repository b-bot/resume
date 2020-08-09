const Sketch = props => (
<svg
  clipRule="evenodd"
  fillRule="evenodd"
  strokeLinejoin="round"
  strokeMiterlimit={1.414}
  viewBox="0 0 100 100"
  {...props}
>
  <path
    d="M22.827 11.08l27.076-2.862 27.076 2.863L97.94 39.22 49.903 95.158 1.865 39.22z"
    fill="#fdb300"
  />
  <path
    d="M21.323 39.22l28.58 55.94L1.865 39.22zM78.483 39.22l-28.58 55.94L97.94 39.22z"
    fill="#ea6c00"
  />
  <path d="M21.323 39.22h57.16l-28.58 55.94z" fill="#fdad00" />
  <g>
    <path
      d="M49.903 8.218l-27.076 2.863-1.504 28.14zM49.903 8.218l27.076 2.863 1.504 28.14z"
      fill="#fdd231"
    />
    <path
      d="M97.94 39.22L76.98 11.08l1.504 28.14zM1.865 39.22l20.962-28.14-1.504 28.14z"
      fill="#fdad00"
    />
    <path d="M49.903 8.218L21.323 39.22h57.16z" fill="#feeeb7" />
  </g>
</svg>
)

export default Sketch
