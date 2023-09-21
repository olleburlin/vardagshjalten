import React from "react"

import { useStaticQuery, graphql } from "gatsby"

export default function SellingPoints() {
  const data = useStaticQuery(graphql`
    {
      wpPage(databaseId: { eq: 40 }) {
        id
        sellingPoints {
          punkterSellingpoints {
            beskrivningSellingpoint
            titelSellingpoint
          }
        }
      }
    }
  `)
  const points = data.wpPage.sellingPoints?.punkterSellingpoints
  console.log(points)
  return (
    <div className="bg-secondary/10 text-secondary">
      <div className="container max-w-screen-2xl mx-auto px-4 md:px-8 py-16 md:py-32 space-y-32">
        <div className="grid lg:grid-cols-3 gap-4 md:gap-16">
          {points?.slice(0, 6).map((sellingPoint, i) => {
            return (
              <SellingPoint key={i} index={i} sellingPoint={sellingPoint} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

function SellingPoint({ sellingPoint, index }) {
  const { titelSellingpoint, beskrivningSellingpoint } = sellingPoint
  return (
    <div className="flex flex-row gap-8 text-xl ">
      <div className="w-16 lg:w-20 flex-none">
        {index === 0 ? (
          <StarIcon />
        ) : index === 1 ? (
          <LockIcon />
        ) : index === 2 ? (
          <HeartIcon />
        ) : index === 3 ? (
          <CheckIcon />
        ) : index === 4 ? (
          <ClockIcon />
        ) : index === 5 ? (
          <PhoneIcon />
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">{titelSellingpoint}</div>
        <div className="text-base">{beskrivningSellingpoint}</div>
      </div>
    </div>
  )
}

function LockIcon() {
  return (
    <div>
      <svg
        id="Layer_1"
        x="0"
        y="0"
        preserveAspectRatio="xMidYMin slice"
        viewBox="0 0 512 512"
        enable-background="new 0 0 512 512"
        className="fill-current text-primary"
      >
        <switch>
          <g>
            <g>
              <g>
                <path
                  d="M7.922,256.002c0-137.02,111.069-248.078,248.074-248.078c137.013,0,248.082,111.059,248.082,248.078
           c0,137.005-111.069,248.074-248.082,248.074C118.991,504.076,7.922,393.007,7.922,256.002z"
                ></path>
              </g>
            </g>
            <g>
              <rect
                x="133.691"
                y="240.18"
                width="244.617"
                height="159.848"
                fill="#FFFFFF"
              ></rect>
              <g>
                <path
                  d="M349.719,340.14c-7.712,0-13.964-6.252-13.964-13.964V190.191c0-43.977-35.778-79.755-79.755-79.755
           s-79.754,35.778-79.754,79.755c0,7.712-6.252,13.964-13.964,13.964s-13.964-6.252-13.964-13.964
           c0-59.376,48.306-107.683,107.682-107.683s107.683,48.307,107.683,107.683v135.984
           C363.683,333.888,357.431,340.14,349.719,340.14z"
                  fill="#FFFFFF"
                ></path>
              </g>
              <path
                d="M282.639,309.276c0-14.715-11.926-26.64-26.639-26.64c-14.712,0-26.639,11.925-26.639,26.64
         c0,9.357,4.83,17.583,12.129,22.334c0,4.243,0,9.407,0,11.45c0,8.015,6.496,14.509,14.51,14.509s14.51-6.494,14.51-14.509
         c0-2.043,0-7.207,0-11.449C277.809,326.859,282.639,318.634,282.639,309.276z"
                class="SvgIcon--primaryFill"
              ></path>
            </g>
          </g>
        </switch>
      </svg>
    </div>
  )
}

function StarIcon() {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMin slice"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      className="fill-current text-primary"
    >
      <switch>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="M7.921,256.006C7.921,118.984,118.99,7.924,255.996,7.924c137.013,0,248.083,111.061,248.083,248.082
            c0,137.002-111.07,248.07-248.083,248.07C118.99,504.076,7.921,393.008,7.921,256.006z"
                          className="SvgIcon--primaryFill"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <polygon
              points="255.992,97.883 304.789,196.702 413.85,212.569 334.914,289.486 353.547,398.119 255.992,346.831 
158.426,398.119 177.064,289.486 98.15,212.569 207.226,196.702 			"
              fill="#FFFFFF"
            ></polygon>
          </g>
        </g>
      </switch>
    </svg>
  )
}
function HeartIcon() {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMin slice"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      className="fill-current text-primary"
    >
      <switch>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="M7.921,256.006C7.921,118.984,118.99,7.924,255.996,7.924c137.013,0,248.083,111.061,248.083,248.082
            c0,137.002-111.07,248.07-248.083,248.07C118.99,504.076,7.921,393.008,7.921,256.006z"
                          className="SvgIcon--primaryFill"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <path
              d="M382.037,163.066c-34.799-34.8-91.223-34.8-126.022,0h-0.029c-34.801-34.8-91.224-34.8-126.023,0
				c-34.801,34.8-29.783,86.842,0,126.022c31.541,41.491,89.129,109.944,126.023,109.944h0.029
				c36.895,0,94.481-68.453,126.022-109.944C411.821,249.909,416.837,197.867,382.037,163.066z"
              fill="#FFFFFF"
            ></path>
          </g>
        </g>
      </switch>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      id="Layer_1"
      x="0"
      y="0"
      preserveAspectRatio="xMidYMin slice"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      className="fill-current text-primary"
    >
      <switch>
        <g>
          <g>
            <g>
              <g>
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <path
                            d="M504.079,256.006c0-137.021-111.07-248.082-248.076-248.082
                       C118.991,7.924,7.921,118.984,7.921,256.006c0,137.002,111.07,248.07,248.082,248.07
                       C393.009,504.076,504.079,393.008,504.079,256.006z"
                            class="SvgIcon--primaryFill"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M392.594,172.889c-5.84-15.059-17.74-12.682-30.635-10.127c-7.701,1.605-41.953,11.631-96.148,68.777
             c-22.49,23.717-37.326,42.625-47.094,57.045c-5.967-7.326-12.803-15.164-19.982-22.346
             c-22.078-22.072-46.699-37.23-47.734-37.867c-10.332-6.316-23.82-3.066-30.154,7.258c-6.326,10.324-3.086,23.834,7.23,30.174
             c0.211,0.133,21.354,13.205,39.619,31.475c18.627,18.629,35.504,43.822,35.67,44.066c4.109,6.178,11.008,9.783,18.266,9.783
             c1.246,0,2.504-0.105,3.756-0.322c8.566-1.488,15.447-7.893,17.545-16.332c0.053-0.203,8.756-24.256,54.73-72.727
             c37.029-39.053,61.723-51.465,70.279-54.908c0.082-0.014,0.141-0.02,0.252-0.043c-0.041,0.01,0.277-0.137,0.793-0.369
             c1.469-0.551,2.256-0.762,2.301-0.773c-0.422,0.105-0.641,0.131-0.641,0.131l-0.014-0.076
             c3.959-1.727,11.371-4.916,11.533-4.984C393.326,196.139,396.955,184.135,392.594,172.889z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </switch>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 199.324 199.324"
      version="1.1"
      viewBox="0 0 199.324 199.324"
      xmlSpace="preserve"
    >
      <circle cx="99.662" cy="99.662" r="99.662" fill="#8FC13A"></circle>
      <path
        fill="#FFF"
        d="M129.666 31.081H69.658c-7.099 0-12.859 5.76-12.859 12.859v111.444c0 7.099 5.76 12.859 12.859 12.859h60.008c7.099 0 12.859-5.76 12.859-12.859V43.94c0-7.099-5.759-12.859-12.859-12.859zm-30.004 128.59c-4.742 0-8.573-3.831-8.573-8.573s3.831-8.573 8.573-8.573 8.573 3.831 8.573 8.573-3.831 8.573-8.573 8.573zm30.004-28.933a3.225 3.225 0 01-3.215 3.215H72.873a3.225 3.225 0 01-3.215-3.215V47.155a3.225 3.225 0 013.215-3.215h53.579a3.225 3.225 0 013.215 3.215v83.583z"
      ></path>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 171.478 171.478"
      version="1.1"
      viewBox="0 0 171.478 171.478"
      xmlSpace="preserve"
    >
      <circle cx="85.739" cy="85.739" r="85.739" fill="#8FC13A"></circle>
      <path
        fill="#FFF"
        d="M125.311 98.93H85.739a6.595 6.595 0 01-6.595-6.595V32.977a6.595 6.595 0 0113.19 0V85.74h32.977a6.595 6.595 0 010 13.19z"
      ></path>
    </svg>
  )
}
